
var StarsFrame = React.createClass({
    
    render: function() {

        var stars = [];

        for(var i = 0; i < this.props.numberOfStars; i++) {
            stars.push(
                <span className="glyphicon glyphicon-star"></span>
            );
        }

        return (
            <div id="stars-frame">
                <div className="well">
                    {stars}
                </div>
            </div>
        );
    }
});

var ButtonFrame = React.createClass({
    
    render: function() {
        
        var disabled, button, correct = this.props.correct;
        
        switch(correct) {
            
            case true:
                button = (
                    <button className="btn btn-success btn-lg" 
                            onClick={this.props.acceptAnswer}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>
                );
                break;
                
            case false:
                 button = (
                    <button className="btn btn-danger btn-lg" disabled={disabled}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                );
                break;
                
            default:
                disabled = (this.props.selectedNumbers.length === 0);
                button = (
                    <button className="btn btn-primary btn-lg" disabled={disabled}
                            onClick={this.props.checkAnswer}>
                            =
                    </button>
                );
        }

        return (
            <div id="button-frame">
                {button}
                <br /><br />
                <button className="btn btn-warning btn-xs" onClick={this.props.redraw}
                        disabled={this.props.redraws === 0}>
                    <span className="glyphicon glyphicon-refresh"></span>
                    &nbsp;
                    {this.props.redraws}
                </button>
            </div>
        );
    }
});

var AnswerFrame = React.createClass({
    
    render: function() {

        var props = this.props;
        var selectedNumbers = props.selectedNumbers.map(function(i) {
            return (
                <span onClick={props.unselectNumber.bind(null, i)}>
                    {i}
                </span>
            );
        });
        
        return (
           <div id="answer-frame">
                <div className="well"> 
                    {selectedNumbers}
                </div>
            </div>
        );
    }
});

var NumbersFrame = React.createClass({
    
    render: function() {
        
        var numbers = [], className, 
            selectNumber = this.props.selectNumber,
            selectedNumbers = this.props.selectedNumbers,
            usedNumbers = this.props.usedNumbers;
        
        for(var i = 1; i <= 9; i++) {
            className = "number selected-" + (selectedNumbers.indexOf(i) >= 0);
            className += " used-" + (usedNumbers.indexOf(i)>=0);
            numbers.push(
                <div className={className} onClick={selectNumber.bind(null, i)}>
                    {i}
                </div>
            );
        }
        
        return (
           <div id="numbers-frame">
                <div className="well"> 
                    {numbers}
                </div>
            </div>
        );
    }
});

var DoneFrame = React.createClass({
    
    render: function() {
        return (
            <div className="well text-center">
                <h2>{this.props.doneStatus}</h2>
            </div>
        );
    }
});

var Game = React.createClass({

    getInitialState: function() {

        return { numberOfStars: this.randomNumber(),
                selectedNumbers: [],
                usedNumbers: [],
                redraws: 5,
                correct: null,
                doneStatus: null
        };
    },
    
    randomNumber: function() {
        return (Math.floor(Math.random() * 9) + 1);
    },
    
    acceptAnswer:function() {
        var usedNumbers = this.state.usedNumbers.concat(this.state.selectedNumbers);
        this.setState({
            selectedNumbers: [],
            usedNumbers: usedNumbers,
            correct: null,
            numberOfStars: this.randomNumber()
        });
    },
    
    checkAnswer: function() {
        
        var correct = (this.state.numberOfStars === this.sumOfSelectedNumbers());
        this.setState({correct: correct});
        
    },
    
    redraw: function() {
        if(this.state.redraws > 0) {
            this.setState({
                numberOfStars: this.randomNumber(),
                correct: null,
                selectedNumbers: [],
                redraws: this.state.redraws - 1
            });    
        }
    },
    
    selectNumber: function(clickedNumber) {
    	
        if(this.state.selectedNumbers.indexOf(clickedNumber) < 0) {
            this.setState(
                { selectedNumbers: this.state.selectedNumbers.concat(clickedNumber),
                correct: null}
            );    
        }
    },
    
    sumOfSelectedNumbers: function() {
        return this.state.selectedNumbers.reduce( (p,n) => (p+n), 0);
    },
    
    unselectNumber: function(clickedNumber) {

        var selectedNumbers = this.state.selectedNumbers,
            indexOfNumber = selectedNumbers.indexOf(clickedNumber);
        
        selectedNumbers.splice(indexOfNumber, 1);
        
        this.setState({ selectedNumbers: selectedNumbers, correct: null });
    },
    
    possibleSolution: function() {
        var numberOfStars = this.state.numberOfStars,
            possibleNumbers = [],
            usedNUmbers = this.state.usedNumbers;
        for(var i = 1; i <=9 ;i++){
            if(usedNUmbers.indexOf(i) < 0) {
                possibleNumbers.push(i);
            }
        }
        
        return possibleCombinationSum(possibleNumbers, numberOfStars);
    },
    
    updateDoneStatus: function() {
        if(this.state.usedNumbers.length === 9){
            this.setState({doneStatus: 'Done, Nice!'});
            return;
        } 
        if(this.state.redraws ===0 && !this.possibleSolution()){
            this.setState({doneStatues: 'Game Over!'});
        }
    },
    
    render: function() {
        
        var selectedNumbers = this.state.selectedNumbers,
            numberOfStars = this.state.numberOfStars,
            usedNumbers = this.state.usedNumbers,
            redraws = this.state.redraws,
            correct = this.state.correct,
            doneStatus = this.state.doneStatus,
            bottomFrame;
        
        if (doneStatus) {
            bottomFrame = <DoneFrame doneStatus={doneStatus} />;
        } else {
            bottomFrame = <NumbersFrame selectedNumbers={this.state.selectedNumbers}
                              usedNumbers={usedNumbers}
                              selectNumber={this.selectNumber} />
        }
        
        return (
            <div id="game">
                <h2>Play Nine</h2>
                <hr />
                <div className="clearfix">
                
                    <StarsFrame numberOfStars={this.state.numberOfStars} />
                    
                    <ButtonFrame selectedNumbers={this.state.selectedNumbers}
                                 correct={correct}
                                 redraws={redraws}
                                 checkAnswer={this.checkAnswer}
                                 acceptAnswer={this.acceptAnswer}
                                 redraw={this.redraw}/>
                                 
                    <AnswerFrame selectedNumbers={this.state.selectedNumbers} 
                                 unselectNumber={this.unselectNumber} />
                                 
                </div>
                
                {bottomFrame}
                
            </div>
        );
    }
});

React.render(
    <Game />, document.getElementById('container')
);

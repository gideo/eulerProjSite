var Card = React.createClass({
    getInitialState: function() {
        return {};  
    },
    componentDidMount: function() {
        var component = this;
        $.get("https://api.github.com/users/" + this.props.login, function(data){
          component.setState(data);
        });
    },
    render: function() {
        let name = this.state.name || "No Name";
        name = name.split(" ")
        console.log(this.state.company);
        if(this.state.company) {
            return (
            <div className="box">
                <div className="userX"> 
                    <img src={this.state.avatar_url} width="75" />
                    <div className="fRight textRight">
                        <h1>{this.state.login}</h1>
                        <h4 className="font-oSans">{this.state.email}</h4>
                    </div>
                    <div className="bg">
                        <h4 className="font-oSans">{name[0]} {name[1]}</h4>
                        <h4 className="font-oSans">{this.state.company} in {this.state.location}</h4>
                    </div>
                    
                </div>
            </div>
            )
        }
        else if(this.state.location) {
            return (
            <div className="box">
                <div className="userX"> 
                    <img src={this.state.avatar_url} width="75" />
                    <div className="fRight textRight">
                        <h1>{this.state.login}</h1>
                        <h4 className="font-oSans">{this.state.email}</h4>
                    </div>
                    <div className="bg">
                        <h4 className="font-oSans">{name[0]} {name[1]}</h4>
                        <h4 className="font-oSans"> From {this.state.location}</h4>
                    </div>
                    
                </div>
            </div>
        ) }
        return (
            <div className="box">
                <div className="userX"> 
                    <img src={this.state.avatar_url} width="75" />
                    <div className="fRight textRight">
                        <h1>{this.state.login}</h1>
                        <h4 className="font-oSans">{this.state.email}</h4>
                    </div>
                    <div className="bg">
                        <h4 className="font-oSans">{name[0]} {name[1]}</h4>
                    </div>
                    
                </div>
            </div>
        )
    }
});

var Form = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var loginInput = React.findDOMNode(this.refs.login);
        this.props.addCard(loginInput.value);
        loginInput.value = "";
    },
    render: function() {
        return (
            <div className="divCenter">
                <form className="centered" onSubmit={this.handleSubmit}>
                    <input placeholder="Add GitHub User" ref="login"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
})

var Main = React.createClass({
    getInitialState: function() {
        return {logins: ["zpao", "fisherwebdev", "petehunt", "spicyj","jlord","moose-team","KevinMulhern","evanburkey",
                        "tlapinsk", "gideo"]};  
    },
    addCard: function(loginToAdd) {
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },
    render: function() {
        var cards = this.state.logins.sort().map(function(login) {
            return (<Card login={login} />);
        });
        return (
            <div>
                <Form addCard={this.addCard} />
                {cards}
            </div>
        )
    }
})

React.render(<Main />, document.getElementById("root"));
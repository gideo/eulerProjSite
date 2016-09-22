// Code goes here

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
        return (
            <div className="box">
                <div className="userX"> 
                    <img src={this.state.avatar_url} width="80" />
                    <h3 className="fRight">{this.state.login}</h3>
                    <h3>{this.state.name}</h3>
                    <h3>{this.state.company} In {this.state.location}</h3>
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
        loginInput.value = '';
    },
    render: function() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="Add GitHub Username" ref="login"/>
                <button>Add</button>
            </form>
        );
    }
})

var Main = React.createClass({
    getInitialState: function() {
        return {logins: ['zpao', 'fisherwebdev', "petehunt", "spicyj"]};  
    },
    addCard: function(loginToAdd) {
        this.setState({logins: this.state.logins.concat(loginToAdd)});
    },
    render: function() {
        var cards = this.state.logins.map(function(login) {
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
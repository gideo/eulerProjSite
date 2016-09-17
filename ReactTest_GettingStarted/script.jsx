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
                    <h3 className="fRight">{this.state.name}</h3>
                    <h3>{this.state.email}</h3>
                </div>
            </div>
        )
    }
});

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Card login="petehunt" />
                <Card login="spicyj" />
                <Card login="klkelley" />
                <Card login="KevinMulhern" />
            </div>
        )
    }
})

React.render(<Main />, document.getElementById("root"));
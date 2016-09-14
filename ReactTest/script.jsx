// Code goes here

var Button = React.createClass({
  localHandleClick: function() {
    this.props.localHandleClick(this.props.increment);  
  },
  render: function() {
    return (
      <button onClick={this.localHandleClick}>+{this.props.increment}</button>
    )
  }
});

var Multiply = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.mult);
    },
    render: function() {
        return (
            <button onClick={this.localHandleClick}>*{this.props.mult}</button>
        )
    }
});

var Divide = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.div);
    },
    render:function() {
        return (
            <button onClick={this.localHandleClick}>/{this.props.div}</button>
        )
    }
})

var Result = React.createClass({
  render: function() {
    return (
        <div>{this.props.localCounter}</div>
      )
  }
});

var Main = React.createClass({
  getInitialState: function() {
    return {counter: 0};
  },
  handleClick: function(increment) {
    this.setState({ counter: this.state.counter+increment });
  },
  multClick: function(mult) {
    this.setState( { counter: this.state.counter*mult });
  },
  divClick: function(div) {
      this.setState( { counter: this.state.counter/div});
  },
  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} increment={1} />
        <Button localHandleClick={this.handleClick} increment={5} />
        <Button localHandleClick={this.handleClick} increment={10} />
        <Button localHandleClick={this.handleClick} increment={100} />
        <Button localHandleClick={this.handleClick} increment={1000} />
        <Multiply localHandleClick={this.multClick} mult={2} />
        <Multiply localHandleClick={this.multClick} mult={4} />
        <Divide localHandleClick={this.divClick} div={2} />
        <Result localCounter={this.state.counter} />
      </div>
    )
  }
})

React.render(<Main />, document.getElementById("root"));


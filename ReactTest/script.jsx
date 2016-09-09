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

var Double = React.createClass({
    localHandleClick: function() {
        this.props.localHandleClick(this.props.double);
    },
    render: function() {
        return (
            <button onClick={this.localHandleClick}>*{this.props.double}</button>
        )
    }
});

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
  multClick: function(increment) {
      this.setState( { counter: this.state.counter*increment });
  },
  render: function() {
    return (
      <div>
        <Button localHandleClick={this.handleClick} increment={1} />
        <Button localHandleClick={this.handleClick} increment={5} />
        <Button localHandleClick={this.handleClick} increment={10} />
        <Button localHandleClick={this.handleClick} increment={25} />
        <Button localHandleClick={this.handleClick} increment={100} />
        <Button localHandleClick={this.handleClick} increment={1000} />
        <Double localHandleClick={this.multClick} double={2} />
        <Result localCounter={this.state.counter} />
      </div>
    )
  }
})

React.render(<Main />, document.getElementById("root"));


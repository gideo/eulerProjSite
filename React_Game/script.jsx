// Code goes here

var Game = React.createClass({
    render: function() {
        return (
            <div id="game">
                <h2>Play Nine</h2>
            </div>
        )
    }
})

React.render(
  <Game />,
  document.getElementById('container')
);

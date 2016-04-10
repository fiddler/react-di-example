import React from 'react'
import Nav from './Nav'
import State from './State'
import Widget from './Widget'

export default React.createClass({
  getInitialState: function() {
    return { widgets: State.widgets };
  },
  render() {
    let widgetNodes = this.state.widgets.map(function(widget) {
      return (
        <Widget title={widget.title} value={widget.value} />
      );
    });
    return <div>
      <Nav />
      <div className="container">
      <h2>Dashboard</h2>
      {widgetNodes}
      </div>
    </div>
  }
})

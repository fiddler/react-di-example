import React from 'react'

export default React.createClass({
  render() {
    return <div className="widget">
      <h3 className="title">{this.props.title}</h3>
      <p className="value">{this.props.value}</p>
    </div>
  }
})

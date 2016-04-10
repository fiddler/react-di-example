import React from 'react'
import Nav from './Nav'
import Widget from './Widget'
import State from './State'
import linkState from 'react-link-state';

export default React.createClass({
  getInitialState: function() {
    return {title: '', value: ''};
  },
  addWidget(e) {
    e.preventDefault();
    State.widgets.push({title: this.state.title, value: this.state.value});
    this.setState({ title: '', value: '' });
  },
  render() {
    return <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3>Add a widget</h3>
            <form onSubmit={this.addWidget}>
              <div className="form-group">
                <label htmlFor="title">Widget title</label>
                <input className="form-control" name="title" type="text" valueLink={linkState(this,'title')} />
              </div>
              <div className="form-group">
                <label htmlFor="value">Widget value</label>
                <input className="form-control" name="vlue" type="text" valueLink={linkState(this,'value')} />
              </div>
              <button type="submit" className="btn btn-default">Add widget</button>
            </form>
          </div>
          <div className="col-sm-6">
            <h3>Preview</h3>
            <Widget title={this.state.title} value={this.state.value} />
          </div>
        </div>
      </div>
    </div>
  }
})

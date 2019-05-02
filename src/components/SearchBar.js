import React, { Component } from 'react'

export default class SearchBar extends Component {

    state = { 
        search: ''
    }

    _onChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    _onSubmit = e => {
        e.preventDefault();
        this.props.submit(this.state.search);
    }

    render() {
        return (
            <div className="ui segment">
                <form  onSubmit={this._onSubmit} className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input type="text" value={this.state.search}  placeholder="Search..." onChange={this._onChange} />
                    </div>
                </form>
            </div>
        )
    }
}

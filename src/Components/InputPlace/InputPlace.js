import React from 'react'

import './InputPlace.css'

export default class InputPlace extends React.Component{

    state = {
        label: ''
    }

    changeText = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    submitText = (e) => {
        e.preventDefault()
        if (this.state.label != '') {
            this.props.inputItem(this.state.label)
            this.setState({
                label: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.submitText}>
                <input type="text"
                       placeholder="What's to do?"
                       className="input"
                       onChange={this.changeText}
                       value={this.state.label}
                />
                <button className="sendBtn" >
                    Send
                </button>
            </form>
        )
    }
}
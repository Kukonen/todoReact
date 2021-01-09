import React from 'react'

export default class FindItem extends React.Component {

    changeFindtext = (e) => {
        this.props.findItem(e.target.value)
    }

    render() {
        return <input type="text" placeholder="Such some task" onChange={this.changeFindtext} />
    }
}
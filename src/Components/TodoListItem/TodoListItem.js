import React from 'react'

import './TodoListItem.css'

export default class TodoListItem extends React.Component{

    state = {
        important: false,
        done: false
    }

    doneFunction = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    importantFunction = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        })
    }


    render() {

        const {label, deleteItem} = this.props

        const {done, important} = this.state;

        let style = "TextBlock";

        if (done) {
            style += " doneBlock";
        }

        if (important) {
            style += " importantBlock";
        }

        return (
            <div className="ItemBlock">
                <div className={style} onClick={this.doneFunction}>{label}</div>
                <button className="btn importantBtn" onClick={this.importantFunction}><i className="fa fa-exclamation" /></button>
                <button className="btn deleteBtn" onClick={deleteItem}><i className="fa fa-trash-o" /></button>
            </div>
        )
    }
}
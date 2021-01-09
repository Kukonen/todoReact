import React from 'react'
import TodoList from "../TodoList/TodoList";
import Header from "../Header/Header"
import InputPlace from "../InputPlace/InputPlace";
import FindItem from "../FindItem/FindItem";

import './App.css'

export default class App extends React.Component {

    maxId = 100;

    state = {
        items: [
            this.createNewItem("Message one"),
            this.createNewItem("Message two"),
            this.createNewItem("Message three")
        ],
        suchWord: ''
    }



    createNewItem(text) {
        return {
            id: this.maxId++,
            label: text,
            important: false,
            done: false
        }
    }


    deleteItem = (id) => {
        this.setState(({items}) => {
            const index = items.findIndex((el) => el.id === id)

            const newArray = [
                ...items.slice(0, index),
                ...items.slice(index + 1)
            ];

            return {
                items: newArray
            };
        });
    };

    inputItem = (text) => {
        const newItem = this.createNewItem(text);

        this.setState(({items}) => {
            const newArray = [
                ...items,
                newItem
            ];
            return {
                items: newArray
            }
        })
    }

    findItem = (text) => {
        this.setState({
            suchWord: text
        })
    }

    todoSuchList = () => {
        console.log(this.state.suchWord)
        const newArray =this.state.items.filter((item) => {
            return item.label.toLowerCase().indexOf(this.state.suchWord.toLowerCase()) > -1;
        })
        return newArray
    }

    render() {
        return  (
            <div className="AppMain">
                <Header />
                <FindItem findItem = {this.findItem}/>
                <TodoList todo = {this.state.suchWord == '' ? this.state.items : this.todoSuchList()} deleteItem = {this.deleteItem}/>
                <InputPlace inputItem = {this.inputItem} />
            </div>
        );
    }
}
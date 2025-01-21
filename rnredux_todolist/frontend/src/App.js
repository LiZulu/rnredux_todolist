import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
//import colors from './Colors'
import './App.css';

function App(){
    return (
        <div className='App'>
            <h1> My Todos </h1>

            <div className='todo-wrapper'>
                <div className='todo-input'>
                    <div className='todo-input-item'>
                        <label> Title </label>
                        <input type="text" placeholder="Whats the task title? " />
                    </div>

                    <div className='todo-input-item'>
                        <label> Description </label>
                        <input type="text" placeholder="Whats the task title? " />
                    </div>

                    <div className='todo-input-item'>
                        <label> Description </label>
                        <input type="text" placeholder="Whats the task title? " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
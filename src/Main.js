import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Screen from './Component/Screen'


export default class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Screen />
            </Provider> 
        );
    }
}

const defaultState = {
    listMovie: [
        { id: 1, title: 'Zomebieland', detail: 'Adventure, Horror, Comedy', watched: true, isShow: false },
        { id: 2, title: 'Harry Potter and the Goblet of Fire', detail: 'Adventure, Fantasy, Action', watched: false, isShow: false },
        { id: 3, title: 'Predestination', detail: 'Drama, Mystery, Sci-Fi', watched: true, isShow: false },
        { id: 4, title: 'Inception', detail: 'Action, Adventure, Sci-Fi', watched: true, isShow: false },
        { id: 5, title: 'Split', detail: 'Pyscho, Horror, Thriller', watched: false, isShow: false },
        { id: 6, title: 'Glass', detail: 'Drama, Sci-Fi, Thriller', watched: true, isShow: false },
        { id: 7, title: 'The Dark Knight', detail: 'Action, Crime, Drama', watched: false, isShow: false },
        { id: 8, title: 'Doctor Strange', detail: 'Action, Adventure, Comedy', watched: true, isShow: false },
        { id: 9, title: 'IT', detail: 'Horror, Action, Comedy', watched: true, isShow: false },
        { id: 10, title: 'John Wick', detail: 'Action, Crime, Thriller', watched: false, isShow: false },
        { id: 11, title: 'John Wick 2', detail: 'Action, Crime, Thriller', watched: true, isShow: false },
        { id: 12, title: 'John Wick 3', detail: 'Action, Crime, Thriller', watched: false, isShow: false },
        { id: 13, title: 'DeadPool', detail: 'Action, Adventure, Comedy', watched: true, isShow: false },
        { id: 14, title: 'DeadPool 2', detail: 'Action, Adventure, Comedy', watched: false, isShow: false }
    ],
    filterStatus: 'SHOW',
    Adding: false
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "FILTER_SHOW":
            return {...state, filterStatus: "SHOW"};
        case "FILTER_WATCHED":
            return {...state, filterStatus: "WATCHED"};
        case "FILTER_NOT_YET":
            return {...state, filterStatus: "NOT_YET"};
        case "WATCHED":
            return {
                ...state,
                listMovie: state.listMovie.map(e => {
                    if (e.id !== action.id) return e;
                    return {...e, watched:!e.watched};
                })
            };
        case "DETAIL":
            return {
                ...state,
                listMovie: state.listMovie.map(e => {
                    if (e.id !== action.id) return e;
                    return {...e, isShow:!e.isShow};
                })
            };
        case "ADD":
            return {
                ...state,
                Adding: !state.Adding
            };
        case "ADD_CONTENT":
            return {
                ...state,
                listMovie: [{
                    id: state.listMovie.length + 1,
                    title: action.title,
                    detail: action.detail,
                    watched: false,
                    isShow: false
                }].concat(state.listMovie)
            }
        default:
            break;
    }
    return state
}

const store = createStore(reducer);
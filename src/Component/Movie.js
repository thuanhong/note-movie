import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';


class Movie extends Component {

    setWatched() {
        this.props.dispatch({
            type: 'WATCHED',
            id: this.props.listAttr.id
        })
    }
    setDetail() {
        this.props.dispatch({
            type: 'DETAIL',
            id: this.props.listAttr.id
        })
    }

    render() {
        let {title, detail, watched, isShow} = this.props.listAttr
        let textDecorationLine = watched ? "line-through" : 'none'
        let textWatched = watched ? "not yet" : 'watched'
        let textDetail = isShow ? "hidden" : 'detail'
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn} onPress={this.setWatched.bind(this)}>
                        <Text>{textWatched}</Text>
                    </TouchableOpacity>
                    <Text style={{textDecorationLine, padding: 5}}>{title}</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btn} onPress={this.setDetail.bind(this)}>
                        <Text>{textDetail}</Text>
                    </TouchableOpacity>
                    <Text style={{padding: 5}}>{isShow ? detail : '...'}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        backgroundColor: 'gray',
        alignItems: 'stretch'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5
    },
    btn: {
        padding: 5,
        backgroundColor: '#525962',
        color: 'white',
        borderRadius: 5
    }
});

export default connect()(Movie);
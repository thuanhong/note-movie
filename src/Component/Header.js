import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'


class Header extends Component {

    setAdding() {
        this.props.dispatch({
            type: 'ADD'
        })
    }

    render() {
        let operator = this.props.add ? "-" : "+"
        return (
            <View style={styles.container}>
                <Text style={styles.text}/>
                <Text style={styles.text}>My Movie</Text>
                <TouchableOpacity style={{borderRadius: 5, borderWidth: 2}} onPress={this.setAdding.bind(this)}>
                    <Text style={styles.text}>{operator}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    
    },
    text: {
        fontSize: 20,
        padding: 10,
    }
});

export default connect()(Header);
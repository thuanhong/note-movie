import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {connect} from 'react-redux'


class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            detail: ''
        }
    }

    onAdd() {
        let {title, detail} = this.state
        if (title && detail) {
            this.props.dispatch({
                type: 'ADD_CONTENT',
                title,
                detail
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Input new movie"
                    value={this.state.title}
                    onChangeText={text => this.setState({title: text})}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Input movie detail"
                    value={this.state.detail}
                    onChangeText={text => this.setState({detail: text})}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btn} onPress={this.onAdd.bind(this)}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    input: {
        borderWidth: 1,
        padding: 9,
        margin: 10
    },
    btn: {
        backgroundColor: '#fddb8b',
        alignItems: 'center',
        margin: 10,
        padding: 9
    }
});

export default connect()(Form);
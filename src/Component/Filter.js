import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';



class Filter extends Component {
    getStyleText(tabName) {
        let {myStatus} = this.props
        if (tabName === myStatus) return styles.highlight
        return {flex: 1, justifyContent: 'center', alignItems: 'center'}
    }

    setFilterStatus(action) {
        this.props.dispatch({type: action})
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={this.getStyleText("SHOW")} onPress={() => this.setFilterStatus("FILTER_SHOW")}>
                    <Text style={styles.btn}>Show All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.getStyleText("WATCHED")} onPress={() => this.setFilterStatus("FILTER_WATCHED")}>
                    <Text style={styles.btn}>Watched</Text>
                </TouchableOpacity>
                <TouchableOpacity style={this.getStyleText("NOT_YET")} onPress={() => this.setFilterStatus("FILTER_NOT_YET")}>
                    <Text style={styles.btn}>Not Yet</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

function getStateFromStore(state) {
    return {myStatus: state.filterStatus}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#525962',
        flexDirection: 'row',
        alignItems: 'stretch',
    },
    btn: {
        fontSize: 20,
        color: 'white',
    },
    highlight: {
        flex: 1,
        backgroundColor: '#a09fa4',
        borderTopColor: 'blue',
        borderTopWidth: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(getStateFromStore)(Filter);
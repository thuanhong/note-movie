import React, { Component } from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';
import {connect} from 'react-redux';
import Movie from './Movie';
import Filter from './Filter'
import Header from './Header'
import Form from './Form'


class Screen extends Component {

    getListMovie() {
        const {status, arr} = this.props;
        if (status === 'WATCHED') return arr.filter(e => e.watched);
        if (status === 'NOT_YET') return arr.filter(e => !e.watched);
        return arr;
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Header add={this.props.adding}/>
                <View style={styles.flatList}>
                    {this.props.adding ? <Form/> : null}
                    <FlatList
                        data={this.getListMovie()}
                        renderItem={({item}) => <Movie listAttr={item}/>}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
                <Filter />
            </View>
        );
    }
}

function getDataFromStore(state) {
    return {
        status: state.filterStatus,
        arr: state.listMovie,
        adding: state.Adding,
    }
}

export default connect(getDataFromStore)(Screen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    flatList: {
        flex: 10,
    }
});
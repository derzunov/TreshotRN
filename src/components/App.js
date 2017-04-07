import React, { Component } from "react"
import { Text, View, StyleSheet } from "react-native"
import { connect } from "react-redux"
import { fetchData } from "../actions"


class App extends Component {
    componentDidMount() {
        this.props.fetchData()
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to Très Hot mobile app!
                    { this.props.isFetching }
                </Text>
                <Text style={styles.instructions}>
                    <Text>{this.props.isFetching ? "Fetching data..." : this.props.message}</Text>
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const mapStateToProps = ( { data: { isFetching, message } } ) => ({
    isFetching,
    message
})

const mapDispatchToProps = ( dispatch ) => ({
    fetchData: ()  => dispatch( fetchData() )
})

export default connect( mapStateToProps, mapDispatchToProps )( App )
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    ListView,
    Platform,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {title} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333949',
        paddingTop: Platform.OS == 'ios' ? 26 : 17,
        paddingBottom: Platform.OS == 'ios' ? 10 : 17,
        width
    },
    title: {
        fontSize: 18,
        // flex:1,
        color: '#fff',
        textAlign:'center'
    }
});



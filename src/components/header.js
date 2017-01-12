import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    ListView,
    Platform,
    Dimensions,
    Image,
    TouchableHighlight
} from 'react-native';
const {width} = Dimensions.get('window');

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {

    }

    render() {
        const {title, needBack} = this.props;
        return (
            <View style={styles.container}>
                {needBack ? <Text style={styles.base} onPress={this.goBack}>
                    <Image style={styles.back} source={require('../img/backArrow.png')}/>
                </Text> : <Text style={styles.base}></Text>}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.base}></Text>
            </View>
        );
    }

    goBack() {
        const {navigator} = this.props;
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333949',
        paddingTop: Platform.OS == 'ios' ? 26 : 17,
        paddingBottom: Platform.OS == 'ios' ? 10 : 17,
        width
    },
    title: {
        fontSize: 18,
        flex: 1,
        color: '#fff',
        textAlign: 'center'
    },
    back: {
        width: 16,
        height: 16,
        position: 'relative',
        left: 10,
    },
    base: {
        flex: 1,
    }
});



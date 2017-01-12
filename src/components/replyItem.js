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
    TouchableHighlight,
    WebView
} from 'react-native';
const {width} = Dimensions.get('window');

export default class ReplyItem extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }

    render() {
        const {reply, index} = this.props;
        let content = reply.content.replace(/(<.+?\/?>)/g, '');
        return (
            <View style={styles.reply}>
                <View style={[styles.header,styles.horizon]}>
                    <Image style={styles.avatar} source={{uri:reply.author.avatar_url}}/>
                    <Text>{reply.author.loginname}</Text>
                    <Text style={styles.blue}>{index + 1}·楼</Text>
                    <Text style={styles.blue}>{reply.create_at.slice(0, 10)}</Text>
                </View>
                <Text style={styles.replyContent}>{content}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    reply: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    header: {
        // flex:1
    },
    avatar: {
        width: 24,
        height: 24,
    },
    horizon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    blue: {
        color: '#269ad4'
    },
    htmlContent: {
        // flex:1
    },
    replyContent:{
        color:'#333',
        marginTop:6
    }
});



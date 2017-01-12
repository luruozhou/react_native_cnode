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
    Image
} from 'react-native';
const {width} = Dimensions.get('window');

export default class ArticleItem extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {article} = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.avatar} source={{uri:article.author.avatar_url}}/>
                <View style={styles.content}>
                    <View style={styles.header}>
                        {!article.top && <Text style={styles.top}>置顶</Text>}
                        {article.good && <Text style={styles.top}>精华</Text>}
                        <Text style={styles.title}>{article.title}</Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.reply}>{article.reply_count}/{article.visit_count}</Text>
                        <Text style={styles.createAt}>{article.create_at.slice(0,10)}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 2,
        marginBottom: 2,
        flex:1,
        width
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight:4
    },
    content: {
        flexDirection: 'column',
        flex:1,
        marginRight: 6,
        justifyContent:'space-between'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // flex: 1,
    },
    top: {
        backgroundColor: '#80bd01',
        color: '#fff',
        marginRight: 3,
        fontSize: 14,
        padding: 2,
        paddingBottom: 2,
        borderRadius: 2
    },
    title: {
        fontSize: 14,
        color:'#333',
        flex:1
    },
    footer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    createAt:{
        color:'#666'
    },
    reply:{
        color:'#666'
    }
});



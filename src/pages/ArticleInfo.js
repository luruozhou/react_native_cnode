import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    ListView,
    ScrollView
} from 'react-native';
import {getArticleInfoById} from '../fetchData';
import Header from '../components/header';
import ArticleContent from '../components/articleContent';
import ReplyItem from '../components/replyItem';
import LoadingView from '../components/LoadingView';

export default class ArticleInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            article: {},
            loading: false,
            isRefreshing: false,
            hasLoadData: false,
            pageNo: 1,
            pageSize: 10
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        })
        InteractionManager.runAfterInteractions(() => {
            getArticleInfoById(this.props.tid)
                .then(data => {
                    this.setState({
                        article: data,
                        loading:false
                    })
                })
        })
    }

    render() {
        let {navigator} =this.props;
        const article = this.state.article;
        if (this.state.loading) {
            return (
                <View style={styles.container}>
                    <LoadingView />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header title="帖子详情" needBack={true} navigator={navigator}></Header>
                    <View style={styles.outerBox}>
                        {this.renderArticleTitle()}
                        <ArticleContent htmlContent={article.content}/>
                        <View style={styles.replyBox}>
                            {article.replies && article.replies.map((item, i) => {
                                return (
                                    <ReplyItem reply={item} index={i} key={item.id}/>
                                )
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    renderArticleTitle() {
        const article = this.state.article;
        return (
            <View style={styles.titleBox}>
                <Text style={styles.title}>{article.title}</Text>
                <View style={styles.horizon}>
                    <View style={[styles.horizon,styles.mr4]}>
                        <Text style={styles.colorGrey}>发布于&nbsp;</Text>
                        <Text style={styles.colorGrey}>{article.create_at && article.create_at.slice(0, 10)}</Text>
                    </View>
                    <View style={[styles.horizon,styles.mr4]}>
                        <Text style={styles.colorGrey}>作者&nbsp;</Text>
                        <Text style={styles.colorGrey}>{article.author && article.author.loginname}</Text>
                    </View>
                    <View style={[styles.horizon,styles.mr4]}>
                        <Text style={styles.colorGrey}>{article.visit_count}&nbsp;</Text>
                        <Text style={styles.colorGrey}>次浏览</Text>
                    </View>
                </View>
            </View>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log('進來了', nextProps);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#eee',
        paddingLeft: 10,
        paddingRight: 10,
    },
    outerBox: {
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 4,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    titleBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    horizon: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    colorGrey: {
        color: '#333'
    },
    mr4: {
        marginRight: 4
    },
    replyBox: {}
});


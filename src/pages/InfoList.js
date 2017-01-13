import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    ListView
} from 'react-native';
import {getArticles} from '../fetchData';
import TabHeader from '../components/tabHeader';
import LoadingView from '../components/LoadingView';
import ArticleList from '../components/articleList';

export default class InfoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            isRefreshing: false,
            hasLoadData: false,
            pageNo: 1,
            pageSize: 10,
            titleInfo: [
                {
                    word: '分享',
                    key: 'share'
                },
                {
                    word: '问答',
                    key: 'ask'
                },
                {
                    word: '招聘',
                    key: 'job'
                }
            ],
            sKey: 'share',
            needUpdate: false
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                loading: true,
                needUpdate: true
            })
            getArticles(this.state.sKey, this.state.pageNo, this.state.pageSize)
                .then(data => {
                    if (data && data.length > 0) {
                        this.setState({
                            articles: data,
                            hasLoadData: true,
                            loading: false,
                        })
                    }
                })
        })
    }

    render() {
        let {navigator} =this.props;

        let header = (<TabHeader tabList={this.state.titleInfo} active={0}
                                 onTabChnange={(item,i)=>this.onTabChnange(item,i)}>
        </TabHeader>)

        return (
            <View style={styles.container}>
                {header}
                <ArticleList articles={this.state.articles} navigator={navigator} loading={this.state.loading}
                             needUpdate={this.state.needUpdate}/>
            </View>
        );
    }

    onTabChnange(item, i) {
        if (item.key == this.state.sKey) {
            this.setState({
                needUpdate: false
            });
            return;
        }
        this.setState({
            loading: true,
            sKey: item.key,
            needUpdate: true
            // articles:[]
        });
        getArticles(item.key, this.state.pageNo, this.state.pageSize)
            .then(data => {
                if (data && data.length > 0) {
                    this.setState({
                        articles: data,
                        hasLoadData: true,
                        loading: false,
                    })
                }
            })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#aaa',
    },
    list: {
        backgroundColor: '#eee',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
    }
});


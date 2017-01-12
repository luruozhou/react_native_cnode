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
import Header from '../components/header';
import ArticleItem from '../components/articleItem';

export default class InfoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            articles: [],
            loading: false,
            isRefreshing: false,
            hasLoadData: false,
            pageNo: 1,
            pageSize: 10
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({
                loading: true
            })
            getArticles(this.state.pageNo, this.state.pageSize)
                .then(data => {
                    if (data && data.length > 0) {
                        this.setState({
                            articles: data,
                            hasLoadData: true,
                            loading: false
                        })
                    }
                })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header title="问答"></Header>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.articles)}
                    style={styles.list}
                    renderRow={this.renderArticleItem.bind(this)}
                    enableEmptySections={true}
                />
            </View>
        );
    }

    renderArticleItem(article) {
        let {navigator} =this.props;
        return (
            <ArticleItem article={article} navigator={navigator}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aaa',
    },
    list: {
        backgroundColor: '#eee',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
    }
});


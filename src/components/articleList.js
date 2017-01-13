import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Platform,
    Dimensions,
    Image,
    TouchableHighlight,
} from 'react-native';
import ArticleItem from '../components/articleItem';
import LoadingView from '../components/LoadingView';

export default class ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            articles: []
        }
    }

    componentDidMount() {
        const {articles} = this.props;
        console.log(articles, 'didmount')
        this.setState({
            articles: articles
        })
    }

    render() {
        console.log('render', this.state.articles, this.props.loading)
        if (this.props.loading) {
            return (
                <View style={styles.container}>
                    <LoadingView />
                </View>
            )
        }
        return (
            <ListView
                dataSource={this.state.dataSource.cloneWithRows(this.state.articles)}
                style={styles.list}
                renderRow={this.renderArticleItem.bind(this)}
                enableEmptySections={true}
            />
        );
    }

    renderArticleItem(article) {
        let {navigator} =this.props;
        return (
            <ArticleItem article={article} navigator={navigator}/>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.needUpdate) {
            console.log('更新')
            return true;
        }
        console.log('不更新')
        return false
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            articles: nextProps.articles
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#eee',
    },
    list: {
        backgroundColor: '#eee',
        marginLeft: 4,
        marginRight: 4,
        marginTop: 4,
    }
});



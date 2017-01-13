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

export default class TabHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        }
    }

    componentDidMount() {
        let {active} = this.props;
        active && this.setState({
            activeIndex: active
        })
    }

    render() {
        let {tabList, onTabChnange, active} = this.props;
        return (
            <View style={styles.container}>
                {tabList.map((item, i) => {
                    return (
                        <TouchableHighlight underlayColor="transparent"
                                            onPress={()=>{
                                                this.setState({
                                                    activeIndex:i
                                                })
                                                return onTabChnange&&onTabChnange(item,i);
                                            }}
                                            key={i} style={styles.tabItem}>
                            <View style={styles.tabItem}>
                                <Text style={[styles.word,this.state.activeIndex==i&&styles.active]}>{item.word}</Text>
                            </View>
                        </TouchableHighlight>
                    )
                })}
            </View>
        );
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('進來了', nextProps);
    //     return false;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        // 比较props或者states，返回true则更新照常，返回false则取消更新，且不会调用下面的两个生命周期函数

        if (this.state.activeIndex != nextState.activeIndex) {
            return true;
        }
        return false

    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
        backgroundColor: '#333949',
        paddingTop: Platform.OS == 'ios' ? 26 : 17,
        paddingBottom: Platform.OS == 'ios' ? 10 : 17,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    word: {
        color: '#fff',
        fontSize: 14,
        // flex:1,
    },
    active: {
        color: '#fe5b56'
    }
});



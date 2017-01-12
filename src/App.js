import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    InteractionManager,
    ListView,
    Navigator
} from 'react-native';
import InfoList from './pages/InfoList';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Navigator
                initialRoute={{name: 'InfoList', component: InfoList,params:{test:1,test2:'aa'}}}
                renderScene={(route, navigator) =>{
                        let Component = route.component;
                        return <Component  {...route.params} navigator={navigator}/>
                    }}
            />
        );
    }
}



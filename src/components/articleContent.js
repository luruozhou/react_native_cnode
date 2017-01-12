import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Dimensions
} from 'react-native';
const {width} = Dimensions.get('window');

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let {htmlContent} = this.props;
        var css = `<head>
                        <meta name="applicable-device" content="mobile" />
                        <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
                        <meta name="apple-mobile-web-app-capable" content="yes" />
                        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                        <meta name="msapplication-tap-highlight" content="no" />
                        <meta content="telephone=no,email=no" name="format-detection" />
                        <style type="text/css">
                                      body {
                                        margin: 0;
                                        padding: 0;
                                        background: #fff;
                                        font-size: 16px;
                                        font-family:'微软雅黑';
                                      }
                                      .markdown-text{
                                        width:${width - 60};
                                        overflow: hidden;
                                      }
                                      pre{
                                      font-size: 14px;
                                      border-radius: 0;
                                      padding: 0 15px;
                                      border: none;
                                      margin: 20px -10px;
                                      border-width: 1px 0;
                                      background: #f7f7f7;
                                      -o-tab-size: 4;
                                      -moz-tab-size: 4;
                                      tab-size: 4;
                                      }
                                      code{
                                        white-space: pre-wrap;
                                        word-break: break-all;
                                      }
                                      img {
                                       width: 100%;
                                      }
                        </style>
                </head> `;
        htmlContent = css + htmlContent;
        return (
            <View style={styles.container}>
                <WebView
                    automaticallyAdjustContentInsets={true}
                    style={styles.htmlContent}
                    source={{html: htmlContent}}
                    scalesPageToFit={true}
                    decelerationRate="normal"
                />
            </View>
        );
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('進來了',nextProps);
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 300
    },
    htmlContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginLeft: 8,
        marginBottom: 28,
        marginTop: 8,
        borderWidth: 14
    }
});



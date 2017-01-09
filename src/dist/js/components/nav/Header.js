// *********************华丽丽使用说明书*************************************//
// right="广州"  头部右方文字，不定义默认图标
// isNone={true} 无右方
// isBack={true} 有返回按钮
// <Header title="个人中心" right="广州" isNone={true} isBack={false}></Header>
// *********************华丽丽使用说明书*************************************//

import React,{Component,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import { Router, Route, hashHistory, Link, browserHistory } from 'react-router';

export default class Header extends Component {
    static propTypes = {
        isBack: PropTypes.bool,
        isNone: PropTypes.bool
    };
    static defaultProps = {
        isBack: true,
        isNone:true
    };
    render() {
        const {isNone,isBack} = this.props;
        return (
          <header>
            <div className="fixed header-bg">
                  <div className="wrap float">
                      {
                        isBack ?
                        <div className="left-icon">
                            <span className="icon-hd-left icon-back"  onClick = {() =>{hashHistory.goBack()}}>
                            </span>
                        </div>:
                        null
                      }
                      <h1>{this.props.title}</h1>
                      {
                        isNone ?
                        null:
                        <div className="right-icon">
                            <span className={this.props.right?'icon-hd-right hd-text':'icon-hd-right icon-right'}>{this.props.right}</span>
                        </div>
                      }
                  </div>
              </div>
          </header>
        );
    }
}

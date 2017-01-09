import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import Nav from '../js/components/nav/';
import {key} from '../js/config/key';

const {Header,Footer} = Nav;


export default class RobotTalking extends Component{

  componentDidMount() {
      let Jdata = {
          "key":'409a7e341f0e97647bf221f6be4b924c',
          "info":'你好'
          // "loc":"北京中关村",
          // "lon":116.234632,
          // "lat":40.234632,
          // "userid":"1"
      };

      $.ajax({
          type: "get",
          url: "http://op.juhe.cn/robot/index",
          data: Jdata,
          dataType: 'jsonp',
          cache: false,
          async:true,
          success: function (data) {
              console.log(data);
              // if (data.error_code == 0) {
              //     this.setState({ListData: data.result, loaded: true});
              // } else {
              //     this.setState({loadFail: true})
              // }
          }.bind(this),
          error: function (xhr, status, err) {
              // console.error(this.props.url, status, err.toString());
              // this.setState({loadFail: true})
          }.bind(this)
      });
  };
  render(){
    return(
      <div>
        <Header title="你正在与轻轻对话中..."></Header>
      </div>
    )
  }
}

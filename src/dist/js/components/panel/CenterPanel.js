import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import PanelStyle from '../../../css/components/panel.css';
import $ from 'jquery';



export default class CenterPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberId: '加载中...',
      memberName: '加载中...'
    }
  }

   componentDidMount() {
    // let _this = this;
     $.ajax({
        url: "./CenterPanel.json",
        dataType: 'json',
        cache: false,
        success: function(data){
          console.log(data);
          setTimeout(()=> {
            this.setState({
            memberId: data.memberId,
            memberName: data.memberName
            })
          }, 10)
        }.bind(this),
        error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
   }
    render() {
        return (
          <div className="m-panel flex-container theme-bg">
            <div className="flex-item item1 txt-center">
              <div className="personal-info">  <Link to="/centerinfo"><span className="panel-img"></span></Link></div>
              <div>{`欢迎您：${this.state.memberName}`}</div>
              <div>{`普卡会员：${this.state.memberId}`}</div>
            </div>
          </div>
        );
    }
};

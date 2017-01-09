import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import Nav from '../js/components/nav/';
import ListPanel from '../js/components/panel/ListPanel';
import Tools from '../js/components/tools/';
import {key} from '../js/config/key';

const {Header, Footer} = Nav;
const {NoData, Loading} = Tools;

export default class HistoryForToday extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loadFail: false
        }
    }
    _date = (AddDayCount) => {
        let dd = new Date();
        dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
        // var y = dd.getFullYear();
        let m = dd.getMonth() + 1; //获取当前月份的日期
        let d = dd.getDate();
        return m + "/" + d;
    }
    componentDidMount() {
        let Jdata = {
            "key": key.historyfortoday,
            "date": this._date(0)
        };
        $.ajax({
            type: "get",
            url: "http://v.juhe.cn/todayOnhistory/queryEvent.php",
            data: Jdata,
            dataType: 'jsonp',
            cache: false,
            success: function (data) {
                console.log(data);
                if (data.error_code == 0) {
                    this.setState({ListData: data.result, loaded: true});
                } else {
                    this.setState({loadFail: true})
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                this.setState({loadFail: true})
            }.bind(this)
        });
    };

    render() {

        //console.log("asd")
        if (this.state.loadFail) {
            return (
                <div>
                  <Header title="历史上的今天"></Header>
                  <NoData title="加载失败请检查网络"></NoData>
                </div>
            )
        }
        if (!this.state.loaded) {
            return (
                <div>
                  <Header title="历史上的今天"></Header>
                  <Loading></Loading>
                </div>
            );
        }
        return (
            <div>
              <Header title="历史上的今天"></Header>
              <ListPanel ListData={this.state.ListData} ListLink="/histoydetail"></ListPanel>
              {/* <div className="loading-more" onClick= {() => { this._changePageNum() }}>{this.state.more}</div> */}
            </div>
        );
    }
};

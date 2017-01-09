import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import Nav from '../js/components/nav/';
import ListPanel from '../js/components/panel/ListPanel';
import Tools from '../js/components/tools/';
import {key} from '../js/config/key';

const {Header, Footer} = Nav;


export default class Horoscope extends Component {

    componentDidMount() {
        // let Jdata = {
        //     "key": key.horoscope,
        //     "consName":"双鱼座"
        //
        // };
        $.ajax({
            type:"get",
            url:"http://web.juhe.cn:8080/constellation/getAll?consName=双鱼座&key="+key.horoscope,
            // data:Jdata,
            dataType: 'jsonp',
            jsonp:'callback',
            // isonpCallback:'name',
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


        return (
            <div>
              <Header title="笑话大全"></Header>

            </div>
        );
    }
};

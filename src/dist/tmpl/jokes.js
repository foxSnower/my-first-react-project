import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import Nav from '../js/components/nav/';
import ListPanel from '../js/components/panel/ListPanel';
import Tools from '../js/components/tools/';
import {key} from '../js/config/key';

const {Header, Footer} = Nav;


export default class Jokes extends Component {

    componentDidMount() {
        let Jdata = {
            "key": key.horoscope

        };
        $.ajax({
            type:"get",
            url:"http://web.juhe.cn:8080/constellation/getAll?consName=%E5%8F%8C%E9%B1%BC%E5%BA%A7&type=today&key=45506c49b8abc8cdde14b3fe8216218d",
            data:Jdata,
            dataType: 'json',
            // jsonp:'callback',
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

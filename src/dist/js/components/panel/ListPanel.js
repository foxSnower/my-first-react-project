/***************************华丽丽的分格线***********************************/
/***/
/***展板列表的制作***/
// arrItems循环列表
// ListData接住上个层传来的数组
/***/
/***************************华丽丽的分格线***********************************/

import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';

export default class ListPanel extends Component {
    static propTypes = {
        ListData: PropTypes.array
    };
    static defaultProps = {};
    constructor(props) {
        super(props);
        this.state = {
            pagenum: 1,
            more: '加载更多'
        }
    }
    componentWillMount() {
        console.log(2);
        const {ListData} = this.props;
        let newdata = this._arrayPage(this.state.pagenum, 5, ListData.length, ListData);
        this.setState({newdata: newdata})
        console.log(newdata);
    }
    _renderItem = () => {
        /**作用域坑，在一个函数作用域里，需要声明变量才能拿到想要的变量，否则undefined***/
        const {newdata} = this.state;
        const {ListLink} = this.props;
        console.log(1);
        let arrItems = newdata.map((item, index) => {
            return (
                <Link to={ListLink + "/" + item.e_id} className="panel-list theme-bg" key={item.e_id}>
                    <div>{item.title}</div>
                    <div className="small-txt tiny-color">{item.date}</div>
                    <div className="small-txt tiny-color txt-right">read more...</div>
                </Link>
            )
        });
        return arrItems
    };
    _arrayPage = (pagenum, pageCount, allnum, obj) => {
        let arrayCont = [];
        if (pagenum * pageCount < allnum) {
            for (var i = 0; i < pagenum * pageCount; i++) {
                console.log(obj.length);
                arrayCont.push(obj[i]);
            }
        } else {
            for (var i = 0; i < allnum; i++) {
                console.log(obj.length);
                arrayCont.push(obj[i]);
                this.setState({more: '没有更多了'})
            }
        }
        return arrayCont
    }
    _changePageNum = () => {
        const {pagenum} = this.state;
        const {ListData} = this.props;
        let nextPage = pagenum + 1
        let newdata = this._arrayPage(nextPage, 5, ListData.length, ListData);
        this.setState({newdata: newdata, pagenum: nextPage})
    }
    render() {
        console.log(3);
        const {iconClass, borderShow} = this.props;
        return (
            <div>
                {this._renderItem()}
                <div className="loading-more" onClick= {() => { this._changePageNum() }}>{this.state.more}</div>
            </div>
        );
    }
};

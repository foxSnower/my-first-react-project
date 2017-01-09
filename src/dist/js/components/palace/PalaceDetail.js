/***************************华丽丽的分格线***********************************/
/***/
/***borderShow={true}决定九格宫是有边框的***/
/***/
/***************************华丽丽的分格线***********************************/

import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';

export default class PalaceDetail extends Component {
    static propTypes = {
        iconClass: PropTypes.string,
        borderShow: PropTypes.bool
    };

    static defaultProps = {
        iconClass: '',
        borderShow: false
    };
    render() {
        const {iconClass, menu, palaceLink, borderShow} = this.props;
        const palaceBorder = borderShow
            ? 'border-show'
            : '';
        return (
            <Link to={"/" + palaceLink} className={palaceBorder + " palace-menu flex-item p-tb20"}>
              <span className={"icon-palace " + iconClass}></span>
              <span className="palace-text">
                {menu}</span>
            </Link>

        );
    }
};

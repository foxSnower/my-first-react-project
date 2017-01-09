/***************************华丽丽的分格线***********************************/
/***/
/***九格宫的制作***/
/***borderShow={true}决定九格宫是有边框的****/
/***FixedValue里装着所有的菜单名称和图标****/
/***/
/***************************华丽丽的分格线***********************************/

import React, { Component ,PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';
import PalaceDetail from './PalaceDetail';
import {PalaceData,PalaceData2} from '../../config/FixedValue'

export default class Palace extends Component {
    static propTypes = {
        iconClass: PropTypes.string,
        borderShow: PropTypes.bool
    };
    static defaultProps = {
        iconClass: '',
        borderShow:false
    };
    constructor(props) {
        super(props)
    }
    _renderItem = () => {
      /**作用域坑，在一个函数作用域里，需要声明变量才能拿到想要的变量，否则undefined***/
      const {borderShow, isTabRight}=this.props;
        let dataSelect = isTabRight ? PalaceData2 : PalaceData;
        let arrItems = dataSelect.map((item,index)=> {
            return (
              <PalaceDetail key={index}  menu={item.menu} iconClass={item.icon} palaceLink={item.link} borderShow={borderShow}/>
            )
        });
        return arrItems
    };
    render() {
    	const {iconClass,borderShow}=this.props;
        return (
          <div className="palace flex-container">
            {this._renderItem()}
          </div>
        );
    }
};

/***************************华丽丽的分格线***********************************/
/***/
/***九格宫的制作***/
/***borderShow={true}决定九格宫是有边框的****/
/***FixedValue里装着所有的菜单名称和图标****/
/***/
/***************************华丽丽的分格线***********************************/


import React, { Component , PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';

import CenterPanel from '../panel/CenterPanel';
import Palace from '../palace/Palace';
import DefaultMenus from '../defalutmenus/DefaultMenus';



export default class CenterTab extends Component {
    constructor(props){
      super(props)
      this.state = {
        index: props.show
      }
    }

    _changeTab(index) {
      this.setState({
        index: index
      })
    }

    render() {
      const { ary} = this.props;

      let tab = ary.map((item, index) => {
        return (
          <div
            key = {index}
            className={"flex-item item1 "+ (this.state.index === index ? 'on' : '')}
            onClick = {() => {
              this._changeTab(index)
            }}
          >
            {item}
          </div>
        )
      })
        return (
            <div>
              <div className="tab-button flex-container theme-bg">
                {tab}
              </div>

              {
                this.state.index === 0 ?
                  <div><Palace></Palace></div> :
                <div><Palace isTabRight = {true}></Palace></div>
              }

            </div>
        );
    }
};

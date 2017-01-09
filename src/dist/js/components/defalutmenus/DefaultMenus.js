/******
  <DefaultMenus isSingleMenu={true} rightText={""} isTabRight={true}></DefaultMenus>
**********/


import React, { Component ,PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';
import DefaultMenusDetail from './DefaultMenusDetail';
import { DefaultMenusData ,DefaultMenusData2 } from '../../config/FixedValue'


export default class DefaultMenus extends Component {
  static propTypes = {
      iconClass: PropTypes.string,  //图标的class名
      isSingleMenu:PropTypes.bool,  //是否是单行菜单
      rightText:PropTypes.string    //右侧是否有字，如果有的内容
  };

  static defaultProps = {
      iconClass: '',
      isSingleMenu:true,
      rightText:''
  };
  constructor(props) {
      super(props)
  }
  _renderItem = () => {
      const { isSingleMenu , rightText ,isTabRight}=this.props;
      const defaultMenuSelect=isTabRight?DefaultMenusData2:DefaultMenusData;
      let arrItems = defaultMenuSelect.map((item,index)=> {
          return (
            <DefaultMenusDetail key={index}  menu={item.menu} iconClass={item.icon} isSingleMenu={isSingleMenu} rightText={rightText} />
          )
      });
      return arrItems;
  };
  render() {
      const { isSingleMenu , rightText } = this.props;
      return (
          <div className="defalut-menu">
              {this._renderItem()}
          </div>
      );
  }
};

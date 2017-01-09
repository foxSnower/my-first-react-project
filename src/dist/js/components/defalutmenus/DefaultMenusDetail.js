import React, { Component ,PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';

export default class DefaultMenusDetail extends Component {
  static propTypes = {
      iconClass: PropTypes.string,//图标的class名
      isSingleMenu:PropTypes.bool,//是否是单行菜单
      rightText:PropTypes.string//右侧是否有字，如果有的内容
  };
  static defaultProps = {
      iconClass: '',
      isSingleMenu:true,
      rightText:''
  };
  constructor(props) {
      super(props)
  };
  render() {
  	const {iconClass,menu,isSingleMenu,tinyText, rightText}=this.props;
      return (
          <div className="defalut-menu-box flex-container menu-border-bottom">
            <div className="item2">
              <i className={iconClass+" icon-menu"}></i>
              <p>

                <sapn className="menu-text">{menu}</sapn>
              </p>
              { isSingleMenu ?
                    null:
                    <p className="menu-text tiny-color">空间是几号</p>
                  }
              </div>
              <div className="item1 txt-right">
                  <span className="menu-right-txt">{rightText}</span>
                  <i className="icon-menu icon-go-link r5"></i>
              </div>
          </div>
      );
  }
};

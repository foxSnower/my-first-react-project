/***************************华丽丽的分格线***********************************/
/***/
/***无数据展示***/
//title="需要显示的文本"
/***/
/***************************华丽丽的分格线***********************************/


import React, {Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';

export default class NoData extends Component{
  static propTypes = {
      title: PropTypes.string
  };
  static defaultProps = {
      title: '暂无数据'
  };
  constructor(props) {
      super(props);
  }
  render(){
    return(
      <div className="nodata-bg">
        <div className="nodata">
          <div className="nodata-img"></div>
          <div className="nodata-txt">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

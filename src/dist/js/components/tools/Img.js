/***************************华丽丽的分格线***********************************/
/***/
/***图片的展示***/
// defaultUrl加载失败后默认的图片地址
// _imgError()加载失败后切换至默认的图片地址的方法
/***/
/***************************华丽丽的分格线***********************************/
import React, { Component ,PropTypes} from 'react';
import ReactDOM, { render } from 'react-dom';

export default class Img extends Component{
  static PropTypes = {
    className:PropTypes.string,
    src:PropTypes.string,
    defaultUrl:PropTypes.string
  }
  static defaultProps ={
    defaultUrl:'https://img.alicdn.com/imgextra/i2/743411822/TB2LV3icgxlpuFjSszbXXcSVpXa_!!743411822.png'
  }
  _imgError=(src) =>{
    const {defaultUrl}=this.props;
   let img=new Image();
   img.src=src;
    if(img.width==0){
        return defaultUrl
    }else{
       return src
    }
   }
  render(){
    const {className,src}=this.props;
    return(
      <img className={className} src={this._imgError(src)} />
    )
  }
}

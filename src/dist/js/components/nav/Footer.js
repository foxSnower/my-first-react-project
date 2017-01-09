// *********************华丽丽使用说明书*************************************//
// isText={true} 图标有文字描述，
//
// *********************华丽丽使用说明书*************************************//

import React,{Component,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import FooterDetail from './FooterDetail';
import {FooterData} from '../../config/FixedValue';

export default class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      current : false,
    }
  }
  static propTypes = {
      isText: PropTypes.bool,
      iconClass: PropTypes.string,
      footerText: PropTypes.string,
  };

  static defaultProps = {
      isText: true,
      iconClass:'',
      footerText:'',
  };


  handleClick = (event) =>{
    console.log(this.props.index);
    this.setState({current: true});
  };
  _renderItem = () =>{
    const { isText } =this.props;
    let arrItems= FooterData.map((item,index)=>{
       return (
         <FooterDetail key={index}  footerText={item.menu} iconClass={item.icon} isText={isText} />
       )
    });
    return arrItems;
  };
  render() {
    const {isText}=this.props;
      return (
          <footer>
              <div className="fixed theme-bg">
                  <div className="wrap flex">
                     {this._renderItem()}
                  </div>
              </div>
          </footer>
      );
  }
}

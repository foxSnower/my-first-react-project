// *********************华丽丽使用说明书*************************************//
// isText={true} 图标有文字描述，={false}时记得删除文字
//
// *********************华丽丽使用说明书*************************************//

import React,{Component,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';


export default class FooterDetail extends Component {
  constructor(props){
    super(props)
  };
  static propTypes = {
      isText: PropTypes.bool,
      iconClass: PropTypes.string,
      footerText: PropTypes.string,
  };
  static defaultProps = {
      isText: true,
      iconClass:'',
      footerText: '',
  };


  render() {
    const {isText,iconClass,footerText,onPress,className}=this.props;
    const cls = isText ? 'icon' : 'icon-double';

      return (
            <a href="javascript:void(0);" onClick={onPress} className={className}><span className={cls+" "+iconClass}></span><span className="ft-text">{isText ? footerText :''}</span></a>
      );
  }
}

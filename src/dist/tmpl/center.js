import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';

import Nav from '../js/components/nav/'
import Panel from '../js/components/panel/';
import CenterTab from '../js/components/tab/centertab';

const {Header,Footer} = Nav;
const {CenterPanel} = Panel;

export default class Center extends Component {
    render() {
        return (
            <div>
              <Header title="个人中心"></Header>
              <CenterPanel></CenterPanel>
              <CenterTab ary = {["互动人生", "古今奇事"]} show={0}></CenterTab>
              {/* <Footer></Footer> */}
            </div>
        );
    }
};

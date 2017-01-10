import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import Nav from '../js/components/nav/';
import ListPanel from '../js/components/panel/ListPanel';
import Tools from '../js/components/tools/';
import {key} from '../js/config/key';

const {Header, Footer} = Nav;


export default class Horoscope extends Component {

    constructor(props) {
      super(props)

      this.state = {
        value: "one"
      }
    }

    componentDidMount() {
      this._fetchStyle();
        let Jdata = {
            "key": key.horoscope,
            "consName":"双鱼座"

        };
        $.ajax({
            type:"get",
            url:"/api/constellation/getAll",
            data:Jdata,
            // dataType: 'jsonp',
            // jsonp:'callback',
            // isonpCallback:'name',
            cache: false,
            success: function (data) {
                console.log(data);
                if (data.error_code == 0) {
                    this.setState({ListData: data.result, loaded: true});
                } else {
                    this.setState({loadFail: true})
                }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                this.setState({loadFail: true})
            }.bind(this)
        });
    };

    _change(value) {
      this.setState({
        value
      })
    }

    _fetchStyle = () => {
      var rule;
      var ss = Array.prototype.slice.call(document.styleSheets);
      var a = ReactDOM.findDOMNode(this)
      var b = a.styleSheets
      console.log('a', b)
      console.log(document.styleSheets)
      for(var key in document.styleSheets){

      }
      for (var i = 0; i < ss.length; ++i) {
          // loop through all the rules!
          console.log(ss[i].cssRules.length)
          //
          for (var x = 0; x < ss[i].cssRules.length; ++x) {
              rule = ss[i].cssRules[x];
                console.log(rule)
              if (rule.name == "html5" && rule.type == CSSRule.KEYFRAMES_RULE) {

              }
          }
      }

    }

    render() {


        return (
            <div>
              <Header title="星座运势"></Header>
              <div className="m-article">

                <div id="gal">
                  <nav className="galnav">
                    <ul>
                      <li>
                        <input
                          type="radio"
                          name="btn"
                          value="one"
                          checked={this.state.value === "one"}
                          onChange = {this._change.bind(this, "one")}
                        />
                        <label htmlFor="btn"></label>
                        <span className="input-nav input-nav1">今天</span>
                        <figure>
                          <img src="/dist/img/01_Fabio_Basile.jpg" />
                          <figcaption className="horoscope-left">
                            <div className="horoscope-left-text">双鱼座</div>
                            <div>2014年06月27日</div>
                          </figcaption>
                          <figcaption>
                            <div className="horoscope-right">

                              <div className="flex-container">
                                <div className="flex-item">综合指数：</div>
                                <div className="flex-item item1">
                                  <span className="expand html5"></span>
                                  <span className="expand-text">85%</span>

                                </div>
                              </div>
                              <div className="flex-container">
                                <div className="flex-item">健康指数：</div>
                                <div className="flex-item item1">
                                  <span className="expand html5"></span>
                                </div>
                              </div>
                              <div className="flex-container">
                                <div className="flex-item">工作指数：</div>
                                <div className="flex-item item1">
                                  <span className="expand html5"></span>
                                </div>
                              </div>
                              <div className="flex-container">
                                <div className="flex-item">爱情指数：</div>
                                <div className="flex-item item1">
                                  <span className="expand html5"></span>
                                </div>
                              </div>
                              <div>幸运数字</div>
                              <div>幸运色</div>
                              <div>速配星座</div>
                              <div>
                                今日概述:有些思考的小漩涡，可能让你忽然的放空，生活中许多的细节让你感触良多，五味杂陈，
                                常常有时候就慢动作定格，想法在某处冻结停留，陷入一阵自我对话的沉思之中，这个时候你不喜欢被打扰
                                或询问，也不想让某些想法曝光，个性变得有些隐晦。
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </li>
                      <li><input type="radio" name="btn" value="two" checked={this.state.value === "two"}
                        onChange = {this._change.bind(this, "two")}/>
                        <label htmlFor="btn"></label>
                        <span className="input-nav input-nav2">明天</span>
                        <figure className="entypo-forward">
                          <img src="/dist/img/08_Brian_Miller.jpg"/>
                          <div className="horoscope-left">
                            <div>综合指数</div>
                            <div>健康指数</div>
                            <div>工作指数</div>
                            <div>财运指数</div>
                            <div>爱情指数</div>
                          </div>
                          <figcaption>
                            <h4>Brian Miller</h4>
                            <nav role="navigation">
                              <p>TypeTi.me</p>
                              <ul>
                                <li><a href="#" className="entypo-dribbble"></a>
                                </li>
                                <li><a href="#" className="entypo-twitter"></a>
                                </li>
                              </ul>
                            </nav>
                          </figcaption>
                        </figure>
                      </li>
                      <li><input type="radio" name="btn" value="three"  checked={this.state.value === "three"}
                        onChange = {this._change.bind(this, "three")}/>
                        <label htmlFor="btn"></label>
                        <span className="input-nav input-nav3">本周</span>
                        <figure className="entypo-forward">
                          <img src="/dist/img/05_Nicolas_Quod.jpg"/>
                          <figcaption>
                            <h4>Nicolas Quod</h4>
                            <nav role="navigation">
                              <p>Iphone 6 - Notification - iOS 7</p>
                              <ul>
                                <li>
                                  <a href="#" className="entypo-dribbble">
                                  </a></li>
                                <li>
                                  <a href="#" className="entypo-twitter">
                                  </a></li>
                              </ul>
                            </nav>
                          </figcaption>
                        </figure>
                      </li>
                      <li><input type="radio" name="btn" value="four"  checked={this.state.value === "four"}
                        onChange = {this._change.bind(this, "four")}/>
                        <label htmlFor="btn"></label>
                        <span className="input-nav input-nav4">本月</span>
                        <figure className="entypo-forward">
                          <img src="/dist/img/04_Joffrey.jpg"/>
                          <figcaption>
                            <h4>Joffrey</h4>
                            <nav role="navigation">
                              <p>鈻?/p&gt; </p>
                              <ul>
                                <li><a href="#" className="entypo-dribbble">
                                </a></li>
                                <li><a href="#" className="entypo-twitter">
                                </a></li>
                              </ul>
                            </nav>
                          </figcaption>
                        </figure>
                      </li>
                      <li><input type="radio" name="btn" value="five"
                        checked={this.state.value === "five"}
                        onChange = {this._change.bind(this, "five")}/>
                        <label htmlFor="btn"></label>
                        <span className="input-nav input-nav5">今年</span>
                        <figure className="entypo-forward">
                          <img src="/dist/img/09_Jared_Long.jpg"/>
                          <figcaption>
                            <h4>Jared Long</h4>
                            <nav role="navigation">
                              <p>Don't drop your iPhone Infinity</p>
                              <ul>
                                <li>
                                  <a href="#" className="entypo-dribbble">
                                  </a></li>
                                <li>
                                  <a href="#" className="entypo-behance">
                                  </a></li>
                              </ul>
                            </nav>
                          </figcaption>
                        </figure>
                      </li>

                    </ul>
                  </nav>
                </div>
              </div>
            </div>
      );
    }
};

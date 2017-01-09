import React, {Component,PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router';
import $ from 'jquery';

import Nav from '../js/components/nav/';
import ListPanel from '../js/components/panel/ListPanel';
import Tools from '../js/components/tools/';
import {key} from '../js/config/key';
// import {_imgError} from '../js/components/tools/ImgError';
import Img from '../js/components/tools/Img'

const {Header} = Nav;
const {NoData, Loading} = Tools;

export default class HistoyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loaded: false,
          title:'',
          content:'',
          picUrl:''
        }
    }

    componentDidMount() {
        //console.log(this.props);
        let Jdata = {
            "key": key.historyfortoday,
            "e_id": this.props.params.e_id
        };
        console.log(Jdata)
        $.ajax({
            type: "get",
            url: "http://v.juhe.cn/todayOnhistory/queryDetail.php",
            data: Jdata,
            dataType: 'jsonp',
            cache: false,
            success: function (data) {
              console.log(data)
              // console.log(data.result[0]);
              if(data.error_code==0){
                this.setState({
                  title:data.result[0].title,
                  content: data.result[0].content,
                  picUrl:data.result[0].picUrl,
                  loaded: true
                })
              }else{
                this.setState({nodata: true});
              }
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                this.setState({loadFail: true})
            }.bind(this)
        });
    }

    _contentArray = () => {
      /**作用域坑，在一个函数作用域里，需要声明变量才能拿到想要的变量，否则undefined***/
        // let _content=this.state.content;
        const {content,picUrl}=this.state;
        let contentArray=content.trim().split('    ');
        let contLenght=contentArray.length;
        let imgLenght=this.state.picUrl.length;
        let Arr=contLenght>imgLenght?contentArray:this.state.picUrl;
          //console.log(contentArray.length, picUrl.length)
          //console.log(Arr);
          if(contentArray!=null&&contentArray!=""){//有数据的情况
            let arrItems = contentArray.map((item,index)=> {
            //console.log(picUrl[index], index)
                return (
                  <div key = {index}>
                    <div className="article-p">{item}</div>

                    {!!picUrl[index] && <div className="txt-center">
                      {/* <img className="article-img" src={_imgError(picUrl[index].url)} /> */}
                      <Img className="article-img" src={picUrl[index].url}/>
                      <p className="tiny-txt">{picUrl[index].pic_title}</p>
                    </div>}
                  </div>
                );
              });
                return arrItems
          }
    };

    render() {
      if (this.state.nodata) {
          return (
              <div>
                <Header title="历史详情"></Header>
                <NoData title="暂无详情"></NoData>
              </div>
          )
      }
      if (this.state.loadFail) {
          return (
              <div>
                <Header title="历史详情"></Header>
                <NoData title="加载失败请检查网络"></NoData>
              </div>
          )
      }
        if(!this.state.loaded) {
          return (
            <div>
              <Header title="历史详情"></Header>
              <Loading></Loading>
            </div>
          );
        }
        return (
            <div>
              <Header title="历史详情"></Header>
              <div className="m-article">
                <div className="article-title">{this.state.title}</div>
                <div className="article-content">
                  {this._contentArray()}
                </div>
              </div>
            </div>
        );
    }
};


// _imgError()加载失败后切换至默认的图片地址的方法

export const  _imgError=(src) =>{
  let img=new Image();
  img.src=src;
   console.log(img);
   if(img.width==0){
       return 'https://img.alicdn.com/imgextra/i2/743411822/TB2LV3icgxlpuFjSszbXXcSVpXa_!!743411822.png'
   }else{
      return src
   }
  }

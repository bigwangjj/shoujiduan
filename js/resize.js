/**
 * Created by admin on 17-1-7.
 */
new function (){
    var _self = this;
    _self.width = 640;//设置默认最大宽度
    _self.fontSize = 100;//默认字体大小
    _self.widthProportion = function(){
        var p = (document.body&&document.body.clientWidth)/_self.width;
        return p>=4?4:p<0.5?0.5:p;};
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    };
    _self.changePage();
    window.addEventListener("resize",function(){
        _self.changePage();
    },false);
    window.addEventListener("load",function(){
        _self.changePage();
    })
};
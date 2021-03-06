﻿/*
* jQuery JCShare plugin 0.1
*
* Copyright (c) 2010 James.Ying
*
*/
;(function ($) {

$.fn.extend({
    share: function(options){
        options = $.extend({}, $.Share.defaults,options);

        return new $.Share(this, options);
    }
});

$.Share = function(input,options){
    var title = options.title ? options.title : document.title;
    var content = options.content ? options.content : document.title;
    var url = options.url ? options.url : document.URL;
    var summary = options.summary ? options.summary : '';
    $.each(options.sharePlace, function(name, tag){
        input.find(tag).each(function(){
            var href = eval("options.replace." + name + "(this, title, content, url, summary);");
            $(this).attr("target", options.target);
            $(this).attr("href", href);
        });
    });
};

$.Share.defaults = {
    share: ".shares",
    sharePlace: {
        kaixin: ".share_kaixin",
        sina: ".share_sina",
        renren: ".share_renren",
        email: ".share_email",
        douban: ".share_douban",
        qq: ".share_qq",
        google: ".share_google",
        twitter: ".share_twitter"
    },
    title: "",
    content: "",
    url: "",
    target: "_blank",
    replace : {
        kaixin : function(div, title, content, url){
            return "http://www.kaixin001.com/repaste/share.php?rtitle=" + encodeURIComponent(title) + "&rurl=" + encodeURIComponent(url) + "&rcontent=" + encodeURIComponent(content);
        },
        sina : function(div, title, content, url){
            return "http://v.t.sina.com.cn/share/share.php?searchPic=false&url="+encodeURIComponent(url)+"&title="+ encodeURIComponent(title);
        }, 
        douban : function(div, title, content, url){
            return "http://www.douban.com/recommend/?url=" + encodeURIComponent(url) + "&title=" + encodeURIComponent(title);
        },
        renren : function(div, title, content, url){
            return "http://share.xiaonei.com/share/buttonshare.do?link=" + encodeURIComponent(url) +"&title=" + encodeURIComponent(title);
        },
        qq : function(div, title, content, url, summary){
            return "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(url)+"&title="+encodeURIComponent(title)+"&summary="+encodeURIComponent(summary);
        }
    }
};
})(jQuery);


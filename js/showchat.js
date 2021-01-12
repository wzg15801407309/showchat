(function(){
    function showChat(options){
        var _options = options || {};
        var _isTopMsg=false;
        var init = function(opt){
            if(JSON.stringify(opt) == "{}") return;
            msgBoxStyle(opt);
        };
        /**
         * 信息显示方式 
         * @param {*} opt.msgStyle
         * 默认就是 0:和信息一起显示
         * 不是0的时候 styleData必传
         */
        var msgBoxStyle = function(opt){
            var styleID = opt.msgStyle || 0;
            if(styleID === 0 ){
              return _isTopMsg = false;
            }
            var data=opt.styleData;
            var html = '<div class="system-message">'
            +'正在和'+ data.client + '聊天'
            +'</div>'
            +'<div class="system-message">'+data.timestr+'</div>';
            $('.chat-window').append(html);
        }
        init(_options);
    };
    window.showChat=showChat;
})();
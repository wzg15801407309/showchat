(function(){
    function showChat(options){
        var _options = options || {};
        var _isTopMsg=false;
        var init = function(opt){
            if(JSON.stringify(opt) == "{}") return;
            msgBoxStyle(opt);
            msgShow(opt);
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
              return _isTopMsg = true;
            }
            var data=opt.styleData;
            var html = '<div class="system-message">'
            +'正在和'+ data.clientNaem + '聊天'
            +'</div>'
            +'<div class="system-message">'+data.timestr+'</div>';
            $('.chat-window').append(html);
        };
        /**
         * 显示信息
         * @param {*} opt.msgData
         * 类型：数组
         * 
         */
        var msgShow = function(opt){
            var data = opt.msgData || [];
            if(data.length == 0)return;
            $('.chat-window').append(msgSet(data));
        };
        /**
         * 信息处理
         * @param {*} data 
         */
        var msgSet = function(data){
            var html='';
            data.forEach(data => {
                html += `<div class="left-box">
                <div class="left-time ${_isTopMsg?'hiden' : ''}" >${data.Ctime}</div>
                 <div class="left-wrapper">
                     <div class="left-avatar">
                         <img src="./image/group.png" alt="..." />
                     </div>
                     <div class="left-message" id=${data.id}>${data.msgClient}</div>
                 </div>
             </div>
             <div class="right-box">
                <div class="right-time ${_isTopMsg?'hiden' : ''}" >${data.CStime}</div>
                 <div class="right-wrapper">
                     <div class="right-message"  id=${data.id}>${data.msgCustomer}</div>
                     <div class="right-avatar">
                          <img src="./image/group.png" alt="..." />
                     </div>
                 </div>
             </div>`
            });
            return html;
        }
        init(_options);
    };
    window.showChat=showChat;
})();
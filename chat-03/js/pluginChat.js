/**
 *  domID: 信息框父元素的ID,为‘’就是body
 *  title：信息框的标题
 *  width: 信息框的宽度，默认100%
 *  height: 信息框的高度，默认100%
 */
;(function(){
    function PluginChat(options){
        return new init(options);
    };
    PluginChat.prototype = {
        constructor: PluginChat,
        pcContentId:'dpn-content',
        pcInit: function (){
            console.log('PluginChat-init');
            // 创建基本dom
            this.createBaseDom();
            
        },
        showMsg: function(data){
            console.log("show",data);
        },
        createBaseDom: function(){
            var _options = this.options;
            //获取父元素
            var frag = !_options.domID ? document.body : document.getElementById(_options.domID);
            var dpnMsgBox=document.createElement('div');
            dpnMsgBox.style.width=_options.width;
            dpnMsgBox.style.height=_options.height;
            dpnMsgBox.className='dpn_chatbox';
            dpnMsgBox.innerHTML=`
                    <div class="dpn-head">
                        <div class="dpn-title">
                            ${_options.title}
                        </div>
                    </div>
                    <div id=${this.pcContentId} class="dpn-content">
                        ${_options.msgData.map(addr => `
                            <div class="left-wrapper">
                                <div class="left-time">${addr.Ctime}</div>
                                <div class="left-msgbox">
                                <div class="left-avatar">
                                    <img src="./image/client.png" alt="">
                                </div>
                                <div class="left-message" id=${addr.id}>${addr.msgClient}</div>
                                </div>
                            </div>
                            <div class="right-wrapper">
                                <div class="right-time">${addr.CStime}</div>
                                <div class="right-msgbox">
                                <div class="right-message" id=${addr.id}>${addr.msgCustomer}</div>
                                <div class="right-avatar">
                                    <img src="./image/customer.png" alt="">
                                </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;
            console.log("flag",frag);
            frag.appendChild(dpnMsgBox);
        }

    }
    function init(options){
        // 参数初始化：传入的参数 替换 默认的参数
        options=Object.assign({
            domID: '',
            title: '',
            width: '100%',
            height:'100%',
            msgData:[]
        },options);
        // 把参数信息挂载在原型上，使实例通过this就可以调用
        this.options=options;
        this.pond={
            showMsg:[],
        }
        this.pcInit();
    }
    init.prototype = PluginChat.prototype;
    window.PluginChat=PluginChat;
})();
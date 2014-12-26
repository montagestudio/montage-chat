/**
 * @module ui/chat-message-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatMessageList
 * @extends Component
 */
exports.ChatMessageList = Component.specialize(/** @lends ChatMessageList# */ {
    constructor: {
        value: function ChatMessageList() {
            this.super();

        }
    },

    _data:{value:false},

    data:{
        set:function(v){
            this._data = v;
        },
        get:function(){
            return this._data;
        }
    }
});

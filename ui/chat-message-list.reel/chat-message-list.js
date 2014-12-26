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
    },

    _scrollPosition:{
        value:1000000
    },

    scrollPosition:{
        set:function(value){
            this._scrollPosition = value;
            this.needsDraw = true;
        },
        get:function(){
            return this._scrollPosition;
        }
    },

    templateDidLoad:{
        value:function(){
            this.addRangeAtPathChangeListener( "this.data", this, "handleDataChange" );
            this.scrollPosition = 1000000;
        }
    },

    draw:{
        value:function(){
            this.templateObjects.list.element.scrollTop = this.scrollPosition;
        }
    },

    handleDataChange:{
        value:function(){
            this.scrollPosition += 100;
        }
    }
});

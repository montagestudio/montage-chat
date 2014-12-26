/**
 * @module ui/chat-post-message.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatPostMessage
 * @extends Component
 */
exports.ChatPostMessage = Component.specialize(/** @lends ChatPostMessage# */ {
    constructor: {
        value: function ChatPostMessage() {
            this.super();
        }
    },
    handleAction: {
        value: function() {
            var ms = this.templateObjects.message.value;
            this._sendMessage(ms);
            //console.log("Fallback action handler invoked as there is no specific handler for this button");
        }
    },

    _sendMessage:{
        value:function(msg){
            if(!msg || msg.length<=0) return;
            this.parentComponent.chatService.sendMessage(msg);
            this.templateObjects.message.element.value = '';
            this.templateObjects.message.element.focus();
        }
    },

    prepareForActivationEvents:{
        value:function(){
            var self=this;
            var message = self.templateObjects.message.element;
            message.addEventListener("keydown",self);
        }
    },

    handleEvent:{
        value:function(event){
            if(event._event.which == 13){
                this._sendMessage(this.templateObjects.message.value);
            }
        }
    }
});

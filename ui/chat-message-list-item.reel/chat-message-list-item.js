/**
 * @module ui/chat-message-list-item.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatMessageListItem
 * @extends Component
 */
exports.ChatMessageListItem = Component.specialize(/** @lends ChatMessageListItem# */ {
    constructor: {
        value: function ChatMessageListItem() {
            this.super();
        }
    },

    value: {
        value: null
    },

    draw: {
        value: function () {
            this.templateObjects.message.element.innerHTML = this.value.message ? this.value.message : "";
            this.templateObjects.userName.element.innerHTML = this.value.user_name ? this.value.user_name : "";
        }
    }
});

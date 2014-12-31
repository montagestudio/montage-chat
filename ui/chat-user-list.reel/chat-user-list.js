/**
 * @module ui/chat-user-list.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatUserList
 * @extends Component
 */
exports.ChatUserList = Component.specialize(/** @lends ChatUserList# */ {
    constructor: {
        value: function ChatUserList() {
            this.super();
        }
    },

    contentController: {
        value: null
    },

    templateDidLoad: {
        value: function() {

        }
    }
});
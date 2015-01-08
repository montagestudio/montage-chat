/**
 * @module ui/chat-header.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class ChatHeader
 * @extends Component
 */
exports.ChatHeader = Component.specialize(/** @lends ChatRoomHeader# */ {
    constructor: {
        value: function ChatHeader() {
            this.super();
        }
    }
});
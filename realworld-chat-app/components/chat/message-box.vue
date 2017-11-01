<template>
    <div class="chat-message">
        <textarea v-model="text" name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>
        <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
        <i class="fa fa-file-image-o"></i>
        <button @click="sendMessage">Send</button>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            text: ""
        }
    },
    methods: {
        sendMessage: function() {
            this.$store.dispatch('sendMessage', this.text);
            this.text = "";
        }
    }
}
</script>

<style>
.chat-message {
    padding: 30px;
}

.chat-message textarea {
    width: 100%;
    border: none;
    padding: 10px 20px;
    font: 14px/22px "Lato", Arial, sans-serif;
    margin-bottom: 10px;
    border-radius: 5px;
    resize: none;
}

.chat-message .fa-file-o, .chat-message .fa-file-image-o {
    font-size: 16px;
    color: gray;
    cursor: pointer;
}

.chat-message button {
    float: right;
    color: #94C2ED;
    font-size: 16px;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    font-weight: bold;
    background: #F2F5F8;
}

.chat-message button:hover {
    color: #75b1e8;
}
</style>

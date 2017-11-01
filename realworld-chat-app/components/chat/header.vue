<template>
    <div v-if="user" class="chat-header">
        <img :src="user.avatar" alt="avatar" />

        <div class="chat-about">
            <div class="chat-with">Chat with {{user.name}}</div>
            <div class="chat-num-messages">already {{user.count}} messages</div>
        </div>
        <i class="fa fa-star"></i>
    </div>
</template>

<script>
    module.exports = {
        computed: {
            user: function() {
                return this.$store.state.chattingWith;
            }
        }
    }
</script>

<style>
.chat-header {
    padding: 20px;
    border-bottom: 2px solid white;
}

.chat-header img {
    float: left;
    border-radius: 50%;
}

.chat-header .chat-about {
    float: left;
    padding-left: 10px;
    margin-top: 6px;
}

.chat-header .chat-with {
    font-weight: bold;
    font-size: 16px;
}

.chat-header .chat-num-messages {
    color: #92959E;
}

.chat-header .fa-star {
    float: right;
    color: #D8DADF;
    font-size: 20px;
    margin-top: 12px;
}
</style>

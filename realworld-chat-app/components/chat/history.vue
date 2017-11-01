<template>
    <div class="chat-history">
        <ul>
            <chat-message v-for="message in messages" :key="message.id" :to="to" :name="message.name" :timestamp="message.created" :text="message.text"></chat-message>
        </ul>
    </div>
</template>

<script>
function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 10);
}

module.exports = {
    props: ['to'],
    computed: {
        messages: function() {
            return this.$store.state.messages;
        }
    },
    methods: {
        scrollToBottom: function(delay) {
            var scope = this;
            setTimeout(function() {
                scrollTo(scope.$el, scope.$el.scrollHeight, 300);
            }, delay)
        }
    },
    created: function() {
        var scope = this;
        this.$store.subscribe(function(mutation, state) {
            switch (mutation.type) {
                case "addMessage":
                    scope.scrollToBottom();
                    break;                
                case "messages":
                    scope.scrollToBottom(100);
                    break;
            }
        });
    },

}
</script>

<style>
.chat-history {
    flex: 1;
    padding: 30px 30px 20px;
    border-bottom: 2px solid white;
    overflow-y: scroll;
}

.chat-history ul {
    display: flex;
    flex-direction: column;
}
</style>

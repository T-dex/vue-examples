<template>
    <li class="message" :class="who">
        <div class="message-data">
            <span class="message-data-time">{{timeAgo}}</span>
            <span class="message-data-name">{{name}}</span>
            <i class="fa fa-circle" :class="status"></i>
        </div>
        <div class="message-details">
            <div class="text-message">{{text}}</div>
        </div>
    </li>
</template>

<script>
module.exports = {
    props: ['timestamp', 'name', 'text', "to", "online"],
    computed: {
        who: function() {
            return this.to === this.name ? "them" : "me";
        },
        status: function() {
            return 'online';
        },
        timeAgo: function() {
            if (this.timestamp) {
                return timeAgo(this.timestamp);
            }
            return ""
        }
    }
}
</script>

<style scoped>

.message {
    display: flex;
    flex-direction: column;
}

.message-data {
    display: flex;
    margin-bottom: 15px;
    justify-content: flex-end;    
    align-content: center;
}

.text-message {
    color: white;
    padding: 18px 20px;
    line-height: 20px;
    font-size: 16px;
    border-radius: 7px;
    margin-bottom: 30px;
    position: relative;
    width: 90%;    
}

.text-message:after {
    bottom: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: #86BB71;
    border-width: 10px;
    margin-left: -10px;
}

.message.them .text-message {
    background: #86BB71;
}

.message.them .text-message:after {
    left: 7%;    
}

.message.me {
    justify-content: flex-end;        
}

.message.me .text-message:after {
    right: 7%;    
}

.message.me .message-details {
    display: flex;
    justify-content: flex-end;
}

.message.me .text-message {
    background: #94C2ED;
}

.message.me .text-message:after {
    border-bottom-color: #94C2ED;
}

.message-data * {
    margin: 0 5px;
}

.message.them .message-data {
    flex-direction: row-reverse;
    justify-content: flex-end;
}

.message-data .online {
    color: #86BB71;
}

.message-data .offline {
    color: #E38968;
}

.message-data-time {
    color: #a8aab1;
    padding-left: 6px;
}
</style>
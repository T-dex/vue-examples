<template>
  <div class="login">
    <div class="login-window">
      <input class="login-input" v-model="name" placeholder="Username...">
      <div @click="login()" class="login-submit">Enter</div>
      <!-- <router-link class="login-submit" :to="{ name: 'chat'}" class="button">Enter</router-link> -->
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      name: ""
    }
  },
  methods: {
    login: function() {
      this.$store.dispatch('login', {
        id: Date.now(),
        status: "online",
        name: "John Smith",
        avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg",
        lastActivity: new Date()
      }).then(() => {
        this.$router.push({path: 'chat'});
      });
    }
  }
}
</script>

<style scoped>
.login {
  background: #6A6C75;
  width: 100%;
  height: 100%;
}

.login-window {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 25px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}

.login-input {
  border: none;
  font-size: 18px;
  padding: 10px;
}

.login-submit {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 15px;
  font-size: 18px;
  color: white;
  background: #689F38;
  text-decoration: none;
  cursor: pointer;
}
</style>

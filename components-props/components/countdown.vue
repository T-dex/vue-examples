<template>
    <div class="countdown">{{display}}</div>
</template>

<script>
let timer;

module.exports = {
  props: ["time", "autoplay"],
  data: function() {
    return {
      timeRemaining: 0
    };
  },
  computed: {
    display: function() {
      if (this.timeRemaining) {
        if (this.timeRemaining == 1) {
          return `${this.timeRemaining} second remaining`;
        }
        return `${this.timeRemaining} seconds remaining`;
      }
      return `Out of time`;
    }
  },
  methods: {
    start: function() {
      timer = setInterval(() => {
        if (this.timeRemaining) {
          this.timeRemaining--;
        } else {
          this.stop();
        }
      }, 1000);
    },
    stop: function() {
      clearInterval(timer);
    },
    reset: function() {
      this.timeRemaining = this.time || 10;
      this.stop();
      if(this.autoplay === "true") {
        this.start();
      }
    }
  },
  created: function() {
    this.reset();
  },
  destroyed: function() {
    this.stop();
  }
};
</script>
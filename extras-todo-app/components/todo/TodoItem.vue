<template>
    <li :class="done">
      <div class="label" @click="toggle()">
        {{value.label}}
      </div>
      <div class="close" @click="remove()">X</div>
    </li>
</template>

<script>
module.exports = {
  props: ["value"],
  computed: {
    done: function() {
      return this.value.done ? "done" : "";
    }
  },
  methods: {
    toggle: function() {
      this.value.done = !this.value.done;
    },
    remove: function() {
      this.$emit("remove", this.value);
    }
  }
};
</script>

<style scoped>
li {
  display: flex;
  align-items: center;
  background-color: #eeeeee;
  border-color: #cccccc;
  margin-bottom: 5px;
  cursor: pointer;
}

li:hover {
  background-color: #BBDEFB;
}

li.done, li.done:hover {
  background: green;
  color: white;
}

.close {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 18px;
}

.label {
  flex: 1;
  padding: 10px 15px;
}

[flex] {
  flex: 1;
}
</style>
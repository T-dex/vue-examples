<template>
  <div class="todo">
      <input type="text" v-model="label" @keyup.13="add(label)">
      <div class="actions">
        <button class="btn btn-default" @click="markAllDone()">Mark all done</button>
        <button class="btn btn-default" @click="clear()">Clear done</button>
      </div>
      <ul>
          <task v-for="item in list" :key="item.label" :value="item" @remove="remove(item)"></task>
      </ul>
  </div>
</template>

<script>
module.exports = {
  components: { task: httpVueLoader("./task.vue") },
  data: function() {
    return {
      label: "",
      list: []
    };
  },
  created: function() {
    var list = localStorage.getItem("todos");
    if (list) {
      this.list = JSON.parse(list);
    }
  },
  methods: {
    add: function(label) {
      this.list.unshift({ label, done: false });
    },
    remove: function(todo) {
      let index = this.list.indexOf(todo);
      if (index !== -1) {
        this.list.splice(index, 1);
      }
    },
    markAllDone: function() {
      for (let i in this.list) {
        let todo = this.list[i];
        todo.done = true;
        // Pay attention to this
        // https://vuejs.org/v2/guide/list.html#Caveats
        Vue.set(this.list, i, todo);
      }
    },
    clear: function() {
      var i = this.list.length;
      while (i--) {
        if (this.list[i].done) {
          this.list.splice(i, 1);
        }
      }
    }
  },
  watch: {
    list: function(newVal) {
      this.label = "";
      localStorage.setItem("todos", JSON.stringify(this.list));
    }
  }
};
</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-family: sans-serif;
}

.actions {
  padding: 10px 0;
}

button {
  border: none;
  background: none;
}
button:focus {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn-active {
  background-image: none;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #333333;
  padding: 5px 15px;
  font-size: 13px;
  line-height: 1.5;
  border-radius: 3px;
  cursor: default;
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  /* Likely future */
}

.btn-default {
  background-color: #EEEEEE;
  border-color: #CCCCCC;
}
.btn-default:hover,
.btn-default.btn-active {
  background-color: #DDDDDD;
}
.btn-default[disabled] {
  color: #999999;
  border-color: #DDDDDD;
  cursor: not-allowed;
}

input {
  padding: 8px;
  font-size: 24px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>

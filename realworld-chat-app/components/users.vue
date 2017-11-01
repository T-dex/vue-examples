<template>
    <div class="people-list">
        <div class="search">
            <input type="text" placeholder="Find user..." v-model="search" />
            <!-- <i class="fa fa-search"></i> -->
        </div>
        <ul class="list">
            <user @click.native="chatWith(user)" v-for="user in users" :key="user.id" :model="user"></user>
        </ul>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            search: ""
        }
    },
    methods: {
        chatWith: function(user) {
            this.$store.commit('chatWith', user);
        },
    },
    computed: {
        users: function() {
            var self = this;
            return this.$store.state.users.filter(function(user) {
                return user.name.toLowerCase().indexOf(self.search) !== -1;
            });
        }
    },
    created: function() {
        this.$store.dispatch('fetchUsers');
    }
}
</script>

<style>
.people-list {
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #444753;
}

.people-list .search {
    padding: 20px;
}

.people-list .search input {
    color: white;
}

.people-list .search input::placeholder {
    color: rgba(255, 255, 255, 0.35);
}

.people-list input {
    border-radius: 3px;
    border: none;
    padding: 14px;
    color: white;
    background: #6A6C75;
    width: 100%;
    font-size: 14px;
}

.people-list .fa-search {
    position: absolute;
    top: 10px;
    right: 25px;
}

.people-list ul {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    overflow-y: auto;
}

.people-list img {
    float: left;
}

.people-list .about {
    float: left;
    margin-top: 8px;
}

.people-list .about {
    padding-left: 8px;
}

.people-list .status {
    color: #92959E;
}

</style>
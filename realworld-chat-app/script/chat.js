(function (global) {

    let store = new Vuex.Store({
        state: {
            user: {},
            chattingWith: null,
            users: [],
            messages: []
        },
        getters: {
        },
        mutations: {
            user: function (state, user) {
                state.user = user;
            },
            users: function (state, users) {
                state.users = users;
            },
            chatWith: function (state, user) {
                state.chattingWith = user;
                this.dispatch("fetchConversation", user.id);
            },
            messages: function (state, messages) {
                state.messages = messages;
            },
            addMessage: function (state, message) {
                state.messages.push(message);
            }
        },
        actions: {
            login: function (context, user) {
                context.commit("user", user);
            },
            fetchUsers: function (context) {
                axios.get("data/users.json").then(function (response) {
                    context.commit("users", response.data);
                });
            },
            fetchConversation: function (context, userId) {
                axios.get("data/conversation-" + userId + ".json").then(function (response) {
                    context.commit("messages", response.data);
                });
            },
            sendMessage: function (context, text) {
                let message = {
                    "id": context.state.user.id,
                    "name": context.state.user.name,
                    "text": text,
                    "created": new Date()
                };
                context.commit("addMessage", message);
            }
        }
    });

    let router = new VueRouter({
        routes: [
            {
                name: "login",
                path: "/login",
                component: httpVueLoader("components/login.vue")
            },
            {
                name: "chat",
                path: "/chat",
                component: httpVueLoader("components/messenger.vue")
            },
            {
                path: "*",
                redirect: "/login"
            }
        ]
    });

    Vue.component("messenger", httpVueLoader("components/messenger.vue"));
    Vue.component("users", httpVueLoader("components/users.vue"));
    Vue.component("user", httpVueLoader("components/users/user.vue"));
    Vue.component("chat", httpVueLoader("components/chat.vue"));
    Vue.component("chat-header", httpVueLoader("components/chat/header.vue"));
    Vue.component("chat-history", httpVueLoader("components/chat/history.vue"));
    Vue.component("chat-message-box", httpVueLoader("components/chat/message-box.vue"));
    Vue.component("chat-message", httpVueLoader("components/chat/message.vue"));
    Vue.component("welcome", httpVueLoader("components/welcome.vue"));

    global.chat = new Vue({
        name: "App",
        store: store,
        router: router,
        el: "#app"
    });

})(window);

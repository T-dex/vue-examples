<template>
    <div class="messenger">
        <users></users>
        <chat v-if="$store.state.chattingWith"></chat>
        <welcome v-else></welcome>
    </div>
</template>

<style scoped>
.messenger {
    display: flex;
    width: 100%;
    height: 100%;
    background: white;
    color: white;
}
</style>

<template>
    <div>
        Open the console to see logs
    </div>
</template>

<script>
    module.exports = {
        props: ['name'],
        beforeCreate: function () {
            console.log("beforeCreate")
        },
        created: function () {
            console.log(`${this.name}:created`)
        },
        beforeMount: function () {
            console.log(`${this.name}:beforeMount`)
        },
        mounted: function () {
            console.log(`${this.name}:mounted`)
        },
        beforeUpdate: function () {
            console.log(`${this.name}:beforeUpdate`)
        },
        updated: function () {
            console.log(`${this.name}:updated`)
        },
        activated: function () {
            console.log(`${this.name}:activated`)
        },
        deactivated: function () {
            console.log(`${this.name}:deactivated`)
        },
        beforeDestroy: function () {
            console.log(`${this.name}:beforeDestroy`)
        },
        destroyed: function () {
            console.log(`${this.name}:destroyed`)
        }
    }
</script>
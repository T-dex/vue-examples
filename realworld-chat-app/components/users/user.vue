<template>
    <li class="user">
        <img class="avatar" :src="model.avatar" alt="avatar" />
        <div class="about">
            <div class="name">{{model.name}}</div>
            <div class="status">
                <i class="fa fa-circle online"></i> {{model.status}}
            </div>
        </div>
    </li>
</template>

<script>
module.exports = {
    props: ['model']
}
</script>

<style>
.user {
    cursor: pointer;
    padding: 10px;
}

.user:hover {
    background: rgba(255, 255, 255, 0.05);
}

.user .avatar {
    border-radius: 50%;
}

.user .online,
.user .offline,
.user .me {
    margin-right: 3px;
    font-size: 10px;
}

.user .online {
    color: #86BB71;
}

.user .offline {
    color: #E38968;
}

.user .me {
    color: #94C2ED;
}
</style>
<template>
    <v-app>
        <Header></Header>
        <router-view />
    </v-app>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
    name: 'App',
    components: {
        Header,
    },
};
</script>

<style lang="scss">
.v-application--wrap {
    min-height: 20vh;
    height: 20vh;
}
</style>
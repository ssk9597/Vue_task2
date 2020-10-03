<template>
    <v-app>
        <Header></Header>
        <v-main>
            <router-view />
        </v-main>
        <Footer></Footer>
    </v-app>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// @ is an alias to /src

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

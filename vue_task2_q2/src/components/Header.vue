<template>
    <v-app>
        <!-- ナビゲーション -->
        <v-navigation-drawer app v-model="drawer" clipped>
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title grey--text text--darken-2">
                            Sample App
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-divider></v-divider>

                <v-list nav dense>
                    <v-list-item-content>
                        <v-list-item-title to="/login">ログイン</v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-content>
                        <v-list-item-title to="/registration">新規登録</v-list-item-title>
                    </v-list-item-content>
                </v-list>
            </v-container>
        </v-navigation-drawer>
        <!-- バー -->
        <v-app-bar color="primary" dark app clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title to="/">Sample App</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- ボタン -->
            <v-toolbar-items>
                <v-btn text to="/login">ログイン</v-btn>
                <v-btn text to="/registration">新規登録</v-btn>
            </v-toolbar-items>
        </v-app-bar>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            drawer: null,
        };
    },
};
</script>

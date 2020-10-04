<template>
    <v-app>
        <v-card width="700px" class="mx-auto">
            <v-card-title>
                <h2 class="display-1">お客様の情報を入力してください</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form v-model="valid">
                    性別をお選びください
                    <v-radio-group v-model="sex" row :rules="[formRulesRequired]">
                        <v-radio label="男性" value="男性"></v-radio>
                        <v-radio label="女性" value="女性"></v-radio>
                    </v-radio-group>
                    生年月日を選択してください
                    <v-row justify="center">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="birthday"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="birthday"
                                no-title
                                scrollable
                                locale="ja-jp"
                                :day-format="(date) => new Date(date).getDate()"
                            >
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(birthday)"
                                    >OK</v-btn
                                >
                            </v-date-picker>
                        </v-menu>
                    </v-row>
                    <v-card-action>
                        <v-btn class="info" @click="saveQ1()" :disabled="!valid"
                            >次へ進む<v-icon>mdi-menu-right</v-icon></v-btn
                        >
                    </v-card-action>
                </v-form>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            valid: true,
            sex: this.$store.state.records.sex,
            birthday: this.$store.state.records.birthday,
            menu: false,
        };
    },
    methods: {
        saveQ1: function () {
            this.$store.commit('saveQ1', {
                sex: this.sex,
                birthday: this.birthday,
            });
            this.$router.push('/step2');
        },
    },
    computed: {
        formRulesRequired: function () {
            return this.$store.state.formRules.required;
        },
    },
};
</script>

<style>
.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(7) .v-btn__content {
    color: blue;
}

.v-date-picker-table.v-date-picker-table--date > table > tbody tr td:nth-child(1) .v-btn__content {
    color: red;
}
</style>

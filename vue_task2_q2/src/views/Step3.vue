<template>
    <v-app>
        <v-card width="700px" class="mx-auto">
            <v-card-title>
                <h2 class="display-1">ご相談内容をご記入ください</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form v-model="valid">
                    <v-textarea
                        height="400px"
                        solo
                        label="こちらにご記入ください"
                        v-model="consult"
                        :rules="[formRules.required]"
                    ></v-textarea>

                    <v-card-action>
                        <v-btn class="info mr-8" @click="returnQ2()"
                            >前へ戻る<v-icon>mdi-menu-left</v-icon></v-btn
                        >
                        <v-btn class="info" @click="saveQ3()" :disabled="!valid"
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
    name: 'step3',
    data() {
        return {
            formRules: {
                required: (value) => {
                    return !!value || '必須です';
                },
            },
            valid: true,
            consult: '',
        };
    },
    methods: {
        saveQ3: function () {
            this.$store.commit('saveQ3', {
                consult: this.consult,
            });
            this.$router.push('/confirm');
        },
        returnQ2: function () {
            this.$store.commit('returnQ2', {});
            this.$router.push('/step2');
        },
    },
};
</script>

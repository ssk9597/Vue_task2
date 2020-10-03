<template>
    <v-app>
        <v-card width="700px" class="mx-auto">
            <v-card-title>
                <h2 class="display-1">ご相談内容をご記入ください</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form>
                    <v-textarea
                        height="400px"
                        solo
                        label="こちらにご記入ください"
                        v-model="consult"
                    ></v-textarea>

                    <v-card-action>
                        <v-btn class="info mr-8" @click="returnQ2()"
                            >前へ戻る<v-icon>mdi-menu-left</v-icon></v-btn
                        >
                        <v-btn class="info" @click="saveQ3()"
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
            insurance: this.$store.state.insurance,
            hospitalization: this.$store.state.hospitalization,
            surgery: this.$store.state.surgery,
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
            this.$store.commit('returnQ2', {
                insurance: this.insurance,
                hospitalization: this.hospitalization,
                surgery: this.surgery,
            });
            this.$router.push('/step2');
        },
    },
};
</script>

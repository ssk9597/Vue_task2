<template>
    <v-app>
        <v-card width="800px" class="mx-auto">
            <v-card-title>
                <h2 class="display-1">以下にお答えください</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-form v-model="valid">
                    <v-radio-group v-model="insurance" :rules="[formRulesRequired]">
                        <template>
                            <div>現在、生命保険に加入されていますか？</div>
                        </template>
                        <v-container>
                            <v-radio label="はい" value="はい"></v-radio>
                            <v-radio label="いいえ" value="いいえ"></v-radio>
                        </v-container>
                    </v-radio-group>
                    <v-radio-group
                        v-model="hospitalization"
                        v-if="seeQuestion2()"
                        :rules="[formRulesRequired]"
                    >
                        <template>
                            <div>
                                現在入院中ですか？<br />または最近3ヶ月以内に医師の診察・検査の結果、入院・手術を薦められたことはありますか？
                            </div>
                        </template>
                        <v-container>
                            <v-radio label="はい" value="はい"></v-radio>
                            <v-radio label="いいえ" value="いいえ"></v-radio>
                        </v-container>
                    </v-radio-group>
                    <v-radio-group
                        v-model="surgery"
                        v-if="seeQuestion3()"
                        :rules="[formRulesRequired]"
                    >
                        <template>
                            <div>
                                過去5年以内に、病気や怪我で手術を受けたこと、または継続して7日以内の入院をしたことがありますか？
                            </div>
                        </template>
                        <v-container>
                            <v-radio label="はい" value="はい"></v-radio>
                            <v-radio label="いいえ" value="いいえ"></v-radio>
                        </v-container>
                    </v-radio-group>
                    <v-card-action>
                        <v-btn class="info mr-8" @click="returnQ1()"
                            >前へ戻る<v-icon>mdi-menu-left</v-icon></v-btn
                        >
                        <v-btn class="info" @click="saveQ2()" :disabled="!valid"
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
    name: 'step2',
    data() {
        return {
            valid: true,
            insurance: this.$store.state.records.insurance,
            hospitalization: this.$store.state.records.hospitalization,
            surgery: this.$store.state.records.surgery,
        };
    },
    methods: {
        saveQ2: function () {
            this.$store.commit('saveQ2', {
                insurance: this.insurance,
                hospitalization: this.hospitalization,
                surgery: this.surgery,
            });
            this.$router.push('/step3');
        },
        returnQ1: function () {
            this.$store.commit('returnQ1', {});
            this.$router.push('/');
        },
        seeQuestion2: function () {
            return this.insurance !== '';
        },
        seeQuestion3: function () {
            return (this.insurance !== '') & (this.hospitalization !== '');
        },
    },
    computed: {
        formRulesRequired: function () {
            return this.$store.state.formRules.required;
        },
    },
};
</script>

<template>
    <v-app>
        <v-card width="700px" class="mx-auto">
            <v-card-title>
                <h2 class="display-1">以下の内容をご確認ください</h2>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">-性別-</h3>
                    <div>{{ records.sex }}</div>
                </div>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">-生年月日-</h3>
                    <div>{{ records.birthday }}</div>
                </div>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">-現在生命保険に加入されていますか？-</h3>
                    <div>{{ records.insurance }}</div>
                </div>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">
                        -現在入院中ですか？<br />または、最近3ヶ月以内に医師の診察・検査の結果、<br />入院・手術を進められたことはありますか？-
                    </h3>
                    <div>{{ records.hospitalization }}</div>
                </div>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">
                        -過去5年以内に、病気や怪我で、手術を受けたこと<br />または継続して7日以上の入院をしたことがありますか？-
                    </h3>
                    <div>{{ records.surgery }}</div>
                </div>
                <div class="mb-5">
                    <h3 class="text--darken-4 pb-2">-ご相談内容-</h3>
                    <div>{{ records.consult }}</div>
                </div>
                <div class="pt-3 mb-8">
                    <input
                        type="checkbox"
                        id="check"
                        v-model="confirm"
                        @click="confirm = !confirm"
                    />
                    <label for="check">こちらの内容で問題なければチェックしてください</label>
                </div>
                <v-card-action>
                    <v-btn class="info mr-8" @click="returnQ3()" :disabled="confirm"
                        >修正する<v-icon>mdi-menu-left</v-icon></v-btn
                    >
                    <v-btn class="info" :disabled="!confirm"
                        >送信<v-icon>mdi-menu-right</v-icon></v-btn
                    >
                </v-card-action>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
export default {
    name: 'confirm',
    data() {
        return {
            confirm: false,
        };
    },
    methods: {
        returnQ3: function () {
            this.$store.commit('returnQ3', {});
            this.$router.push('/step3');
        },
    },
    computed: {
        records: function () {
            return this.$store.state.records;
        },
    },
};
</script>

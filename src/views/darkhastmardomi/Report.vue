<template>
    <v-container>
        <transition name="fade" mode="out-in">
            <template v-if="loading">
                <spinner-cube-grid></spinner-cube-grid>
            </template>
            <template v-else>
                <div class="pa-2">
                    <template v-if="! success_form_report">
                        <div class="mb-4">
                            <h3 class="pink--text bold font-18">ثبت درخواستهای مردمی</h3>
                            <!--<p class="mt-2">نکاتی در مورد گزارشات مردمی </p>-->
                        </div>
                        <report-from @success="formSuccessSubmit"></report-from>
                    </template>
                    <template v-else>
                        <v-alert color="success" transition="fade-transition" icon="check_circle" :value="true"
                                 class="bold white--text font-18">
                            <span class="mr-2"> گزارش شما با موفقیت ارسال گردید. شماره پیگیری: <span>{{ token }}</span></span>
                        </v-alert>
                        <div style="text-align: center">
                            <v-btn
                                    @click="backToForm"
                                    class="teal darken-3 white--text bold back-btn">
                                بازگشت
                            </v-btn>
                        </div>
                    </template>
                </div>
            </template>
        </transition>
    </v-container>
</template>

<script>
    import MainSection from "../../Components/MainSection.vue";
    import ReportFrom from "./ReportFrom";
    import SpinnerCubeGrid from "../../Components/SpinnerCubeGrid";

    export default {
        components: {
            SpinnerCubeGrid,
            ReportFrom,
            MainSection
        },
        name: 'Report',
        data() {
            return {
                loading: true,
                success_form_report: false,
                token: ''
            }
        },
        mounted() {
            this.setData();
        },
        activated() {
            this.success_form_report = false;
        },
        methods: {
            setData() {
                this.$store.dispatch('setReportsData', {
                    start: () => {
                        this.loading = true;
                    },
                    complete: () => {
                        this.loading = false;
                    }
                })
            },
            formSuccessSubmit(trans) {
                this.success_form_report = true;
                this.token = trans;
            },
            backToForm() {
                this.success_form_report = false;
                this.token = '';
            }
        }
    }
</script>

<style scoped>

</style>
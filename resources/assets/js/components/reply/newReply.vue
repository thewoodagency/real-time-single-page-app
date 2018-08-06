<template>
    <v-card class="mt-4">
        <v-form>
            <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>
        </v-form>
        <v-btn dark type="submit" color="green" @click="createReply">New Reply</v-btn>
    </v-card>
</template>

<script>
    export default {
        name: "newReply",
        props: ['question'],
        data() {
            return {
                form: {
                    body: null,
                    question_id: this.question.id
                }
            }
        },
        methods: {
            createReply() {
                axios.post(`/api/question/${this.question.slug}/reply`, this.form)
                    .then(res => {
                        this.form.body = '';
                        //console.log(res.data.reply);
                        //this.$router.push(`/question/${this.question.slug}`);
                        EventBus.$emit('newReply', res.data.reply);
                    });
            }
        },
    }
</script>

<style scoped>

</style>
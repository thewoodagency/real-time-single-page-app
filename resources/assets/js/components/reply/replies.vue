<template>
    <div>
        <h2>Replies</h2>
        <reply
                v-for="(reply, index) in allreplies"
                :reply="reply"
                :key="reply.id"
                class="mt-3">
        </reply>
    </div>
</template>

<script>
    import reply from './reply';

    export default {
        name: "replies",
        props: ['replies'],
        components: {
            reply
        },
        data() {
            return {
                allreplies: this.replies,
                question_slug: this.question,
            }
        },
        created() {
            EventBus.$on('newReply', reply => this.allreplies.unshift(reply));
        },
        watch: {
            replies(value) {
                this.allreplies = value;
            },
        },
    }
</script>

<style scoped>

</style>
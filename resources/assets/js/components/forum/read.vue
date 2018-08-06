<template>
    <div>
        <div v-if="question">
            <edit v-if="editing" :data=question></edit>
            <div v-else>
                <v-container fluid>
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">
                                    {{ question.title }}
                                </h3>
                                <div class="grey--text">Posted by {{ question.user }} {{ question.created_at }}</div>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn color="teal" v-if="question.reply_count > 0" dark>{{ question.reply_count }} Replies</v-btn>
                        </v-card-title>

                        <v-card-text v-html="body"></v-card-text>
                        <v-card-actions v-if="own">
                            <v-btn icon small @click="editQuestion">
                                <v-icon color="orange">edit</v-icon>
                            </v-btn>
                            <v-btn icon small @click="deleteQuestion">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-container>
                <v-container>
                    <reply :replies="replies"></reply>
                    <newreply :question="question"></newreply>
                </v-container>
            </div>
        </div>
    </div>
</template>

<script>
    import edit from './edit';
    import reply from '../reply/replies';
    import newreply from '../reply/newReply';

    export default {
        name: "read",
        data() {
            return {
                question: null,
                //reply: [],
                editing: false,
                replies: {}
            }
        },
        components: {
            edit,
            reply,
            newreply
        },
        methods: {
            deleteQuestion() {
                axios.delete(`/api/question/${this.question.slug}`)
                    .then(res => this.$router.push('/forum'))
                    .catch(error => console.log(error.response.data));
            },
            editQuestion() {
                EventBus.$emit('startEditing');
            },
            listen() {
                EventBus.$on('startEditing', () => {
                    this.editing = true;
                });
                EventBus.$on('cancelEdit', () => {
                    this.editing = false;
                });
                EventBus.$on('deleteReply', (index) => {
                    console.log('index', index);
                    //this.replies.splice(index, 1);
                    axios.delete(`/api/question/${this.$route.params.slug}/reply/${index}`)
                        .then(res => this.getQuestion());
                })
            },
            getQuestion() {
                //console.log(this.$route.params);
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data);

                axios.get(`/api/question/${this.$route.params.slug}/reply`)
                    .then(res => this.replies = res.data.data);
            },
        },
        computed: {
            body() {
                return md.parse(this.question.body);
            },
            own() {
                console.log(this.question.user_id);
                return User.own(this.question.user_id);
            }
        },
        created() {
            this.listen();
            this.getQuestion();
        },
    }
</script>

<style scoped>

</style>
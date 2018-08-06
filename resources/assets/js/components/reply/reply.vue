<template>
    <v-card>
        <v-card-title>
            <div class="headline">{{ reply.user }}</div>
            <div class="ml-2">said {{ reply.created_at }}</div>
        </v-card-title>
        <v-divider></v-divider>
        <edit-reply v-if="editing" :reply=reply></edit-reply>
        <v-card-text v-else v-html="body"></v-card-text>

        <v-card-actions v-if="!editing">
            <v-btn icon>
                <v-icon color="orange" @click="editReply">edit</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="red" @click="deleteReply">delete</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import editReply from './editReply';

    export default {
        name: "reply",
        props: ['reply', 'index'],
        components: {
            editReply
        },
        data() {
            return {
                editing: false
            }
        },
        computed: {
            body() {
                return md.parse(this.reply.body);
            },
        },
        methods: {
            deleteReply() {
                EventBus.$emit('deleteReply', this.reply.id);
            },
            editReply() {
                this.editing = true;
            }
        },
        created() {
            EventBus.$on('cancelEditing', () => this.editing = false);
        }
    }
</script>

<style scoped>

</style>
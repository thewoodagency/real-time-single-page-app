<template>
    <div>
        <markdown-editor v-model="reply.body"></markdown-editor>
        <v-card-actions>
            <v-btn icon>
                <v-icon color="green" @click="update">save</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon color="red" @click="cancel">cancel</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: "editReply",
        props: ['reply'],
        methods: {
            cancel() {
                EventBus.$emit('cancelEditing');
            },
            update() {
                console.log(this.reply);
                axios.patch(`/api/question/${this.$route.params.slug}/reply/${this.reply.id}`, this.reply)
                    .then(res => EventBus.$emit('cancelEditing'));
            }
        }

    }
</script>

<style scoped>

</style>
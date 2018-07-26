<template>
    <v-container fluid>
        <v-card>
            <v-form>
                <v-text-field
                        v-model="form.title"
                        type="text"
                        label="Title"
                        required
                ></v-text-field>
                <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>
                <v-card-actions>
                    <v-btn @click="updateQuestion">
                        Update
                    </v-btn>
                    <v-btn @click="cancel">
                        Cancel
                    </v-btn>
                </v-card-actions>
            </v-form>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "edit",
        data() {
            return {
                form: {
                    title: null,
                    body: null
                },
            }
        },
        props: ['data'],
        mounted() {
            //console.log(this.question);
            this.form = this.data;

        },
        methods: {
            updateQuestion() {
                axios.patch(`/api/question/${this.form.slug}`, this.form)
                    .then(res => this.cancel())
                    .catch(error => console.log(error.response.data));
            },
            cancel() {
                EventBus.$emit('cancelEdit');
            }
        },
    }
</script>

<style scoped>

</style>
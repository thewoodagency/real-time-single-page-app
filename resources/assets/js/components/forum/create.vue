<template>
    <v-container>
        <v-card>
        <v-form>
            <v-text-field
                    v-model="form.title"
                    type="text"
                    label="Title"
                    required
            ></v-text-field>
            <v-select
                    v-model="form.category_id"
                    label="Category"
                    :items="categories"
                    item-text="name"
                    item-value="id"
            ></v-select>

            <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>
        </v-form>
        <v-btn type="submit" color="green" @click="create">Create</v-btn>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "create",
        methods: {
            create() {
                console.log(this.form);
                axios.post('/api/question', this.form)
                    .then(res => this.$router.push(res.data.path))
                    .catch(error => this.errors = error.response.data.error);
            }
        },
        data() {
            return {
                form: {
                    title: null,
                    body: null,
                    category_id: null
                },
                categories: [],
                errors: {}
            }
        },
        created() {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data);

        },
    }
</script>

<style scoped>

</style>
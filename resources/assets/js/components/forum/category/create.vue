<template>
    <div>
        <v-container>
            <v-form @submit.prevent="createCategory">
                <v-text-field
                        v-model="form.name"
                        type="text"
                        label="New Category"
                        required
                ></v-text-field>
                <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
                <v-btn type="submit" color="green" v-if="editSlug">Update</v-btn>
                <v-btn type="submit" color="blue" v-else>Create</v-btn>
            </v-form>
            <v-card>
                <v-list>
                    <v-list-tile v-for="(category, index) in categories" :key="category.id">
                        <v-list-tile-action>
                            <v-btn icon small @click="editCategory(index)">
                                <v-icon color="orange">edit</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ category.name }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon small @click="deleteCategory(category.slug)">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
                <v-divider></v-divider>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import AppSidebar from '../../AppSidebar';

    export default {
        name: "create",
        components: {
            AppSidebar
        },
        data() {
            return {
                form: {
                    name: ''
                },
                errors: {},
                categories: {},
                editSlug: false
            }
        },
        created() {
            if (!User.isadmin()) {
                this.$router.push('/forum');
            }
            axios.get('/api/category')
                .then(res => this.categories = res.data.data);
        },
        methods: {
            createCategory() {
                if (!this.editSlug) {
                    axios.post('/api/category', this.form)
                        .then(
                            res => {
                                console.log(res.data);
                                this.categories.unshift(res.data);
                                this.form.name = null;
                            }
                        )
                        .catch(error => console.log(error.response.data));
                } else {
                    axios.patch(`/api/category/${this.editSlug}`, this.form)
                        .then(
                            res => {
                                this.categories.unshift(res.data);
                                this.form.name = null;
                            }
                        )
                        .catch(error => console.log(error.response.data));
                }
            },
            deleteCategory(slug, index) {
                console.log('cat index', index);
                axios.delete(`/api/category/${slug}`,)
                    .then(res => this.categories.splice(index,1));
            },
            editCategory(index) {
                this.form.name = this.categories[index].name;
                this.editSlug = this.categories[index].slug;
                //this.categories.splice(index, 1);
            }

        }
    }
</script>

<style scoped>

</style>
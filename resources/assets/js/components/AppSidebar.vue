<template>
    <v-card>
        <v-toolbar color="cyan" dark class="mt-2" dense>
            <v-toolbar-title>Categories</v-toolbar-title>
        </v-toolbar>
        <v-list>
            <v-list-tile v-for="category in categories" :key="category.id" :data=category>
                <v-list-tile-title>
                    {{ category.name }}
                </v-list-tile-title>
            </v-list-tile>
        </v-list>

    </v-card>
</template>

<script>
    export default {
        name: "AppSidebar",
        data() {
            return {
                categories: []
            }
        },
        mounted() {
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
                .catch(error => console.log(error.response.data))
        }
    }
</script>

<style scoped>

</style>
<template>
    <v-toolbar>
        <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>
            <router-link to="/">Single Page Forum</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
                <v-btn flat>{{item.title}}</v-btn>
            </router-link>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        name: "Toolbar",
        data() {
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title: 'Category', to: '/category', show: User.loggedIn()},
                    {title: 'Login', to: '/login', show: !User.loggedIn()},
                    {title: 'Logout', to: '/logout', show: User.loggedIn()},
                ],
                status: 'logout'
            }
        }
    }
</script>

<style scoped>
    .hidden-sm-and-down {
        margin-top: 35px;
    }
</style>
<template>
    <v-container>
        <v-form>
            <v-text-field
                    v-model="form.email"
                    type="email"
                    label="Your Email"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>
        </v-form>
        <v-btn type="submit" color="green" @click="login">Login</v-btn>
        <v-btn flat><router-link to="/signup">Signup</router-link></v-btn>
    </v-container>
</template>

<script>
    export default {
        beforeMount() {
            if (User.loggedIn()) {
                this.$router.push({name: 'forum'});
            }
        },
        data() {
            return {
                form: {
                    email: 'hamill.reggie@example.org',
                    password: 'secret'
                },
            }
        },
        methods: {
            login() {
                User.login(this.form);
                window.location = '/forum';
            }
        }
    }
</script>

<style scoped>

</style>
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
    </v-container>
</template>

<script>
    import User from '../../Helper/User';

    export default {
        data() {
            return {
                form: {
                    email: 'hamill.reggie@example.org',
                    password: 'secret'
                }
            }
        },
        methods: {
            login() {
                User.login(this.form);
            }
        }
    }
</script>

<style scoped>

</style>
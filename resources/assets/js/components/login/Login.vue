<template>
    <v-container>
        <v-form v-model="valid">
            <v-text-field
                    v-model="form.email"
                    type="email"
                    label="Email"
                    required
            ></v-text-field>
            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>
        </v-form>
        <v-btn type="submit" color="green">Login</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        }
    }
</script>

<style scoped>

</style>
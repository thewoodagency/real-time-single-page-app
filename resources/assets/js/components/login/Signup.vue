<template>
    <v-container>
        <v-form>
            <v-text-field
                    v-model="form.name"
                    type="text"
                    label="Your Name"
                    required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
            <v-text-field
                    v-model="form.email"
                    type="email"
                    label="Your Email"
                    required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
            <v-text-field
                    v-model="form.password"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
            <v-text-field
                    v-model="form.password_confirmation"
                    label="Password"
                    type="password"
                    required
            ></v-text-field>
        </v-form>
        <v-btn type="submit" color="blue" @click="signup">Signup</v-btn>
    </v-container>
</template>

<script>
    export default {
        name: "Signup",
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                },
                errors: {}
            }
        },
        created() {
            if (User.loggedIn()) {
                this.$router.push({name: 'forum'});
            }
        },
        methods: {
            signup() {
                //console.log(this.form);
                //this.errors = User.signup(this.form);
                axios.post('/api/auth/signup', this.form)
                    .then(res => {
                        User.responseAfterLogin(res);
                        this.$router.push({name:'forum'});
                    })
                    .catch(error => this.errors = error.response.data.errors);
            }
        }
    }
</script>

<style scoped>

</style>
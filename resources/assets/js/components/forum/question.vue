<template>
    <div>
    <v-card class="mt-2">
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">
                    <router-link :to="data.path">
                        {{ data.title }}
                    </router-link>
                </h3>
                <div class="grey--text">Posted by {{ data.user }} {{ data.created_at }}</div>
                <v-btn color="teal" dark>{{ data.reply_count }} Replies</v-btn>

            </div>
        </v-card-title>

        <v-card-text v-html="body"></v-card-text>
    </v-card>
    </div>
</template>

<script>
    export default {
        name: "question",
        props: ['data'],
        computed: {
            body() {
                return md.parse(this.data.body);
            }
        }
    }
</script>

<style scoped>
    .v-card {
        margin-bottom:10px
    }
</style>
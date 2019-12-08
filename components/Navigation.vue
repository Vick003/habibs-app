<template>
    <div>
        <v-app-bar app dark>
            <v-toolbar-title>
                <img height="100" width="100" src="findcar_logo_0.png"/>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :nuxt="true" to="/">Home</v-btn>
            <v-btn text :nuxt="true" to="/get-started">Get Started</v-btn>
        </v-app-bar>
    </div>
</template>
<script>
    
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
img {
    margin-top: 20px;
}

</style>
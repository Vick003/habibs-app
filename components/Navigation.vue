<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>
                <nuxt-link to="/">
                    <img height="100" width="100" src="findcar_logo_0.png"/>
                </nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text :nuxt="true" to="/"><span>Home</span></v-btn>
            <v-btn text :nuxt="true" to="/get-started"><span>Get Started</span></v-btn>
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

span {
    color: #d6bc31;
}

</style>
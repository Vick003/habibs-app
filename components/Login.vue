<template>
    <v-app>
        <!-- Login Module -->
            <v-card width="100%" class="mx-auto mt-5">
            <v-card-title>
                <h1 class="display-1">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="Username" prepend-icon="mdi-account-circle"/>
                    <v-text-field 
                    label="Password" 
                    :type="showPassword ? 'text' : 'password'" 
                    prepend-icon="mdi-lock" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                    @click:append="showPassword = !showPassword"
                    />
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="success">
                        Register
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="login">
                        Login
                    </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-card>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                showPassword: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
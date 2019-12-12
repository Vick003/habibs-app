<template>
    <div>
        <Navigation />
        <v-content>
            <v-container>
                <v-row>
                    <v-spacer></v-spacer>
                    <v-col cols="10">
                     <v-card outlined>
                         <v-img
                            height="200px"
                            src="mercedes.jpg"
                            >
                            <v-card-title class="white--text">
                                <h1>Let's get that dream ride!</h1>
                            </v-card-title>
                        </v-img>
                         
                         <v-card-text>
                             <v-container>
                                 <v-row>
                                     <v-col cols="6">
                                        <v-text-field label="Name" type="text" v-model='Name'></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Email" type="email" v-model='Email'></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Phone" type="text" v-model='Phone'></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="State" type="text" v-model='State'></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Zip Code" type="text" v-model='Zipcode'></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Credit Score" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Down Payment" type="text"></v-text-field>
                                     </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Asking Price" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Year" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Make" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Model" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Color" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Max Miles Desired" type="text"></v-text-field>
                                     </v-col>
                                     <v-col cols="12">
                                          <v-textarea
                                                solo
                                                name="input-7-4"
                                                label="Additional Vehicle Accessories/Features/Packages"
                                            ></v-textarea>
                                     </v-col>
                                     <v-col cols="12">
                                          <v-textarea
                                                solo
                                                name="input-7-4"
                                                label="Additional Comments"
                                            ></v-textarea>
                                     </v-col> 
                                 </v-row>
                                 <v-row>
                                     <v-spacer></v-spacer>
                                     <v-col cols="3">
                                         <v-btn @click="addCustomerToFireStore">Submit</v-btn>
                                     </v-col>
                                     <v-spacer></v-spacer>
                                 </v-row>
                             </v-container>
                         </v-card-text>
                     </v-card>
                    
                         <!--  -->
                    </v-col>
                    <v-spacer></v-spacer>
                </v-row>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import Navigation from "~/components/Navigation.vue";
    export default {
        components: {
            Navigation
        },

        data() {
            return {
                Name: '',
                Email: '',
                Phone: '',
                State: '',
                Zipcode: ''
            }
        },

        methods: {
            addCustomerToFireStore() {
                const { Name, Email, Phone, State, Zipcode } = this;
                this.$fireStore.collection('Customers').add({
                    Name,
                    Email,
                    Phone,
                    State,
                    Zipcode
                })
                .then(docRef => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch(error => {
                    console.error("Error adding document: ", error);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: #d6bc31;
    }
</style>
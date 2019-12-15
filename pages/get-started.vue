<template>
    <v-app>
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
                                        <v-text-field label="Name" type="text" v-model='Name' />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Email" type="email" v-model='Email' />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Phone" type="text" v-model='Phone' />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-autocomplete label="State" :items="states" v-model="State"/>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Zip Code" type="text" v-model='Zipcode' />
                                     </v-col>
                                     <v-col cols="6">
                                         <v-dialog
                                            ref="dialog"
                                            v-model="modal"
                                            :return-value.sync="purchaseDate"
                                            persistent
                                            width="290px"
                                        >
                                            <template v-slot:activator="{ on }">
                                            <v-text-field
                                                v-model="purchaseDate"
                                                label="Purchase Date"
                                                readonly
                                                v-on="on"
                                            ></v-text-field>
                                            </template>
                                            <v-date-picker v-model="purchaseDate" scrollable>
                                            <v-spacer></v-spacer>
                                            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                            <v-btn text color="primary" @click="$refs.dialog.save(purchaseDate)">OK</v-btn>
                                            </v-date-picker>
                                        </v-dialog>
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Credit Score" type="text" v-model="creditScore" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Down Payment" type="text" v-model="downPayment" />
                                     </v-col>
                                    <v-col cols="6">
                                        <v-text-field label="Asking Price" type="text" v-model="askingPrice" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Year" type="text" v-model="year" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Make" type="text" v-model="make" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Model" type="text" v-model="model" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Color" type="text" v-model="color" />
                                     </v-col>
                                     <v-col cols="6">
                                        <v-text-field label="Max Miles Accepted" type="text" v-model="maxMiles" />
                                     </v-col>
                                     <v-col cols="12">
                                          <v-textarea
                                                solo
                                                name="input-7-4"
                                                label="Additional Vehicle Accessories/Features/Packages"
                                                v-model="extras"
                                            ></v-textarea>
                                     </v-col>
                                     <v-col cols="12">
                                          <v-textarea
                                                solo
                                                name="input-7-4"
                                                label="Additional Comments"
                                                v-model="comments"
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
    </v-app>
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
                Zipcode: '',
                states: [
                    "Arizona",
                    "California",
                    "Hawaii",
                    "Oregon",
                    "Washington",
                    "Nevada"
                ],
                purchaseDate: '',
                modal: false,
                extras: "",
                comments: "",
                creditScore: "",
                downPayment: "",
                askingPrice: "",
                year: "",
                make: "",
                model: "",
                color: "",
                maxMiles: ""
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
<template>
 <v-container>
        <v-form @submit.prevent="signup">
            <v-text-field
            label="Full Name"
            v-model="form.name"
            type="text"
            clearable
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
            <v-text-field
            label="E-mail"
            v-model="form.email"
            type="email"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>
            <v-text-field
            label="Password"
            v-model="form.password"
            type="password"
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>
            <v-text-field
            label="Password again!"
            v-model="form.password_confirmation"
            type="password"
            ></v-text-field>
            <v-btn
            color="green"
            type="submit"
            >Signup</v-btn>
            <router-link to="/login">
              <v-btn
            color="blue"
            >Login</v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
               form:{
name:null,
email:null,
password:null,
password_confirmation:null
        },    errors:{

        }
        }
    },
    methods:{
        signup(){
axios.post('/api/auth/signup',this.form)
.then(res => {
   User.saveData(res.data.access_token, res.data.user_name)
})
.catch(err => this.errors=err.response.data.errors)
    }
    }

}
</script>
<style>
</style>

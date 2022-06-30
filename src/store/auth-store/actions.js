import axios from 'axios'
import router from '../../router/index'

export const actions = {
    loginAndSaveToken({commit},formData) {
        console.log('login',formData)
        // this is just an example on how to save the JWT Token, PS AUTH API is fake
        if (formData.username == 'admin' && formData.password == 'admin') {
            localStorage.setItem('auth_token', 'sample token')
            localStorage.setItem('username', 'admin');
            commit('setFormData',formData)
            commit('setToken','sample token')
            if(localStorage.getItem('return_url')){

                router.push(localStorage.getItem('return_url'));
            }else{
                localStorage.getItem('/')
            }
        }
        // axios.post('https://fake-url.com/api/auth', formData).then((response) => {
        //     localStorage.setItem('auth_token', response.datatoken);
        //     localStorage.setItem('username', response.username);
        //     router.push('/profile');
        // }).catch((error) => {
        //     //will always redirect to profile 
        //     router.push('/profile');
        // });
    },
};
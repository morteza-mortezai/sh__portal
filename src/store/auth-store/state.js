const username = localStorage.getItem('username') || null
const token = localStorage.getItem('auth_token') || null
export const state = {
    currentSignUpStep: 1,
    isSignInPanelActive: false,
    formData: {
        username: username,
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        address: null,
        phoneNumber: null,
    },
    token
};
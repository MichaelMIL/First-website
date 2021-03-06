const defualtState= {
    user: {},
    token: null,
    error: null,
    profile: null
}

const auth = (state = defualtState , action)=>{
    switch (action.type){
        case 'LOGIN': 
            return{
                ...state,
                user: action.payload,
                token: action.payload.token
            }
        case 'LOGOUT': 
            return{
                ...state,
                user: null,
                token: null
            }
        case 'SHOW_ERROR':
            return{
                ...state,
                error: action.payload
            }
        case 'AFTER_LOGIN':{
            return{
                ...state,
                user: action.payload,
                profile: action.payload.Profile
            }
        }
        default:
            return state;
    }
}

export default auth;
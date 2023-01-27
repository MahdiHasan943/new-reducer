import { actionTypes } from "./actionType";

       
    export    const initialState = {
            
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            education: "",
            quantity: 0,
            feedback: "",
            term: false,
            
        }




       
  

  export  const reducer = (state, action) => {
        switch (action.type) {
            case actionTypes.INPUT:
                return {

                    ...state, [action.payload.name]: action.payload.value,
                };
            case actionTypes.TOGGLE:
                return {
                    ...state,
                    term: !state.term,
                };
            
            case actionTypes.INCREAMENT:
                return { ...state, quantity: state.quantity + action.payload };
            
                case actionTypes.DECREAMENT:
                    return {...state, quantity:state.quantity>=6?state.quantity-action.payload : state.quantity=0 };
            
            
            default: 
                return state; 
        }
        
    }
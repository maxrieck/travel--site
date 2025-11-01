import { createContext, useReducer } from "react";

const initialState = {
    formData: {
        name: "User",
        email: "",
        notifications: false,
        dates: [],
        location: '',
        hotel: '',
        room: '',
        perNight: 0,

    },

    prevPath: '/',
};


const FormContext = createContext({
    state: initialState,
    dispatch: () => null,
});


const formReducer = (state, action) => {

    switch (action.type) {

        case 'ADD_INFO':
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            };

        case 'SET_PATH':
            return {
                ...state,
                prevPath: action.payload
            }

        case 'DELETE_ORDER':
            return state;

            
        default:
            return state;
    }
};


export const FormProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState);
    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    );
};


export default FormContext;
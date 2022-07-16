import { Actiontype } from "../constants/actiontype";

const intialState = {
    product : [
        {
            id:1,
            title : "Dipesh",
            category:"programmer"
        }
    ]
}

export const Productreducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case Actiontype.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}

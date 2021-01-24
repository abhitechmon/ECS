// import { CART_ADD } from "../actions/sagaActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

// export default function (state = initialState, action) {
//     switch (action.type) {
//         case "CART_ADD":
//             const items = _.mapKeys(action.payload, 'bookID');
//             return { ...state, ...items };
//     }
// }
export default createReducer(initialState, {
    CART_ADD: (state = action.payload, action) => ({ ...state, ...action.payload }),
});

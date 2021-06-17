import {
      CREATE_ROW,
      GET_ROW,
      UPDATE_ROW,
      DELETE_ROW,
      SELECT_ROW,
      CLEAR_ROW,
      DELETE_SELECTED_ROW,
    } from '../types';
    const intialState = {
      rows: [
      ],
      row: null,
      selectedRows: [],
    };
    
    export const kassaReducer = (state = intialState, action) => {
      switch (action.type) {
        case CREATE_ROW:
          return {
            ...state,
            rows: [action.payload, ...state.rows],
          };
        case GET_ROW:
          let arr = state.rows.filter(
            (row) => row.id == action.payload
          );
          arr = arr.values();
          for (let val of arr) {
            arr = val;
          }
          return {
            ...state,
            row: arr,
            rows: [action.payload, ...state.rows],
          };
        case UPDATE_ROW:
          return {
            ...state,
            rows: state.rows.map((row) =>
              row.id == action.payload.id ? action.payload : row
            ),
          };
        case DELETE_ROW:
          return {
            ...state,
            rows: state.rows.filter(
              (contact) => contact.id !== action.payload
            ),
          };
        case DELETE_SELECTED_ROW:
          return {
            ...state,
            rows: [],
          };
        case SELECT_ROW:
          return {
            ...state,
            selectedRows: action.payload,
          };
    
        case CLEAR_ROW:
          return {
            ...state,
            selectedRows: [],
          };
        default:
          return state;
      }
    };
    
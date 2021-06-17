import {
      CREATE_ROW,
      GET_ROW,
      UPDATE_ROW,
      DELETE_ROW,
      SELECT_ROW,
      CLEAR_ROW,
      DELETE_SELECTED_ROW,
    } from "../types";
  import axios from 'axios'
    // actions
    export const addContact = (contact) => async (dispatch, getState) => {
      try {
          dispatch({
            type: CREATE_ROW,
            payload: contact,
          })
    
          const {
              userLogin: { userInfo },
          } = getState()
    
          const config = {
              headers: {
                  'Content-type': 'application/json',
                  Authorization: `Bearer ${userInfo.token}`
              }
          }
    
          const { data } = await axios.post(
              `http://192.168.60.50:8000/table/`,
             contact,
            
          )
        //   const { data1 } = await axios.get(
        //     `http://192.168.60.55:8000/table/`,
           
        // )
        
        
    
        //   dispatch({
        //       type: GET_CONTACT,
        //       payload: data1
        //   })
    
          // dispatch({
          //     type: CART_CLEAR_ITEMS,
          //     payload: data
          // })
    
          // localStorage.removeItem('cartItems')
    
    
      } catch (error) {
          // dispatch({
          //     type: ORDER_CREATE_FAIL,
          //     payload: error.response && error.response.data.detail
          //         ? error.response.data.detail
          //         : error.message,
          // })
          console.log(error);
      }
    }
    
    // get a contact
    export const getContact = (id) => ({
      type: GET_ROW,
      payload: id,
     
    });
    
    // update a contact
    export const updateContact = (contact) => ({
      type: UPDATE_ROW,
      payload: contact,
    });
    
    // delete a contact
    export const deleteContact = (id) => ({
      type: DELETE_ROW,
      payload: id,
    });
    
    
    // select all contact
    export const selectAllContact = (id) => ({
      type: SELECT_ROW,
      payload: id,
    });
    
    // clear selected contacts
    export const clearAllContact = () => ({
      type: CLEAR_ROW,
    });
    
    // delete selected contacts
    export const deleteAllContact = () => ({
      type: DELETE_SELECTED_ROW,
    });
    
import { v4 as uuidv4 } from 'uuid';

export const addRecord = (data) => {
    return (dispatch) => {
        const { firstName,
          lastName,
          email,
          phoneNo
          } = data;

        const newData = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo
        
        }
        
        dispatch({type: 'ADD_RECORD', newData})
    }
}

export const fetchRecord = (data) => {
    return (dispatch) => {
        const { firstName,
          lastName,
          email,
          phoneNo
          } = data;

        const newData = {
            id: uuidv4(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNo: phoneNo
        
        }
        
        dispatch({type: 'FETCH_RECORD', newData})
} 

}

export const editRecord = (id, updates) => {
    return (dispatch) => {
        console.log("edit action is called")
       dispatch({type: 'EDIT_RECORD', id, updates})
    }
}

export const removeRecord = (id) => {
   console.log(id)
   return (dispatch) => {
    dispatch({type: 'REMOVE_RECORD', id})
   }
}



const data = [
  
]

const recordReducer = (state=data, action) => {
    switch(action.type){
        case 'ADD_RECORD':
            return [
                ...state,
                action.newData
            ]
        case 'FETCH_RECORD':
            console.log(action.newData)
            if(state.length <= 10){
                return [
                    ...state,
                    action.newData
                ]   
            }else{
                return state;
            }
        case 'REMOVE_RECORD':
            console.log("remove record reducer")
            return state.filter(({id}) => id !== action.id)    
        case 'EDIT_RECORD':
            return state.map((rec) => {
                if(rec.id === action.id){
                    return {
                        ...rec,
                        ...action.updates
                    }
                }else{
                    return rec;
                }
            })    
        default: 
        return state;
    }
}

export default recordReducer;
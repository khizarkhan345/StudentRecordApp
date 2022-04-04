const initialFiltersData = {
    sortBy: 'name'
}

const filtersReducer = (state=initialFiltersData, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default filtersReducer;
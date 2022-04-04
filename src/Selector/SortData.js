
const SortData = (data) => {
    return data.sort((a, b) => {
       return a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1: -1; 
    })
}

export default SortData;
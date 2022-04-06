import SortData from "../../Selector/SortData";
import data from '../fixtures/data';

test('should return sorted data', () => {
    const result = SortData(data);
    
    expect(result).toEqual([
        {
            id: '2',
            firstName: 'Amir',
            lastName: 'Khan',
            email: 'amir@gmail.com',
            phoneNo: '0345-9801899'
        },
        {
            id: '3',
            firstName: 'Junaid',
            lastName: 'shahzad',
            email: 'junaid@gmail.com',
            phoneNo: '0344-9783488'
        },
        {
            id: '1',
            firstName: 'Khizar',
            lastName: 'Hayat',
            email: 'khizar@gmail.com',
            phoneNo: '0313-9543210'
        }
    ])
})
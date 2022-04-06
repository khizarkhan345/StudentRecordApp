
import recordReducer from "../../Reducers/recordReducer";
import data from "../fixtures/data";

test('should initialize default state', () => {
    const state = recordReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove a record by id', () => {
    const state = recordReducer(data, {type: 'REMOVE_RECORD', id: data[1].id});

    expect(state).toEqual([data[0], data[2]])
});

test('should add a record', () => {
    const newData = {
        id: '4',
        firstName: 'Saarwan',
        lastName: 'Khan',
        email: 'saarwan@yahoo.com',
        phoneNo: '0346-9388443'
    }
    const state= recordReducer(data, {type: 'ADD_RECORD', newData});

    expect(state).toEqual([data[0], data[1], data[2], newData])
})

test('should edit a record', () => {
    const updates = {
        id: '2',
        firstName: 'Amir',
        lastName: 'Hayat',
        email: 'amir@gmail.com',
        phoneNo: '0345-9801899'
    }

    const state = recordReducer(data, {type: 'EDIT_RECORD', id: data[1].id, updates})

    expect(state).toEqual([data[0], updates, data[2]])
})
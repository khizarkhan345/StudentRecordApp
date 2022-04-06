// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import { addRecord, fetchRecord, editRecord, removeRecord } from "../../Actions/recordActions";


// const createMockStore = configureStore([thunk]);


// test('shoud setup an action generator for remove record', (done) => {
//     const store = createMockStore({});

//    return store.dispatch(removeRecord('abc123')).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'REMOVE_RECORD',
//             id: 'abc123'
//         })
//         done();
//     })

// })
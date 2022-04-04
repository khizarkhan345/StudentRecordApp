import {React} from 'react';
import RecordForm from '../RecordForm/RecordForm';
import {connect} from 'react-redux';
import { addRecord } from '../../Actions/recordActions';
import { useNavigate } from 'react-router';
const AddRecord = (props) => {
    const navigate = useNavigate();
    return(
        <div>
         
          <RecordForm
          onSubmit={(record) => {
            props.addRecord(record)
            navigate('/');
          }
          } 
          />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecord: (data) => {dispatch(addRecord(data))}
  }
}


export default connect(null, mapDispatchToProps)(AddRecord);
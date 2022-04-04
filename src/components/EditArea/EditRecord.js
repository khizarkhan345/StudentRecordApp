import {React} from 'react';
import { editRecord } from '../../Actions/recordActions';
import {connect} from 'react-redux';
import RecordForm from '../RecordForm/RecordForm';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

const EditRecord = (props) => {
     
    let {id} = useParams();
    const navigate = useNavigate();
    return(
        <div>
        
          <RecordForm 
            record = {props.filterRecord.find((rec) => rec.id === id)}
            onSubmit = {(rec) => {
               props.editRecord(id, rec)
               navigate('/');
            }}
          />
        </div>
    )
}


const MapStateToProps = (state, props) => {
  //let {id} = useParams();
  console.log(state)
  return {
    filterRecord: state.record
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editRecord: (id, rec) => {dispatch(editRecord(id, rec))}
  }
}
export default connect(MapStateToProps, mapDispatchToProps)(EditRecord);
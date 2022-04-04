import {React} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { removeRecord } from '../../Actions/recordActions';
import './RecordList.css';

const RecordList = (props) => {
   
    const onEdit = () => {
       
        console.log("onEdit is clicked");
    }

    const onRemoveRecord = () => {
        props.removeRecord(props.record.id)
    }
    return (
        <div className='grid-container'>
         <div className='grid-item'>{props.record.firstName}</div>
         <div className='grid-item'>{props.record.lastName}</div>
         <div className='grid-item'>{props.record.email}</div>
         <div className='grid-item'>{props.record.phoneNo}</div>
         <div className='grid-item'><Link to={`/editRecord/${props.record.id}`}><button onClick={onEdit} className="editBtn">Edit</button></Link></div>
         <div className='grid-item'><button onClick={onRemoveRecord} className="dltBtn">Delete</button></div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeRecord: (id) => {dispatch(removeRecord(id))}
    }
}
export default connect(null, mapDispatchToProps)(RecordList);
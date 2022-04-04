import {React, useState} from 'react';
import './RecordForm.css';

const RecordForm = (props) => {
    const [firstName, setFirstName] = useState(props.record ? props.record.firstName:'');
    const [lastName, setLastName] =   useState(props.record ? props.record.lastName:'');
    const [email, setEmail] = useState(props.record ? props.record.email:'');
    const [phoneNo, setPhoneNo] = useState(props.record ? props.record.phoneNo:'');
    const [error, setError] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)){
          setError("Incorrect email format!")
        }
        props.onSubmit({
            firstName: firstName,
            lastName: lastName,
            email: email,
           phoneNo: phoneNo
        })
    }

    return(
        <div className='container'>
          <form onSubmit={onSubmit}>
           <div className='row'>
             <div className='col-25'>
              <label className='fname'>FirstName</label>
             </div>
             <div className='col-75'>
             <input type="text" placeholder="FirstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} required/>
             </div>
           </div>
           <div className='row'>
           <div className='col-25'>
            <label className='fname'>LastName</label>
           </div>
           <div className='col-75'>
           <input type="text" placeholder="LastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}} required />
           </div>
         </div>
         <div className='row'>
         <div className='col-25'>
          <label className='fname'>Email</label>
         </div>
         <div className='col-75'>
         <input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
         </div>
       </div>
       <div className='row'>
           <div className='col-25'>
            <label className='fname'>phoneNo</label>
           </div>
           <div className='col-75'>
           <input type="tel" placeholder="Phone No" value={phoneNo} onChange={(e) => {setPhoneNo(e.target.value)}} required />
           </div>
         </div>
         <div className='row'>
          <input type="submit" value="Submit" />
         </div>   
          </form>
          {
            error && <p className='error'>{error}</p>
          }
        </div>
    )
}

export default RecordForm;
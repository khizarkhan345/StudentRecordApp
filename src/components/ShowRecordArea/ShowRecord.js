import {React, useState, useEffect} from 'react';
import {connect} from 'react-redux';
import RecordList from '../RecordList/RecordList';
import './ShowRecord.css';
import { fetchRecord } from '../../Actions/recordActions';
import SortData from '../../Selector/SortData';
const url = 'https://jsonplaceholder.typicode.com/users/';

const ShowRecord = (props) => {
  const pageLimit = 5;
  const dataLimit = 15;
  const [pages] = useState(Math.round(props.record.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState('');
  
  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  }

 const goToPreviousPage =() => {
  setCurrentPage((page) => page - 1);
 }

 const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
 }

 const getPaginatedData = () => {
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  return props.record.slice(startIndex, endIndex);
 };

 const getPaginationGroup = () => {
  let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);

 }

 useEffect(() => {
  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('something went wrong while requesting posts');
    })
    .then((user) => {
      user.forEach((us) => {
        const data = {
          firstName: us.name.split(' ')[0],
          lastName: us.name.split(' ')[1],
          email: us.email,
          phoneNo: us.phone
        }
        props.fetchRecord(data)
      })
    })
    .catch((error) => setError(error.message));
}, []);


    return(
        <div>
         
          <div className='gcontainer'>
           <div className='g-items'>FirstName</div>
           <div className='g-items'>LastName</div>
           <div className='g-items'>Email</div>
           <div className='g-items'>PhoneNo</div>
           <div className='g-items'></div>
          </div>
          <div className='grid'>
         

            {
              getPaginatedData().map((d, idx) => (
              <RecordList 
              key = {idx}
              record = {d}
            />
            ))
          }
          
          </div>
          <div className="pagination">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`paginationItem ${currentPage === item ? 'active' : null}`}
        >
          <span>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`next ${currentPage === pages ? 'disabled' : ''}`}
      >
        next
      </button>
    </div>
    {
      error && <p>{error}</p>
    }
    {
      console.log('unsorted record', props.record)
    }
    {
      console.log('sorted record', props.sortData)
    }
    </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    record: state.record,
    sortData: SortData(state.record)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecord: (data) => {dispatch(fetchRecord(data))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowRecord);
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookedSlots = () => {

  const navigate = useNavigate();

  const [slotList, setSlotList] = useState([]);

  const fetchSlotsData = async () => {
    const res = await fetch('http://localhost:5000/slot/getall');
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setSlotList(data);
    }
  };

  useEffect(() => {
    fetchSlotsData();
  }, []);

  const getLane = (slot) => {
    if(slot >= 100 && slot <= 199){
      return 'Lane 1'
    }else if(slot >= 200 && slot <= 299){
      return 'Lane 2'
    }
  }

  const displaySlots = () => {
    return <table className='table table-dark table-striped'>
      <thead>
        <tr>
          <th>Booking id</th>
          <th>Slot</th>
          <th>Lane</th>
          <th>Booked At</th>
          <th>Booked Till</th>
          <th>Booked By</th>
          <th>User Location</th>


        </tr>
      </thead>
      <tbody>
        {
          slotList.map((slot) => (
            <tr>
              <td>{slot._id}</td>
              <td>{slot.slot}</td>
              <td>{getLane(slot.slot)}</td>
              <td>{new Date(slot.entry).toLocaleDateString()} {new Date(slot.entry).toLocaleTimeString()}</td>
              <td>{new Date(slot.exit).toLocaleDateString()} {new Date(slot.exit).toLocaleTimeString()}</td>
              <td>{slot.username}</td>
              <td>{slot.userAddress}</td>




            </tr>
          ))
        }
      </tbody>
    </table>
  }

  return (
    <div>
      <h1 className='text-center'>Booked slots</h1>
      <hr />
      <div className='container'>
        {displaySlots()}
      </div>
    </div>
  )
}

export default BookedSlots;
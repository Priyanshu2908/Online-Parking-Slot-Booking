import React, { useEffect, useState } from 'react'
import slotsData from './dummyData';

const Slotbooking = () => {

  const [bookedSlots, setBookedSlots] = useState([]);

  const displaySlots = () => {
    return slotsData.map((lane) => (
      <div className='col-md-6'>
        <div className="card">
          <div className="card-body">
            <h3 className='text-center'>{lane.name}</h3>

            <div className="row p-4">
              {
                lane.slots.map((slot) => (
                  <div className="col-2">
                    <input
                      className="form-check-input mb-4"
                      type="checkbox"
                      id="inlineCheckbox3"
                      defaultValue="option3"
                    />
                  </div>
                ))
              }
            </div>

          </div>
        </div>
      </div>
    ))
  }

  const fetchSlotData = async () => {
    const res = await fetch('http://localhost:5000/slot/getall');
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setBookedSlots(data);
  }

  useEffect(() => {
    fetchSlotData();
  }, [])



  return (

    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">

      <div className='row'>
        {displaySlots()}
      </div>
          </div>
        </div>
      </div>

      <div className='card'>

      <>
        <h1
          style={{
            fontWeight: "bold",
            border: "2px solid black",
            textAlign: "center",
            backgroundColor: "blueviolet",
            borderRadius: 10
          }}
        >
          Slot Booking
        </h1>

        <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
          Enter Vehicle Number*
        </label>


        <input
          style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
          type="text"
        />


        <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
          Entry*
        </label>


        <input
          style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
          type="date&time"
        />


        <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
          Exit*
        </label>


        <input
          style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
          type="date&time"
        />


        <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
          Place*
        </label>


        <input
          style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
          type="text"
        />
        <>
          <br />
          <button className='btnp btn-Danger'>Submit</button>

        </>
        <hr />
        





      </>



    </div>
    </div>
  )
}

export default Slotbooking
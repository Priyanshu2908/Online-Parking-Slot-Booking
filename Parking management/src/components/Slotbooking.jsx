import React, { useEffect, useState } from 'react'
import slotsData from './dummyData';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';

const Slotbooking = () => {

  const [bookedSlots, setBookedSlots] = useState([]);
  const [selSlot, setSelSlot] = useState(null);

  const slotForm = useFormik({
    initialValues: {
      username: '',
      vehicle: '',
      entry: new Date(),
      exit: new Date(),
      userAddress: String,
    },
    onSubmit: async (values) => {
      values.slot = selSlot;
      console.log(selSlot);
      console.log(values);
      // return;
      const res = await fetch('http://localhost:5000/slot/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await res.json();
      console.log(data);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Slot Booked Successfully',
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }

    }
  })


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
                      checked={selSlot === slot || bookedSlots.includes(slot)}
                      onChange={(e) => {
                        if(bookedSlots.includes(slot)) return;
                        console.log(e.target.checked);
                        if(e.target.checked){
                          setSelSlot(slot)
                        }else{
                          setSelSlot(null)
                        }
                      }}
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
    setBookedSlots(data.map(slotData => slotData.slot));
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

          <div className="col-md-6">
            <div className='card'>

              <form onSubmit={slotForm.handleSubmit}>

              
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
                  Enter Name*
                </label>


                <input
                  style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
                  type="text"
                  name="username"
                  onChange={slotForm.handleChange}
                  value={slotForm.values.username}
                />

                <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
                  Enter Vehicle Number*
                </label>


                <input
                  style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
                  type="text"
                  name="vehicle"
                  onChange={slotForm.handleChange}
                  value={slotForm.values.vehicle}
                />


                <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
                  Entry*
                </label>


                <input
                  style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
                  type="datetime-local"
                  name='entry'
                  onChange={slotForm.handleChange}
                  value={slotForm.values.entry}
                />


                <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
                  Exit*
                </label>


                <input
                  style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
                  type="datetime-local"
                  name='exit'
                  onChange={slotForm.handleChange}
                  value={slotForm.values.exit}
                />


                <label style={{ marginLeft: "45%", fontWeight: "bold" }} htmlFor="">
                  Loacation
                </label>


                <input
                  style={{ padding: 4, marginLeft: "44%", marginRight: "44%", borderRadius: 5 }}
                  type="text"
                  name='userAddress'
                  onChange={slotForm.handleChange}
                  value={slotForm.values.userAddress}
                />
                <>
                  <br />
                  <button style={{marginLeft: 380, marginTop:32}} className='btn btn-primary'>Submit</button>
                </>
                </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Slotbooking
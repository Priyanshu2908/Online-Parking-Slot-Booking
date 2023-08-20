import React from 'react'


const ContactUs = () => {
  return (
    
    <div className="my-container">
    <div className="item">
      <div className="contact">
        <div className="first-text">Let's get in touch</div>
        <img
          src="https://vectorforfree.com/wp-content/uploads/2020/03/Working_Men_VectorForFree.png"
          alt=""
          className="image"
        />
        <div className="social links">
          <span className="secnd text" style={{ fontSize: "large" }}>
            Connect with us:
          </span>
          <ul className="social-media">
            <li>
              <a href="#">
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-youtube" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bx bxl-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="submit-form">
        <h4 className="third-text">Contact Us</h4>
        <form style={{ padding: "0 50px" }}>
          <div className="input-box">
            <input type="text" className="input" placeholder="Name" required="" />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <input type="email" className="input" placeholder="Email" />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <input type="tel" className="input" placeholder="Phone" />
            <label htmlFor="" />
          </div>
          <div className="input-box">
            <textarea
              name=""
              className="input"
              placeholder="Message"
              required=""
              id="message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <label htmlFor="" />
          </div>
          <input type="submit" className="Submit" />
        </form>
      </div>
    </div>
  </div>
  
  )
}


export default ContactUs
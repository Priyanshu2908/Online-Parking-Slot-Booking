import React from 'react'

const AboutUs = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Us - Parking Management</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n  }\n  .header {\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    padding: 10px;\n  }\n  .content {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n  }\n"
    }}
  />
  <div className="header">
    <h1>Parking Management</h1>
  </div>
  <div className="content">
    <h2>About Us</h2>
    <p>
      Welcome to Parking Management! We are dedicated to providing efficient and
      convenient parking solutions for businesses, residential complexes, and
      public spaces. Our team is committed to ensuring smooth parking operations
      and improving the overall parking experience for both customers and
      property owners.
    </p>
    <p>
      With years of experience in the industry, we understand the challenges
      associated with parking management. Our services include advanced parking
      systems, smart payment solutions, real-time occupancy tracking, and
      customer support to address any concerns.
    </p>
    <p>
      At Parking Management, we strive to innovate and adapt to the changing
      needs of urban environments. We believe that effective parking management
      contributes to reduced congestion, increased customer satisfaction, and
      improved utilization of parking spaces.
    </p>
    <p>
      Contact us today to learn more about our services and how we can help you
      optimize your parking facilities.
    </p>
    <h3>Contact Information</h3>
    <p>Email: priyanshuchaubey29@.com</p>
    <p>Phone: 7007351684</p>
  </div>
</>

  )
}

export default AboutUs
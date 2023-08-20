import React from 'react'

const Home = () => {
  return (
   <div className='cardf'>
     <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Parking Management System</title>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  body {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n  }\n  header {\n    background-color: #333;\n    color: #fff;\n    text-align: center;\n    padding: 10px;\n  }\n  nav {\n    background-color: #555;\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n  }\n  nav a {\n    color: #fff;\n    text-decoration: none;\n    margin: 0 20px;\n  }\n  .hero {\n    background-image: url('parking-hero.jpg');\n    background-size: cover;\n    background-position: center;\n    color: #fff;\n    text-align: center;\n    padding: 100px 0;\n  }\n  .intro {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 20px;\n    text-align: center;\n  }\n"
        }}
      />
      <header>
        <h1>Parking Management System</h1>
        <p>Your Solution for Efficient Parking Services</p>
      </header>

      <section className="hero">
        <h2>Welcome to Our Parking System</h2>
        <p>
          Book your parking slot conveniently online and enjoy hassle-free parking
          services.
        </p>
        <a href="http://localhost:3000/slotbooking" className="cta-button" style={{color:'white'}}>
          Book Now
        </a>
      </section>
      <section className="intro">
        <h3 style={{color:'white'}}>About Us</h3>
        <p style={{color:'white'}}>
          We provide top-notch parking management solutions to optimize space
          utilization and enhance user experience.
        </p>
      </section>
    </>
   </div>

  )
}

export default Home;  
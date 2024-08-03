import React from 'react'

export default function Footer() {
  return (
    <footer className="text-white mt-5 p-4 text-center bottom-0 " style={{bottom: '0',backgroundColor: '#41a3c6'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a company dedicated to providing the best products and
              services to our customers.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>
              Email: info@example.com
              <br />
              Phone: +1 234 567 890
            </p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

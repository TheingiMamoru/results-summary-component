import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ReactSVG } from 'react-svg'

const App = () => {
  return (
    <div className='container-fluid'>
      <div className='main d-flex align-items-center justify-content-center'>
        <div className="card mb-3 rounded-5 border-0 shadow-lg ">
          <div className="row g-0">
            <div className="card1 col-sm-6 text-center rounded-5 ">
              <div className="card-body">
                <h3 className="card-title txt-secondary">Your Result</h3>
                <div className='score mx-auto d-flex flex-column align-items-center justify-content-center border-0 rounded-circle shadow-lg  '>
                  <h3 className="card-text fw-bold txt-primary ">76</h3>
                  <p className="card-text txt-secondary">of 100</p>
                </div>
                <div className=''>
                  <h3 className="card-title txt-primary">Great</h3>
                  <p className="card-text">
                    <small className="txt-primary ">
                      You score higher than 65% of the people who have taken these tests.
                    </small>
                  </p>
                </div>
              </div>
            </div>
            <div className=" card2 col-sm-6 p-2">
              <div className="card-body">
                <h3 className="card-title my-3 fw-bold">Summary</h3>
                <ul className="list-group list-group-flush d-flex flex-column gap-4 my-5">
                  <li className="list-group-item d-flex justify-content-between align-items-center border rounded-3 bg-light-red">
                    <div className='d-flex align-items-center gap-1'>
                      <ReactSVG src="./src/assets/images/icon-reaction.svg" />
                      <p className='text-center m-0 txt-red'>Reaction</p>
                    </div>
                    <div>
                      <span className='fw-bold'>80 </span> <span className='txt-dark-gray'> / 100</span>  
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border rounded-3 bg-light-yellow">
                    <div className='d-flex align-items-center gap-1'>
                      <ReactSVG src="./src/assets/images/icon-memory.svg" />
                      <p className='text-center m-0 txt-yellow'>Memory</p>
                    </div>
                    <div>
                      <span className='fw-bold'>92 </span> <span className='txt-dark-gray'> / 100</span>  
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border rounded-3 bg-light-green">
                    <div className='d-flex align-items-center gap-1'>
                      <ReactSVG src="./src/assets/images/icon-verbal.svg" />
                      <p className='text-center m-0 txt-green'>Verbal</p>
                    </div>
                    <div>
                      <span className='fw-bold'>61 </span> <span className='txt-dark-gray'> / 100</span>  
                    </div>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border rounded-3 bg-light-lavender">
                    <div className='d-flex align-items-center gap-1'>
                      <ReactSVG src="./src/assets/images/icon-visual.svg" />
                      <p className='text-center m-0 txt-blue'>Visual</p>
                    </div>
                    <div>
                      <span className='fw-bold'>72 </span> <span className='txt-dark-gray'> / 100</span>  
                    </div>
                  </li>
                </ul>
                <div className='d-grid '>
                  <button className='main-btn bg-dark-gray border-0 fw-bold p-3 txt-primary rounded-5'>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { ReactSVG } from 'react-svg'
import axios from 'axios'

const App = () => {
  const [results, setResults] = useState([])

  const getResults = async() => {
    const {data} = await axios.get('https://results-summary-api-ashen.vercel.app/results')
    setResults(data)
    // console.log(data);
  }
  // console.log(results);

  useEffect(()=> {
    getResults()
  },[])

  //To Calculate Average Result
  const totalResult = results?.reduce((pre, cur) => {
    return pre + cur.score
  },0)
  console.log(totalResult);

  const avgResult = totalResult / results?.length
  console.log(avgResult);
  

  return (
    <div className='container-fluid'>
      <div className='main d-flex align-items-center justify-content-center'>
        <div className="card mb-3 rounded-5 border-0 shadow-lg ">
          <div className="row g-0">
            <div className="card1 col-sm-6 text-center rounded-5 ">
              <div className="card-body">
                <h1 className="card-title txt-secondary h3">Your Result</h1>
                <div className='score mx-auto d-flex flex-column align-items-center justify-content-center border-0 rounded-circle shadow-lg  '>
                  <h2 className="card-text fw-bold txt-primary h3 ">{avgResult?.toFixed(0)}</h2>
                  <p className="card-text txt-secondary">of 100</p>
                </div>
                <div className=''>
                  <h2 className="card-title txt-primary h3">Great</h2>
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
                <h1 className="card-title my-3 fw-bold h3">Summary</h1>
                <ul className="list-group list-group-flush d-flex flex-column gap-4 my-5">
                  {
                    results?.map(result => (
                      <li key={result?.id} className={`list-group-item d-flex justify-content-between align-items-center border rounded-3 ${result?.bgColor}`}>
                        <div className='d-flex align-items-center gap-1'>
                          <ReactSVG src={`${result?.icon}`} />
                          <p className={`text-center m-0 ${result?.textColor}`}>{result?.category}</p>
                        </div>
                        <div>
                          <span className='fw-bold'>{result?.score } </span> <span className='txt-dark-gray'> / 100</span>  
                        </div>
                      </li>
                    ))
                  }
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
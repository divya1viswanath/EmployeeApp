import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [empid,setEmpid]=useState("")
    
const subData =() => {
    const data={"empid":empid}
    console.log(data)
}
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">EMP ID</label>                            
                            <input onChange={(e)=>{setEmpid(e.target.value)}} type="text" name="" id="" class="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={subData} value="search" className="btn btn-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
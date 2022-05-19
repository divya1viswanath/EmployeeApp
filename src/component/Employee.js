import React, { useState } from 'react'
import Header from './Header'

const Employee = () => {
    var [empid,setEmpid]=useState("")
    var [empname,setEmpname]=useState("")
    var [desig,setDesig]=useState("")
    var [sal,setsal]=useState("")
    var [comp,setcomp]=useState("")
    var [dob,setdob]=useState("")
    var [email,setemail]=useState("")

const subData =() => { 
    const data={"empid":empid,"empname":empname,"desig":desig,"sal":sal,"comp":comp,"comp":comp,"dob":dob,"email":email}
    console.log(data)
}

  return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">                                                                              
                <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                    
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">EMP ID</label>
                            <input onChange={(e)=>{setEmpid(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">EMP NAME</label>
                            <input onChange={(e)=>{setEmpname(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">DESIGNATION </label>
                            <input onChange={(e)=>{setDesig(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">SALARY</label>
                            <input onChange={(e)=>{setsal(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" className="form-label">COMPANY NAME</label>
                            <input onChange={(e)=>{setcomp(e.target.value)}} type="text" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">DOB</label>
                            <input onChange={(e)=>{setdob(e.target.value)}} type="date" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" className="form-label">E-MAIL</label>
                            <input onChange={(e)=>{setemail(e.target.value)}} type="email" name="" id="" className="form-control"/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" type='reset'>CLEAR</button>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button onClick={subData} value="register" className="btn btn-success">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Employee
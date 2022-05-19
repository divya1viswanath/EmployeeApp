import React from 'react'
import Header from './Header'

const Viewall = () => {
    var viewlist=[
        {"Employee ID":101,
          "Employee Name":"Anju",
          "Designation":"HR",
          "Salary":30000,
          "Company Name":"IBM",
          "DOB":1998-5-5,
          "Email":"abcd12@gmail.com"
        },
        {"Employee ID":102,
          "Employee Name":"Anu",
          "Designation":"staff",
          "Salary":10000,
          "Company Name":"TCS",
          "DOB":1998-4-5,
          "Email":"abbb12@gmail.com"
        },
        {"Employee ID":103,
          "Employee Name":"Sanju",
          "Designation":"Software Engineer",
          "Salary":25000,
          "Company Name":"INFOSYS",
          "DOB":1998-5-5,
          "Email":"abcd12@gmail.com"
        },
        {"Employee ID":104,
          "Employee Name":"Binu",
          "Designation":"Asst.Engineer",
          "Salary":20000,
          "Company Name":"UST GOLBAL",
          "DOB":1998-5-5,
          "Email":"abcd12@gmail.com"
        },
        {"Employee ID":105,
          "Employee Name":"Vidhu",
          "Designation":"Staff",
          "Salary":15000,
          "Company Name":"TCS",
          "DOB":1998-5-5,
          "Email":"abcd12@gmail.com"
    
        }
    ]
  return (
    <div>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            
                <table class="table table-primary table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Salary</th>
                        <th>Company Name</th>
                        <th>DOB</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewlist.map((value,key)=>{
                        return <tr>
                        <td>{value['Employee ID']}</td>
                        <td>{value['Employee Name']}</td>
                        <td>{value.Designation}</td>
                        <td>{value.Salary}</td>
                        <td>{value['Company Name']}</td>
                        <td>{value.DOB}</td>
                        <td>{value.Email}</td>
                        </tr>
                        })}
                        
                        
                        
                    </tbody>
                    </table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>
    </div>
  )
}

export default Viewall
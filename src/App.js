import React from 'react'

import Userimg from "./circle-user-solid.svg" 


const App = () => {
  return (
    <>
  <input type="checkbox" id="nav-toggle" />
  <div class="sidebar">
     <div class="sidebar-brand">
         <h2><span class= "lab la-accessible-icon"></span> <span>GestuWheel</span></h2>
     </div>
     
     <div class="sidebar-menu">
         <ul>
             <li>
                 <a href=" " class="active"><span class="las la-atom"></span><span>Dashboard</span></a>
             </li>
             <li>
                 <a href=" " ><span class="las la-user-injured"></span><span>Patient Registration</span></a>
             </li>
             <li>
                 <a href=" " ><span class="las la-info"></span><span>Patient Information</span></a>
             </li>
             
             </ul>
     </div>
    </div>

<div class="main-content">
     <header>
          <h2>
                    <label for="nav-toggle">
                        <span class="las la-bars"></span>
                     </label>
                     
           Dashboard
          </h2>
      <div class="search-wrapper">
        <span class="las la-search"></span>
        <input type="search" placeholder="Search here"/>
       </div>
       <div class="user-wrapper">
            <img src={Userimg} width="30px" height="30px" alt=""/>
            <div>
                    <h4> abc</h4>
                    <small> Admin</small>
            </div>
          </div>
      </header>
      <main>
                <div class="cards">
                    <div class="card-single">
                        <div>
                           
                            <h1>10</h1>
                            <span>Patients</span>
                        </div>
                        <div>
                            <span class="las la-user-injured"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h1>20</h1>
                            <span>Nurses</span>
                        </div>
                        <div>
                            <span class="las la-user-nurse"></span>
                        </div>
                    </div>
                    <div class="card-single">
                        <div>
                            <h1>5</h1>
                            <span>Wheelchairs</span>
                        </div>
                        <div>
                            <span class="las la-wheelchair"></span>
                        </div>
                    </div>
                </div>
                
                <div class="recent-grid">
                    <div  class="patients">
                        <div class="card">
                            <div class="card-header">
                                <h3>Patients</h3>
                                <button> See All <span class=" las la-arrow-right"></span> </button>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>SL No:</td>
                                                <td>Patient's Name</td>
                                                <td>Wheelchair No:</td>
                                                <td>Bed No:</td>
                                                
                                            </tr>
                                         </thead>
                                         <tbody>
                                             <tr>
                                                <td>01</td>
                                                <td>abc</td>
                                                <td>05</td>
                                                <td>02</td>
                                                
                                             </tr>
                                         </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class=" Check-up">
                        <div class="card">
                            <div class="card-header">
                                <h3>Check-up Schedule</h3>
                                <button> See All <span class=" las la-arrow-right"></span></button>
                            </div>
                            <div class="card-body">
                                <div class="Time">
                                    <div class="info">
                                        <span class="las la-user-circle"></span>
                                        <div>
                                            <h4>huji</h4>
                                            
                                        </div>
                                    </div>
                                    <div class="sign">
                                    <span class="las la-clock"></span>
                                    

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                 
                      
                        
                            
                             
                      

                    
            

                
        </main>
    </div>
    </>     
  )
}

export default App
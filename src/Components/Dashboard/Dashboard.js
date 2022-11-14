import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
    return (
        //https:cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css
        <>
        <input type={'checkbox'} name="" id='sidebar-toggle'/>
            <div className='sidebar'>
                <div className='sidebar-header'>
                    <h3 className='brand'>
                        <span className='ti-unlink'></span>
                     <span>easywire</span>
                        </h3>
                        <label htmlFor="sidebar-toggle" className='ti-menu-alt'></label>
                </div>
                <div className='sidebar-menu'>
                    <ul>
                        <li>
                            <a href=''>
                                <span className='ti-home'></span>
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-face-smile'></span>
                                <span>Team</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-agenda'></span>
                                <span>Tasks</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-clipboard'></span>
                                <span>Leaves</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-folder'></span>
                                <span>Projects</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-time'></span>
                                <span>Timesheet</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-book'></span>
                                <span>Contacts</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className='ti-settings'></span>
                                <span>Account</span>
                            </a>
                        </li>



                    </ul>


                </div>
            </div>
           <div className='main-content'>
            <header>
                <div className='search-wrapper'>
                    <span className='ti-search'></span>
                    <input type="search" placeholder='Search '/>
                </div>
                <div className='social-icons'>
                   <span className='ti-bell'></span>
                   <span className='ti-comment'></span>
                   <div></div>

                </div>
            </header>
            <main>
                <h2 className='dash-title'>Overview</h2>
                <div className='dash-cards'>
                   <div className='card-single'>
                    <div className='card-body'>
                    <span className='ti-briefcase'></span>
                    <div>
                        <h5>Account Balance</h5>
                        <h4>$500000</h4>
                    </div>
                    </div>
                    <div className='card-footer'>
                        <a href=''> View All</a>
                    </div>
                   </div>
                   <div className='card-single'>
                    <div className='card-body'>
                    <span className='ti-reload'></span>
                    <div>
                        <h5>Pending</h5>
                        <h4>$19,500.90</h4>
                    </div>
                    </div>
                    <div className='card-footer'>
                        <a href=''> View All</a>
                    </div>
                   </div>
                   <div className='card-single'>
                    <div className='card-body'>
                    <span className='ti-check-box'></span>
                    <div>
                        <h5>Processed</h5>
                        <h4>$34,0000.7</h4>
                    </div>
                    </div>
                    <div className='card-footer'>
                        <a href=''> View All</a>
                    </div>
                   </div>
                </div>
                <section className='recent'>
                    <div className='activity-grid'>
                    <div className='activity-card'>
                        <h3>Recent Activity</h3>
                        <div className='table-responsive'>
                         <table>
                            <thead>
                                <tr>
                                    <th>Project</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Team</th>
                                    <th>Status</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>App Developement</td>
                                    <td>15 Aug,2022</td>
                                    <td>23 Dec,2022</td>
                                    <td className='td-team'>
                                        <div className='img-1'></div>
                                        <div className='img-2'></div>
                                        <div className='img-3'></div>


                                    </td>
                                    <td>
                                        <span className='badge success'>Success</span>
                                    </td>
                                      
                                </tr>
                                <tr>
                                    <td>Frontend</td>
                                    <td>15 Aug,2022</td>
                                    <td>23 Dec,2022</td>
                                    <td className='td-team'>
                                        <div className='img-1'></div>
                                        <div className='img-2'></div>
                                        <div className='img-3'></div>


                                    </td>
                                    <td>
                                        <span className='badge warning'>Processing</span>
                                    </td>
                                      
                                </tr>

                                <tr>
                                    <td>Web Design</td>
                                    <td>15 Aug,2022</td>
                                    <td>23 Dec,2022</td>
                                    <td className='td-team'>
                                        <div className='img-1'></div>
                                        <div className='img-2'></div>
                                        <div className='img-3'></div>


                                    </td>
                                    <td>
                                        <span className='badge success'>Success</span>
                                    </td>
                                      
                                </tr>

                                <tr>
                                    <td>API Developement</td>
                                    <td>15 Aug,2022</td>
                                    <td>23 Dec,2022</td>
                                    <td className='td-team'>
                                        <div className='img-1'></div>
                                        <div className='img-2'></div>
                                        <div className='img-3'></div>


                                    </td>
                                    <td>
                                        <span className='badge warning'>Processing</span>
                                    </td>
                                      
                                </tr>

                                <tr>
                                    <td>Database </td>
                                    <td>15 Aug,2022</td>
                                    <td>23 Dec,2022</td>
                                    <td className='td-team'>
                                        <div className='img-1'></div>
                                        <div className='img-2'></div>
                                        <div className='img-3'></div>


                                    </td>
                                    <td>
                                        <span className='badge success'>Success</span>
                                    </td>
                                      
                                </tr>

                            </tbody>
                         </table>
                         </div>
                         </div>
                         <div className='summary'>
                            <div className='summary-card'>
                               <div className='summary-single'>
                                   <span className='ti-id-badge'></span>
                                <div>
                                    <h5>196</h5>
                                    <small>Number of Staff</small>
                                </div>
                               </div>
                               <div className='summary-single'>
                                   <span className='ti-calendar'></span>
                                <div>
                                    <h5>16</h5>
                                    <small>Number of Leaves</small>
                                </div>
                               </div>
                               <div className='summary-single'>
                                   <span className='ti-face-smile'></span>
                                <div>
                                    <h5>12</h5>
                                    <small>Profile Update request</small>
                                </div>
                               </div>
                            </div>
                            <div className='bday-card'>
                                   <div className='bday-flex'>
                                   <div className='bday-img'> </div>
                                  <div className='bday-info'>
                                  <h5>Dwayne F. Sanders</h5>
                                  <small>Birthday Today</small>
                                  </div>
                                   </div>
                                  <div className='text-center'>
                                    <button><span className='ti-gift'></span> Wish Them</button>
                                  </div>
                                  
                            </div>
                         </div>
                    </div>

                </section>
            </main>
            </div> 
        </>
    )
}

export default Dashboard;
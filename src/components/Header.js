import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
      <div className='sticky top-0 z-50'>
          <div className=''>
              <div className="navbar bg-base-100 ">
                  <div className="navbar-start">
                      <a className="btn btn-ghost text-xl mx-[100px]">
                          <Link to='/'>
                              NGO Cor
                          </Link>   
                      </a>
                  </div>
                  <div className="navbar-center hidden lg:flex bg-transparent mx-[100px]">
                      <ul className="menu menu-horizontal px-1">
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">
                                  <Link to="/">
                                      Home
                                  </Link>
                              </div>
                          </li>
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">Who we are</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                  <li><a>
                                      <Link to="/introduction">
                                          Introduction
                                      </Link>
                                      
                                  </a></li>
                                  <li><a>
                                      <Link to="/organizationalStructure">
                                          Organizational Structure
                                      </Link>
                                  </a></li>
                                  <li><a>
                                      <Link to='/advisorboard'>
                                          Advisor Board
                                      </Link>
                                      
                                  </a></li>
                                  <li><a>Central Executive Commitee</a></li>
                                  <li><a>Province Commitees</a></li>
                                  <li><a>District Committee</a></li>
                                  <li><a>Local Level Coordination Commitees</a></li>
                                  <li><a>Staff Members</a></li>
                                  <li><a>Our History</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">MEDIA AND NOTICES</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                  <li><a>Introduction</a></li>
                                  <li><a>Organizational Structure</a></li>
                                  <li><a>Advisor Board</a></li>
                                  <li><a>Central Executive Commitee</a></li>
                                  <li><a>Province Commitees</a></li>
                                  <li><a>District Committee</a></li>
                                  <li><a>Local Level Coordination Commitees</a></li>
                                  <li><a>Staff Members</a></li>
                                  <li><a>Our History</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">MEMBERSHIP</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                  <li><a>Introduction</a></li>
                                  <li><a>Organizational Structure</a></li>
                                  <li><a>Advisor Board</a></li>
                                  <li><a>Central Executive Commitee</a></li>
                                  <li><a>Province Commitees</a></li>
                                  <li><a>District Committee</a></li>
                                  <li><a>Local Level Coordination Commitees</a></li>
                                  <li><a>Staff Members</a></li>
                                  <li><a>Our History</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">PROGRAMMS AND PRIORITIES</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                  <li><a>Introduction</a></li>
                                  <li><a>Organizational Structure</a></li>
                                  <li><a>Advisor Board</a></li>
                                  <li><a>Central Executive Commitee</a></li>
                                  <li><a>Province Commitees</a></li>
                                  <li><a>District Committee</a></li>
                                  <li><a>Local Level Coordination Commitees</a></li>
                                  <li><a>Staff Members</a></li>
                                  <li><a>Our History</a></li>
                              </ul>
                          </li>
                          <li className="dropdown">
                              <div tabIndex={0} className="p-2 cursor-pointer m-1">PUBLICATION</div>
                              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                  <li><a>Introduction</a></li>
                                  <li><a>Organizational Structure</a></li>
                                  <li><a>Advisor Board</a></li>
                                  <li><a>Central Executive Commitee</a></li>
                                  <li><a>Province Commitees</a></li>
                                  <li><a>District Committee</a></li>
                                  <li><a>Local Level Coordination Commitees</a></li>
                                  <li><a>Staff Members</a></li>
                                  <li><a>Our History</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </div> 
    </div>
  )
}

export default Header
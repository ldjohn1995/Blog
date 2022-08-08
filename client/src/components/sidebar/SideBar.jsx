import './sidebar.css'

import React from 'react'

export default function SideBar () {
  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBarTitle'> ABOUT ME </span>
        <img className='sideBarImg' src='' alt='' />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate hic nostrum suscipit doloribus dignissimos.</p>
      </div>
      <div className='sideBarItem'>
        <span className='sideBarTitle'> CATERGOIES </span>
        <ul className='sideBarCategory'>
          <li className='sidebarCategoryList'> Tech </li>
          <li className='sidebarCategoryList'> Market </li>
          <li className='sidebarCategoryList'> Entertain </li>
          <li className='sidebarCategoryList'> Style </li>
          <li className='sidebarCategoryList'> Food</li>
          <li className='sidebarCategoryList'> Fitness</li>
        </ul>
      </div>

      <div className='sideBarItem'>
        <span className='sideBarTitle'> FOLLOW US </span>
        <div className='sideBarIcons'>
          <i className='sideBarIcon fa-brands fa-facebook'> </i>
          <i className='sideBarIcon fa-brands fa-twitter'> </i>
          <i className='sideBarIcon fa-brands fa-pinterest'> </i>
          <i className='sideBarIcon fa-brands fa-instagram-square'> </i>
        </div>
      </div>

    </div>
  )
}

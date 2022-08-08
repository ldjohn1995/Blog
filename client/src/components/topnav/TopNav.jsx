
import './topnav.css'
import { Link } from 'react-router-dom'

export default function Nav () {
  const user = true
  return (
    <div className='navigtaion'>
      <div className='topLeft'>
        <i className=' navIcons fa-brands fa-linkedin-in'> </i>
        <i className=' navIcons fa-brands fa-twitter'> </i>
        <i className=' navIcons fa-brands fa-facebook-f'> </i>
        <i className=' navIcons fa-brands fa-github-alt'> </i>
      </div>
      <div className='topCenter'>
        <ul div className='navList'>
          <li className='navListItem'>
            <Link className='link' to='/Home'> Home</Link>
          </li>
          <li className='navListItem'>
            <Link className='link' to='/about'>About</Link>
          </li>
          <li className='navListItem'>
            <Link className='link' to='/Contact'>Contact</Link>
          </li>
          <li className='navListItem'>
            <Link className='link' to='write'>Write</Link>
          </li>
          <li className='navListItem'>
            {user && 'Logout'}
          </li>
        </ul>
      </div>
      <div className='topRight'>
        {user
          ? (
            <img
              className='navImg'
              src='https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/273556029_1839445916246764_4612646148757396819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=GTToz1Z40A4AX9FmwOh&_nc_ht=scontent-ort2-2.xx&oh=00_AT-7fUM4eQRJKzdiyNJ6xwJas4d1tkYE1xJmlf4JlWEI3A&oe=62A03378' alt=''
            />
          ) : (
            <ul className='navList'>
              <li className='navListItem'>
                <Link className='link' to='SignUP'>signup</Link>
              </li>
              <li className='navListItem'>
                <Link className='link' to='write'>login</Link>
              </li>
            </ul>
          )}
      </div>
    </div>
  )
}

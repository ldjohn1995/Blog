import './setting.css'
import SideBar from '../../components/sidebar/SideBar'

export default function Setting () {
  return (
    <div className='setting'>
      <div className='settingWrapper'>
        <h1> Account </h1>
        <form className='settingForm'>
          <div className='settingPP'>
            <img
              src='https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/273556029_1839445916246764_4612646148757396819_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EnaYUnZudeYAX8yjjr2&_nc_ht=scontent-ort2-1.xx&oh=00_AT9G2R4YhlYLDbgF1fxSro5WtLwvnSaoiOOW2-1SaDhP1Q&oe=62E175B8'
              alt=''
            />
            <div className='settingTitle'>
              <label for='fileInput'>
                <span className='updateB'> date</span>
              </label>
              <input type='file' id='fileInput' />
              <button type='button' className='remove'> remove </button>
            </div>
          </div>
          <div className='UpdateInfo'>
            <input type='text' className='name' placeholder='Name' />
            <input type='email' className='email' placeholder='email' />
            <input type='password' className='password' placeholder='password' />
          </div>
          <button className='button'> UPDATE</button>

        </form>
      </div>
      <SideBar />
    </div>
  )
}

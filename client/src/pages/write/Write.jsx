import React from 'react'
import './write.css'

export default function Write () {
  return (
    <div className='write'>
      <div className='writeImgWrapper'>
        <img
          src='https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/256764429_10222368307450556_7068164082741233164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CCsbL9alh3cAX8-9d8-&_nc_ht=scontent-ort2-2.xx&oh=00_AT8mFg5C3zFidKCXEvAu5J3RjywGhydX_nGAusXlm4E8sA&oe=62A54BC1'
          alt=''
          className='writeImg'
        />
      </div>
      <form className='writeFrom'>
        <div className='writeGroup'>
          <label for='myfile'> <i class='fa-solid fa-plus'> </i>  </label>
          <input type='file' id='myfile' />
          <label for='title' />
          <input type='text' className='title' placeholder='Title' />
        </div>
        <div className='writeGroup'>
          <textarea
            className='writeStory '
            placeholder='tell your story!'
            rows='10'
            cols='33'
          />
        </div>
        <button type='button' className='publish'> Publish </button>
      </form>
    </div>
  )
}

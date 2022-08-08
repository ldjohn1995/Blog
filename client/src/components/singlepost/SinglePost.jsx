import React from 'react'
import './singlepost.css'

export default function SinglePost () {
  return (
    <div className='singlepost'>
      <div className='singlePostWrapper'>
        <img
          src='https://scontent-ort2-2.xx.fbcdn.net/v/t39.30808-6/256764429_10222368307450556_7068164082741233164_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CCsbL9alh3cAX8-9d8-&_nc_ht=scontent-ort2-2.xx&oh=00_AT8mFg5C3zFidKCXEvAu5J3RjywGhydX_nGAusXlm4E8sA&oe=62A54BC1'
          alt=''
          className='singlePostImg'
        />
        <div className='singlePostTitle'>
          Lorem ipsum dolor sit amor.
          <div className='singlePostEdit'>
            <i className=' singlePostIcon fa-solid fa-pen-to-square'> </i>
            <i className=' singlePostIcon fa-solid fa-trash-can'> </i>
          </div>
        </div>
        <div className='singlePostAuthor'>
            Author: Lasean
        </div>
        <div className='singlePostDate'>
          <p> 1 Hour ago</p>
        </div>
        <div className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolorem consequuntur esse quia dolores commodi aut, ea, soluta corrupti nesciunt obcaecati magnam sequi dicta! Dolorem blanditiis consequatur mollitia fuga obcaecati.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure expedita similique inventore facere! Cumque rem, tempora voluptatum dolorum placeat mollitia recusandae culpa quam reprehenderit! Aperiam, possimus distinctio. Porro, voluptate reiciendis!
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, laboriosam exercitationem? Assumenda voluptatibus iure aperiam quaerat dignissimos culpa iusto omnis amet magni blanditiis animi quod enim nobis, nisi placeat illum?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis dolorem obcaecati, illum dignissimos voluptate qui repellendus cupiditate! Pariatur sunt fugit vero fugiat aliquid autem. Ratione assumenda ab excepturi tenetur vel!
        </div>
      </div>
    </div>
  )
}

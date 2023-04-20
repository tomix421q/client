const Post = () => {
  return (
    <>
      {/* post1 */}
      <div className='post'>
        <div className='image'>
          <img
            src='https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg'
            alt='img1'
          />
        </div>
        <div className='texts'>
          <h2>The passage experienced</h2>
          <p className='info'>
            <a className='author'>Dawid Paszko</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className='summary'>
            Today it's seen all around the web; on templates, websites, and
            stock designs. Use our generator to get your own, or read on for the
            authoritative history of lorem ipsum.
          </p>
        </div>
      </div>
      {/* */}
    </>
  )
}
export default Post

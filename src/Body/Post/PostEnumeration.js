
import PostBody from './PostContent/PostBody';
import PostHeader from './PostContent/PostHeader';
import './PostEnumeration.css'



function PostEnumeration() {


    let list = [

    <div className='Post'>
        <PostHeader/>
        <PostBody/>
        <div className='line'></div>
      </div>,

<div className='Post'>
<PostHeader/>
<PostBody/>
<div className='line'></div>
</div>,
<div className='Post'>
          <PostHeader/>
          <PostBody/>
          <div className='line'></div>
        </div>,
        <div className='Post'>
        <PostHeader/>
        <PostBody/>
        <div className='line'></div>
      </div>,
<div className='Post'>
          <PostHeader/>
          <PostBody/>
          <div className='line'></div>
        </div>,
        <div className='Post'>
        <PostHeader/>
        <PostBody/>
        <div className='line'></div>
      </div>,
        <div className='Post'>
        <PostHeader/>
        <PostBody/>
        <div className='line'></div>
      </div>,
        <div className='Post'>
        <PostHeader/>
        <PostBody/>
        <div className='line'></div>
      </div>
    ];



    return (list);
  }
  
  export default PostEnumeration;
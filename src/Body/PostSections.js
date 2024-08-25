
import PostBody from './Post/PostBody';
import PostHeader from './Post/PostHeader';
import './PostSection.css'

function PostSection() {
    return (
      <div className="PostSection" >
        <div className='Post'>
          <PostHeader/>
          <PostBody/>
          <div className='line'></div>
        </div>
      </div>
    );
  }
  
  export default PostSection;
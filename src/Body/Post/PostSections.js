
import PostEnumeration from './PostEnumeration';
import './PostSection.css';
function PostSection(props) {

  console.log(props)

  return (
      <div className="PostSection" >
       <PostEnumeration/>
      </div>
    );
  }
  
  export default PostSection;
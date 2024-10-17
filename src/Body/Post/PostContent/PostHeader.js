
import './PostHeader.css'

function PostHeader(props) {

  let userName = "u/mughal_emperor"


  
  return (
      <div className="PostHeader" >
         <span class="dot"></span>
        <header className='user-name'>{userName}</header>
      </div>
    );
  }
  
  export default PostHeader;
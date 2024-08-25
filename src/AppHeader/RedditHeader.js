import logo from '../images/img.png'
import './RedditHeader.css'

function RedditHeader() {

    const appName = "revolutionary left";

    return (
      <div className="RedditHeader" >
       <img src = {logo} className='logo'></img>
       <a class="active" className="home">{appName}</a>
      </div>
    );
  }
  
  export default RedditHeader;
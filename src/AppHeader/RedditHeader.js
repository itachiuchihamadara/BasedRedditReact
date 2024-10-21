import logo from '../images/img.png'
import './RedditHeader.css'

function RedditHeader() {

    const appName = "revolutionary left";

    return (
      <div className="RedditHeader" >
       <img src = {logo} className='Logo'></img>
       <a className="Home">{appName}</a>
       <input className = "SearchBar" type="text" placeholder="      Search Revolutions"></input>
      </div>
    );
  }
  
  export default RedditHeader;
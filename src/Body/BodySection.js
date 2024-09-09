
import './BodySection.css'

import FeedsSection from './Feeds/FeedsSection';
import PostSection from './Post/PostSections';

function BodySection() {
    return (
      <div className="BodySection" >
        <FeedsSection/>
        <PostSection/>
      </div>
    );
  }
  
  export default BodySection;
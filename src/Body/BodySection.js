
import './BodySection.css'

import FeedsSection from './FeedsSection';
import PostSection from './PostSections';

function BodySection() {
    return (
      <div className="BodySection" >
        <FeedsSection/>
        <PostSection/>
      </div>
    );
  }
  
  export default BodySection;
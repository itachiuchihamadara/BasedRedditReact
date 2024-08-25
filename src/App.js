import './App.css';
import RedditHeader from './AppHeader/RedditHeader';
import BodySection from './Body/BodySection';
import FeedsSection from './Body/FeedsSection';
import PostSection from './Body/PostSections';

function App() {
  return (
    <div className="App">
      <RedditHeader/>
      <BodySection/>
    </div>
  );
}

export default App;

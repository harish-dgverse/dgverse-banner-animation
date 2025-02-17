import './App.css';
import AvatarAnimation from './components/avatarAnimation/avatarAnimation';
import Banneranimation from './components/Banneranimation/Banneranimation';
import IntroSection from './components/satellite/satellite.tsx';

function App() {
  return (
    <div className="App">
      <Banneranimation />
      <IntroSection />
      {/* <AvatarAnimation/> */}
    </div>
  );
}

export default App;

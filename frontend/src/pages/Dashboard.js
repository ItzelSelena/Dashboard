import './App.scss';
import RightSide from '../components/RigtSide/RightSide';
import Charts from '../components/Charts/Charts';
import Charts2 from '../components/Charts2/Charts2';
import BasicTimeline from '../components/TimeLine/TimeLine';


function App() {
  return (
    <>
      <div>
        <RightSide/>{/* Mueve RightSide dentro del contenido principal */}
        <BasicTimeline/>
        <Charts/>
      </div>
    </>
  );
}

export default App;

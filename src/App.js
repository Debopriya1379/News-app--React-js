import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  return (
    <div>
      <Navbar/>
      <h2 className="text-center bg-primary p-2">Today's Latest News</h2>
      <News pageSize={18}/>
    </div>
  );
}

export default App;
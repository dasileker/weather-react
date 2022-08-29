// import react from 'react';
// import bootstrap from 'bootstrap';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import './App.css';
import TopButtun from './components/TopButtun';
import Input from './components/Input';

function App() {
  return (
    <div className="app">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtun />
        < Input />
      </div>
    </div>
  );
}

export default App;

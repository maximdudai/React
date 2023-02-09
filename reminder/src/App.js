import './App.css';

import Form from './components/form';

function App() {
  return (
    <div className="container w-full p-2">
        <div className='title bg-slate-400 p-2'>
            <h2 className='font-bold text-2xl'>Personal Information</h2>
            <p className='font-md'>Use a permanent address where you can receive mail.</p>
        </div>

        <Form />
    </div>
  );
}

export default App;

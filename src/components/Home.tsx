import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Home</h1>
      <div className="space-x-4">
        
        {/* <button
          className="mt-2 p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => navigate('/')}
        >
          Home
        </button> */}
        <button
          className="mt-2 p-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          onClick={() => navigate('/takeTicket')}
        >
          Take Ticket
        </button>
      </div>
    </div>
  );
};

export default Home;
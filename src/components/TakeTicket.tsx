import * as React from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const TakeTicket: React.FC = () => {
  const navigate = useNavigate();
  const [ticket, setTicket] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [countdown, setCountdown] = React.useState<number | null>(null);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown !== null && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => (prevCountdown !== null ? prevCountdown - 1 : null));
      }, 1000);
    } else if (countdown === 0) {
      setCountdown(null);
      setError(null);
      setTicket(null); // Sembunyikan tampilan tiket
    }
    return () => clearInterval(timer);
  }, [countdown]);

  const handleTakeTicket = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/take-ticket');
      setTicket(response.data.number);
      setError(null);
    } catch (error: any) { // Add type annotation
      if (error.response && error.response.status === 429) {
        setError('Please wait before taking another ticket.');
        setCountdown(60); // Set countdown to 60 seconds
      } else {
        setError('Error taking ticket.');
      }
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Take Ticket</h1>
      <button
        className="mt-2 p-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        onClick={handleTakeTicket}
        disabled={countdown !== null}
      >
        Take Ticket
      </button>
      {ticket !== null && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          Your ticket number is: {ticket}
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
          {error} {countdown !== null && `Please wait ${countdown} seconds.`}
        </div>
      )}
      <button
        className="mt-2 p-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
        onClick={() => navigate('/')}
      >
        Back
      </button>
    </div>
  );
};

export default TakeTicket;
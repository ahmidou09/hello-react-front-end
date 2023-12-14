import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { message, isLoading } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>
        Greeting:
        {message}
      </h1>
    </div>
  );
}

export default Greeting;

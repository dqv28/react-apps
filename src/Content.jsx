/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

function Content() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timeId = setInterval(() => {
      setCountdown(prevState => prevState - 1);
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <>
      <h1>{countdown}</h1>
    </>
  );
}

export default Content;

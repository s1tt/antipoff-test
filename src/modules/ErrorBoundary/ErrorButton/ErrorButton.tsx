import { useEffect, useState } from 'react';
import Button from 'ui/Button/Button';

const BugButton = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return (
    <Button style={{ color: 'red' }} onClick={throwError}>
      Throw Error
    </Button>
  );
};

export default BugButton;

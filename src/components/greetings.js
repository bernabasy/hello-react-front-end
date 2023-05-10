import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGreeting } from '../Redux/store/greetingReducer';

export default function Greetings() {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greeting);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  const handler = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="container mt-3">
      <div className="d-flex flex-column justify-content-center align-items-center">

        {loading
          && (
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
          )}
        {error && <h2>Something went wrong!</h2>}
        {!loading && <p>{greeting}</p>}
        {!loading && !error && <button className="btn btn-primary" type="button" onClick={handler}>Click the button to fetch a greeting</button>}
      </div>
    </div>

  );
}

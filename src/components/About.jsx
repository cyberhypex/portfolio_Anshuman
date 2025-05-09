import React, { useEffect } from 'react';

export function About() {
  function call() {
    console.log("Hello");
  }

  useEffect(() => {
    call(); // Will run once when component renders
  }, []);

  return (
    <>
      <h1>About</h1>
    </>
  );
}

import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      const timer = setTimeout(() => setPercent(percent + 1), 15);
      return () => clearTimeout(timer);
    }
  }, [percent]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#111',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      color: '#fff',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ padding: '24px', fontSize: '1.2rem' }}>Portfolio is loading...</div>
      <div style={{
        alignSelf: 'flex-end',
        padding: '24px',
        fontSize: '1rem',
        fontWeight: 600,
        opacity: 0.9,
      }}>{percent}%</div>
    </div>
  );
};

export default Loader;

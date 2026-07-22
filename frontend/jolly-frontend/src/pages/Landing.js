import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFF8F0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Georgia, serif',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#2C3E50', marginBottom: '0.5rem' }}>
        Jolly
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#7F8C8D', marginBottom: '3rem' }}>
        Your AI companion for daily life
      </p>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div
          onClick={() => navigate('/senior')}
          style={{
            background: '#fff',
            border: '2px solid #F0A500',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            cursor: 'pointer',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ fontSize: '3rem' }}>👴</div>
          <h2 style={{ color: '#2C3E50', marginTop: '1rem', fontSize: '1.2rem' }}>I'm a Senior</h2>
          <p style={{ color: '#7F8C8D', fontSize: '0.9rem' }}>Talk to Jolly</p>
        </div>

        <div
          onClick={() => navigate('/caretaker')}
          style={{
            background: '#fff',
            border: '2px solid #2E86AB',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            cursor: 'pointer',
            textAlign: 'center',
            width: '200px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div style={{ fontSize: '3rem' }}>👨‍👩‍👧</div>
          <h2 style={{ color: '#2C3E50', marginTop: '1rem', fontSize: '1.2rem' }}>I'm a Caregiver</h2>
          <p style={{ color: '#7F8C8D', fontSize: '0.9rem' }}>Manage & connect</p>
        </div>
      </div>

      <p style={{ marginTop: '3rem', color: '#BDC3C7', fontSize: '0.85rem' }}>
        Already have an account? <span style={{ color: '#F0A500', cursor: 'pointer' }}>Sign in</span>
      </p>
    </div>
  );
}

export default Landing;

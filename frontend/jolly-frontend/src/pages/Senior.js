import { useState } from 'react';

function Senior() {
  const [messages, setMessages] = useState([
    { from: 'jolly', text: 'Good morning! I\'m Jolly, your daily companion. How are you feeling today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!input.trim() || loading) return;
    const userMsg = { from: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:5001/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          name: 'Dorothy',
          interests: 'gardening, reading, bridge club',
          reminders: ['Doctor appointment Thursday 2pm', 'Call Sarah'],
          notes: ['Sarah says she loves you and will visit Saturday']
        })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: 'jolly', text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { from: 'jolly', text: 'Sorry, I had trouble responding. Please try again.' }]);
    }
    setLoading(false);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFF8F0',
      fontFamily: 'Georgia, serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        background: '#F0A500',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <div style={{ fontSize: '2rem' }}>🌟</div>
        <div>
          <h1 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>Jolly</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '0.85rem' }}>Your daily companion</p>
        </div>
      </div>

      <div style={{
        flex: 1,
        padding: '1.5rem',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        maxWidth: '700px',
        margin: '0 auto',
        width: '100%'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              background: msg.from === 'jolly' ? '#fff' : '#F0A500',
              color: msg.from === 'jolly' ? '#2C3E50' : '#fff',
              padding: '1rem 1.25rem',
              borderRadius: msg.from === 'jolly' ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
              maxWidth: '75%',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              background: '#fff',
              padding: '1rem 1.25rem',
              borderRadius: '4px 16px 16px 16px',
              color: '#aaa',
              fontSize: '1.05rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              Jolly is typing...
            </div>
          </div>
        )}
      </div>

      <div style={{
        padding: '1rem 1.5rem',
        background: '#fff',
        borderTop: '1px solid #eee',
        display: 'flex',
        gap: '0.75rem',
        maxWidth: '700px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: '0.875rem 1.25rem',
            fontSize: '1rem',
            borderRadius: '999px',
            border: '1.5px solid #ddd',
            outline: 'none',
            fontFamily: 'Georgia, serif'
          }}
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          style={{
            background: loading ? '#ccc' : '#F0A500',
            color: 'white',
            border: 'none',
            borderRadius: '999px',
            padding: '0.875rem 1.5rem',
            fontSize: '1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'Georgia, serif'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Senior;

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Copilot Chatbot</h1>
      <div className="chatbot-container">
        <iframe
          title="Copilot Agent"
          src="https://copilotstudio.microsoft.com/environments/Default-67c5a58a-7424-4d4d-b6c2-ddc89830cf74/bots/tri_alletecInfoBotJ0mBMm/webchat?__version__=2"
          frameBorder="0"
          style={{ width: '100%', height: '600px', border: '1px solid #ccc', borderRadius: '8px' }}
        />
      </div>
    </div>
  );
}

export default App;

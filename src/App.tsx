import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#ffffff', // Set background to white
      color: '#213547'           // Dark text for readability on white
    }}>
      <Navbar />

      <main style={{ 
        flex: '1', 
        padding: '100px 20px 20px 20px', 
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div className="card">
          <p>Developer Dairies</p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;
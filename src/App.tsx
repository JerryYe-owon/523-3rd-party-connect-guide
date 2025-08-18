import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <div className="text-center">
        <Link to="/alexa">Alexa</Link>
      </div>
      <div>
        <Link to="/google">Google Assistant</Link>
      </div>
    </>
  )
}

export default App

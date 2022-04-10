import './App.css'
// NA
// - https://reactrouter.com/docs/en/v6/getting-started/concepts
// - https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  SimpleForm,
  SimpleTimeline
} from "./components";

function App() {
  return (
    <Router>
      <p>
        hello-react-ray
      </p>
      <p>
        This is a SMALL BATCH exercise for HYBRID-FALL2022-PPOD.
      </p>
      <ul>
        <li><Link to='/route1'>Simple Form</Link></li>
        <li><Link to='/route2'>Simple Timeline </Link></li>
      </ul>

      <div>
        <Routes>
          <Route path="/route1" element={<SimpleForm />} />
          <Route path="/route2" element={<SimpleTimeline />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

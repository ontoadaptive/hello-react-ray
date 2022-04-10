import './App.css'
// NA
// - https://reactrouter.com/docs/en/v6/getting-started/concepts
// - https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {
  SimpleForm,
  MuiForm
} from "./components";

function App() {
  /* 
    return (
    <div>
      <SimpleForm />
    </div>
    )
  ) */
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
        <li><Link to='/route2'>MUI Form </Link></li>
      </ul>

      <div>
	{/*
        <Switch>
          <Route path="/route1" component={SimpleForm} />
          <Route path="/route2" component={MuiForm} />
        </Switch>
	*/}
        <Routes>
		<Route path="/route1" element={<SimpleForm />} />
		<Route path="/route2" element={<MuiForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

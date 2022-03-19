import './App.css'

import {
  SimpleTimeline,
  SimpleApiTimeline,
  SimpleXsApiTimeline,
} from "./components";

function App() {
  return (
    <div>
      <SimpleTimeline />
      <hr />
      <SimpleApiTimeline />
      {/*
      // NA.
      // - NOTE: MP ignore this until AG3 connects bridge.  
      // This should eventually be an approach to plug into full Ray
      <hr />
      <SimpleXsApiTimeline />                        
      */}
    </div>
  )
}

export default App

import React from 'react';

function App() {
  return <div>
    <h1>Computer Vision</h1>
    <p>Insert URL or Type prompt</p>
    <input placeholder='Enter URL to analyze or textual prompt to generate image'></input>
    <br/>
    <button>Analyze</button>
    <button>Generate</button>
    <hr/>
  </div>;
}

export default App;
import React, { useState } from 'react';
import ResponseDetails from './components/responseDetails/ResponseDetails';

function App() {
  console.log(process.env.REACT_APP_VISION_ENDPOINT);
  console.log(process.env.REACT_APP_VISION_KEY);
  const [imageUrl, setImageUrl] = useState({url:''});
  const [responseJson, setResponseJson] = useState('');
  const callComputerVision = () => {

    fetch(`${process.env.REACT_APP_VISION_ENDPOINT}computervision/imageanalysis:analyze?language=en&features=caption,read&model-version=latest&api-version=2023-02-01-preview`,{
      method: 'POST',
      headers : {
        'Ocp-Apim-Subscription-Key': process.env.REACT_APP_VISION_KEY,
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(imageUrl)
    })
      // .then(respoonse => setResponseJson(respoonse.json()))
      .then(respoonse => respoonse.json())
      .then(data => setResponseJson(JSON.stringify(data)))
      .catch(error => console.log(error));
  }
  
  const handlePrompt = (e) => {
    console.log(e.target.value);
    setImageUrl({url:e.target.value});
  }
  
  const handleAnalyze = e => {
    e.preventDefault();
    callComputerVision();
  }
  return <div>
    <h1>Computer Vision</h1>
    <p>Insert URL or Type prompt</p>
    <input placeholder='Enter URL to analyze or textual prompt to generate image' onChange={handlePrompt}></input>
    <br/>
    <button onClick={handleAnalyze}>Analyze</button>
    <button>Generate</button>
    <hr/>
    {responseJson ? <ResponseDetails 
      imgUrl={imageUrl.url}
      jsonResponse={responseJson}
    /> : null }
    
  </div>;
}

export default App;
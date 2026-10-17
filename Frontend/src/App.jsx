
import { useState, useEffect } from 'react'
import './App.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import EditorModule from "react-simple-code-editor"
import Markdown from "react-markdown"

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'

const Editor = EditorModule.default

console.log("Editor:", Editor)

function App() {
  
  const [code, setCode] = useState(`function sum() {
   return 5;
   }`)

   const [review, setReview] = useState(``)


  useEffect(() => {
    Prism.highlightAll()
  }, [])


 
// async function reviewCode() {
//   try {
//     const response = await axios.post(
//       'http://localhost:3000/ai/get-review',
//       { code }
//     )

//     setReview(response.data)

//   } catch (error) {
//     console.error('Review failed:', error)
//   }
// }


async function reviewCode() {
  try {
    console.log("Review button clicked");
    console.log("Code sent:", code);

    const response = await axios.post(
      'http://localhost:3000/ai/get-review',
      { code }
    );

    console.log("Backend response:", response.data);
    setReview(response.data);

  } catch (error) {
    console.error("Error:", error.message);
    console.error("Response:", error.response?.data);
  }
}


  return (
    <main>
      <div className="left">
       
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code =>
              Prism.highlight(
                code,
                Prism.languages.javascript,
                "javascript"
              )
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
          />
        </div>

        <div className="review"
          onClick={reviewCode}>Review</div>
     
      </div>

     <div className="right">
  <h2>Code Review Result</h2>
  <Markdown   style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}   rehypePlugins={[ rehypeHighlight ]} >
  {typeof review === "string" ? review : ""}
</Markdown>
  {/* <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
    {review || 'Click Review to analyze your code.'}
  </pre> */}
</div>
    </main>
  )
}

export default App

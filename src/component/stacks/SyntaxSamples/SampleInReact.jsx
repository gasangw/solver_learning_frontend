import React from 'react';
import './sample.css'
import  SyntaxHighlighter  from 'react-syntax-highlighter';

export const CodesInReact = () => {
  return (
    <div className="code-holder">
        <div className="js mb-4">
        <h3 className='text-lg font-bold'>Js</h3>
<SyntaxHighlighter language="javascript" className="my-code">
{`function sum(a, b) {
return a + b;
}
console.log(sum(4,8))`}
</SyntaxHighlighter>
</div>
<div className="react mb-3">
<h3 className='text-lg font-bold'>React</h3>
<SyntaxHighlighter language="react" className="my-code">
{`import React from 'react';
const App = () => {
return (
  <div className="container">
    <h1>Hello World!</h1>
    <p>Am learning react</p>
  </div>
)
}`}
</SyntaxHighlighter>
</div>
<div className="css mb-5">
<h3 className='text-lg font-bold'>CSS</h3>
<SyntaxHighlighter language="css" className="my-code">
{`
.code {
    background-color: #fefefe;
    font-size: 1rem;
    font-weight: 600;
}

.container {
   width: 100%;
}`}
</SyntaxHighlighter>
</div>
    </div>
  )
}

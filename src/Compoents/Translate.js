import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
   {
      label: "Afrikaans",
      value: "af"
   },
   {
      label: "Arabic",
      value: "ar"
   },
   {
      label: "Hindi",
      value: "hi"
   }
];

const Translate = () => {

  const [ lang, setLang]= useState(options[0]);
  const [text, setText] = useState('');

  return (
    <div>

       <div className='ui form'>
         <div className='field'>
            <label>Enter Text</label>
            <input value={text} onChange={(e) => {setText(e.target.value)}}/>
         </div>
       </div>

       <Dropdown selected={lang} setSelectedChange={setLang} options={options}/>

       <hr/>

       <h3 className="ui header">output</h3>

       <Convert text={text} language={lang}/>
    </div>
  )
}

export default Translate
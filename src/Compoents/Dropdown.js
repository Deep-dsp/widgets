import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( { options, selected, setSelectedChange } ) => {

   const [ open, setOpen ] = useState(false);
   const ref = useRef();

   useEffect(() => {
      document.body.addEventListener('click', (event)=>{
         if(ref.current.contains(event.target)){
            return;
         }
         setOpen(false)
      });
   }, []);

   const renderedOptions = options.map((option) => {

      if(option.label === selected.label){
         return null;
      }
      return(
         <div key={option.value} className="item" onClick={()=>setSelectedChange(option)}>
            { option.label }
         </div>
      )
   });
   
   return (
      <div ref={ref} className="ui form">
         <div className="field">
            <div className="label">Select a Color</div>
            <div 
               onClick={()=> setOpen(!open)}
               className={`ui selection dropdown ${ open ? 'visible active': '' }`}
            >
               <i className="dropdown icon"></i>
               <div className="text">{selected.label}</div>
               <div className={`menu ${ open ? 'visible transition' : '' }`}>
                  {renderedOptions}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dropdown
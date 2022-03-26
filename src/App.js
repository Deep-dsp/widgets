import React, { useState } from "react";
import Route from './Compoents/Route';
import Accordion from "./Compoents/Accordion";
import Search from "./Compoents/Search";
import Dropdown from "./Compoents/Dropdown";
import Translate from './Compoents/Translate';

const items = [
   {
      title: "What is React",
      content: "Accordion One Content"
   },
   {
      title: "Two - What is React",
      content: "Two - Accordion One Content"
   },
   {
      title: "Three - What is React",
      content: "Three - Accordion One Content"
   }
];

const options = [
   {
      label: "The Color Red",
      value: "red"
   },
   {
      label: "The Color Green",
      value: "green"
   },
   {
      label: "The Color Blue",
      value: "blue"
   }
]

export default () => {

   const [ selected, setSelected ] = useState(options[0]);

   return <div>
      <Route path="/">
         <Accordion items={items}/>
      </Route>
      <Route path="/list">
         <Search />
      </Route>
      <Route path="/dropdown">
         <Dropdown options={options} selected={selected} setSelectedChange={setSelected}/>
      </Route>
      <Route path="/translate">
         <Translate/>
      </Route>
   </div>;
}
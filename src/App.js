import React from "react";
import Accordion from "./Compoents/Accordion";

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
export default () => {
   return <div>
      <Accordion items={items}/>
   </div>;
}
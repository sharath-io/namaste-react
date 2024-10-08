import React from "react";
import ReactDOM from "react-dom/client";

// React Element => creates an object
// const heading = React.createElement("h1", {}, "heading from react element");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // when we render onto DOM => becomes HTML element
// // root.render(heading);

// const jsxHeading = <h1> this is JSX heading</h1>

// console.log('heading: ', heading);
// console.log('jsx : ',jsxHeading);

// root.render(jsxHeading)

// console.log('heading: ', heading);

// console.log("root: ", root);

// const heading =(
//     <h1 className="heading">React heading element 2</h1>
// )

// const HeadingComponent = () =>{
//     return <h1>Heading functional component</h1>
// }

// const HeadingComponent2 = () => <h1>Heading functional component 2</h1>

// const HeadingComponent3 = () => (
//     <h1 className="heading">Heading functional component 3</h1>
// )


// JSX 
// const headingElement = <h1>React Heading Element</h1>

// const TitleComponent = () => (
//   <div>
//     <h1>Title Component</h1>
//   </div>
// );

// const HeadingComponent = () => (
//   <div className="container">
//     <TitleComponent />
//     <TitleComponent></TitleComponent>
//     <h1>Heading Component</h1>
//   </div>
// );


const number = 1000;

const title = (
    <div>
        <h1> title react element</h1>
    </div>
)

const elem = <span>this is span tag element </span>

const HeadingComponent =() => (
  <div>
    {title}
    {elem}
    <h1>Heading component</h1>
    <h2>Number: {number}</h2>
    <h3>Number: {number-1}</h3>
    <h3>{console.log('console from react compoenent')}</h3>
   </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);








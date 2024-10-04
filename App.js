/* 
   <div id="parent">
      <div id="child1">
          <h1>I am h1 tag</h1>
          <h2>I am h2 tag</h2>
      </div>
       <div id="child2">
          <h1>I am h1 tag</h1>
          <h2>I am h2 tag</h2>
      </div>
   </div>
*/


const parent = React.createElement(
    'div',
     {},[
        React.createElement("div", {id: "child1"}, [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag"),
        ]),
        React.createElement("div", {id:"child2"}, [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag"),
        ])
     ]
    )   

    console.log(parent)
    console.log(parent.props)


// const header = React.createElement("h1", {id: "header", xyz:"abc"}, "I am from header")

// console.log(header)

const root = ReactDOM.createRoot(document.getElementById("root"))


// root.render(header);

root.render(parent);






















// const parent = React.createElement("div", {}, React.createElement("div", {}, React.createElement("h1", {}, "new h1 element")))





// const header = React.createElement(
//     "h1", {
//         id: "header"
//     },
//     "Hello World from React");

// console.log(header);
// console.log(header.props);

// const root = ReactDOM.createRoot(document.getElementById("root"))

// // root.render(header);


// root.render(parent);

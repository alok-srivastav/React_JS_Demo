const parent = React.createElement('div', {id: 'parent'}, 
React.createElement('div', {id: 'child'}, 
[React.createElement('h1', {}, 'I am H1 Tag'), React.createElement('h2', {}, 'I am H2 Tag')]
));


// const heading = React.createElement('h1', {id: 'heading',style:{color: 'blue'}}, 'Hello World From React !!');
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);


import React from 'react';

//Parent componant
function App (){
  return(
    <div>
      <h1>Welcome</h1>
      < Greeting name="N"/>
      < Greeting name="S"/>
      < Greeting name="T"/>
      
      
    </div>
  );
}
//child components
function  Greeting(props){
  return(
    <p>Hello,{props.name}</p>
  );
}
export default App;
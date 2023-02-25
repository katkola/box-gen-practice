import './App.css';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
import { useState } from 'react';
import BoxMaker from './components/BoxMaker';
import BoxShower from './components/BoxShower';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");
  const [boxes, setBoxes] = useState({});
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( newMessage );
  }
  const addABox = (newBox) => {
    setBoxes({...boxes,newBox});
  }
  
  return (
      <>
          <MessageForm onNewMessage={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
          <BoxMaker blah={addABox}/>
          <BoxShower someBoxes={boxes}/>
      </>
  );
}
export default App;
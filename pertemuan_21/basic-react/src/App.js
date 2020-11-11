import './App.css';
import Card from './components/card';
import Counter from "./components/Counter";
import {person} from './utils/person';


function App() {
  return( 
    <>
      {/* {person.map((item)=> {
        return(
          <Card
          name={item.name}
          institution={item.institution}
          address={item.address}
          phoneNumber={item.phoneNumber}
      />
     );
   })} */}
      <counter title="Counter Component" />
   </>
   );
  }

export default App;


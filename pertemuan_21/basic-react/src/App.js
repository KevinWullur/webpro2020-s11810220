import './App.css';
import Card from './components/card'
import {person} from './utils/person';


function App() {
  return( 
    <>
   {person.map((item)=> {
     return(
       <Card
        name={item.name}
        institution={item.institution}
        address={item.address}
        phoneNumber={item.phoneNumber}
      />
     );
   })}
   </>
   );
  }

export default App;


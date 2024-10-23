import './index.css';
import './App.css';
import {Greet} from './components/Greet'
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { StyleSheet } from './components/StyleSheet';

function App() {
  return (
    <div className="App">
        <Greet name='Bruce' heroName='batman'>
          <button className='bg-slate-500'>This is children</button>
        </Greet>
        <Message />
        <ClickHandler />
        <ParentComponent />
        <UserGreeting />
        <NameList />
        <StyleSheet />
        
    </div>
  );
}

export default App;

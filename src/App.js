import "./App.css";
import React from "react";
import HookCounter from "./Components/UseState/HookCounter";
import ClassCounter from "./Components/UseState/ClassCounter";
import HookCounterTwo from "./Components/UseState/HookCounterTwo";
import HookCounterFour from "./Components/UseState/HookCounterFour";
import HookCounterThree from "./Components/UseState/HookCounterThree";
import Usestate from "./Components/UseState/Usestate";
import ClassCounterOne from "./Components/useEffect/ClassCounterOne";
import HookCounterOne from "./Components/useEffect/HookCounterOne";
import ClassMouse from "./Components/useEffect/ClassMouse";
import HookMouse from "./Components/useEffect/HookMouse";
import MouseContainer from "./Components/useEffect/MouseContainer";
import IntervalClassCounter from "./Components/useEffect/IntervalClassCounter";
import IntervalHookCounter from "./Components/useEffect/IntervalHookCounter";
import DataFetching from "./Components/DataFetching";
import DataFetchingSingle from "./Components/DataFetchingSingle";

import ComponentC from "./Components/useContext/ComponentC";
import DataFetchingOne from "./Components/useReduce/DataFetchinguseState";
import DataFetchingTwo from "./Components/useReduce/DataFetchinguseReducer";
import ParentComponent from "./Components/CallBack-Hook/ParentComponent";
import Counter from "./Components/memo-hook/Counter";
import FocusInput from "./Components/UseRef/FocusInput";
import ClassTimer from "./Components/UseRef/ClassTimer";
import HookTimer from "./Components/UseRef/HookTimer";
import DocTitleOne from "./Components/Custom-hooks/DocTitleOne";
import DocTitleTwo from "./Components/Custom-hooks/DocTitleTwo";
import CounterOne from "./Components/Custom-hooks/CounterOne";
import CounterTwo from "./Components/Custom-hooks/CounterTwo";
import UserForm from "./Components/Custom-hooks/UserForm";


export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/>
      <HookCounterFour /> */}
      {/* <Usestate/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <ClassMouse/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalClassCounter/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetchingSingle/> */}
      <UserContext.Provider value={'Sudeep'}>
        <ChannelContext.Provider value={'Aryan'}>
          <ComponentC/>
        </ChannelContext.Provider>        
      </UserContext.Provider>
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <ParentComponent/> */}
      {/* <Counter/> */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/> */}
      {/* <HookTimer/> */}
      {/* <DocTitleOne/> */}
      {/* <DocTitleTwo/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <UserForm/> */}
    </div>
  );
}

export default App;

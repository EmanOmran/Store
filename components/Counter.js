import React ,{useState ,createContext} from "react";

export const Countercontext = createContext();
const CountercontextProvider =(props)=>{
    const [count , setcount] = useState(0);
    function increase(){
        setcount(count+1);
    }
    const value ={count,increase};
    return(
        <Countercontext.Provider value={value}>
            {props.children}
        </Countercontext.Provider>
    );
}
export default CountercontextProvider;
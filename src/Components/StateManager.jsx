import { useState } from "react"
import ToolBar from './ToolBar';
import Canvas from "./Canvas";

const Statemanager = () =>{
    const[selectedTool , setSelectedTool]= useState(null); //tracks selected tool
    return(
        <>
        <div className="d-flex">
            <ToolBar setSelectedTool={setSelectedTool}/>
            <Canvas setSelectedTool={setSelectedTool}/>
        </div>
        </>
    )

}
export default Statemanager
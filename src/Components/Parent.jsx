import { useState } from "react"
import ToolBar from "./ToolBar";
import Canvas from "./Canvas";

const Parent = () =>{
    const [selectedTool,setSelectedTool]=useState(null);

    return(
        <>
        <div className="d-flex">
            <ToolBar
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
            />

            <Canvas
            selectedTool={selectedTool}
            setSelectedTool={setSelectedTool}
            />

        </div>
        </>
    );
};

export default Parent;
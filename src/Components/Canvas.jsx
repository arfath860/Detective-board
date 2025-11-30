import { useEffect, useRef, useState } from "react"




const Canvas = ({ selectedTool }) => {
    const canvasRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [canvasObjects, setCanvasObjects] = useState([]); // stores sticky notes
    const [selectedObject, setSelectedObject] = useState(null);

    //Draw pen tool
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        //set canvas size 
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const startDrawing = (e) => {
            if (selectedTool !== "Pen") return;
            setDrawing(true);
            ctx.beginPath();
            ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        };

        const draw = (e) => {
            if (!drawing || selectedTool !== "Pen") return;
            ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
            ctx.strokeStyle = "black";
            ctx.lineWidth = 2;
            ctx.stroke();
        };

        const stopDrawing = () => {
            if (drawing) ctx.closePath();
            setDrawing(false);
        };

        canvas.addEventListener("mousedown", startDrawing);
        canvas.addEventListener("mousemove", draw);
        canvas.addEventListener("mouseup", stopDrawing);
        canvas.addEventListener("mouseleave", stopDrawing);

        return () => {
            canvas.removeEventListener("mousedown", startDrawing);
            canvas.removeEventListener("mousemove", draw);
            canvas.removeEventListener("mouseup", stopDrawing);
            canvas.removeEventListener("mouseleave", stopDrawing);
        };
    }, [drawing, selectedTool]);

    //Handle Sticky Notes

    const addSticky = (e) => {
        if (selectedTool !== "Sticky") return;
        const newSticky = {
            id: Date.now(),
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
            text: "New Note",
        };
        setCanvasObjects([...canvasObjects, newSticky]);
    };

    //Handle Trash Tool
    const removeObject = (id) => {
        setCanvasObjects(canvasObjects.filter(obj => obj.id !== id));
    };



    return (
        <>
            <div
                style={{
                    flex: 1,
                    minHeight: "100vh",
                    position: "relative",
                    overflow: "hidden"
                }}
                onClick={selectedTool === "sticky" ? addSticky : null}
            >

                <h4 className="p-3 text-secondary">
                    selected Tool : {selectedTool || "none"}
                </h4>

                {/* Canvas for pen drawing*/}
                <canvas
                    ref={canvasRef}
                    style={{ border: "1px solid #ccc", width: "100%", height: "80vh" }}
                />

                {/* Renders sticky notes*/}

                {canvasObjects.map(obj => (
                    <div
                        key={obj.id}
                        style={{
                            position: "absolute",
                            left: obj.x,
                            top: obj.y,
                            padding: "10px",
                            backgroundColor: "yellow",
                            border: "1px solid #888",
                            cursor: selectedTool === "Trash" ? "pointer" : "default",
                        }}
                        onClick={() => selectedTool === "Trash" && removeObject(obj.id)}
                    >
                        {obj.text}
                    </div>
                ))}

            </div>
        </>
    );


};
export default Canvas
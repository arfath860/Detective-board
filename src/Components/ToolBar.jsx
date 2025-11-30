const ToolBar = ({setSelectedTool,selectedTool }) =>{
    const tools = [
        {name : "Move",icon : "bi-arrows-move"},
        {name : "Image",icon : "bi-image"},
        {name : "Sticky",icon : "bi-sticky"},
        {name : "Pen",icon : "bi-vector-pen"},
        {name : "Trash",icon : "bi-trash3"}
    ];
    return (
        <>
        <div className="d-flex flex-column bg-dark text-light p-3"
            style={{
                width : "80px",
                minHeight : "100vh"
            }}
        >
            {tools.map(tool =>(
                <button
                    key={tool.name}
                    className={`btn my-3 ${selectedTool === tool.name ? "btn-primary" : "btn-dark"}`} 
                    onClick={()=> setSelectedTool(tool.name)}
                >
                    <i className={`bi ${tool.icon} fs-3`} ></i>
                </button>
            ))}


            </div>
        </>
    )

}
export default ToolBar
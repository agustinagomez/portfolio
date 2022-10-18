import React from 'react'
import ReactFlow, {
    Background
} from "reactflow";
import "reactflow/dist/style.css"; 
import {
    nodes,
    edges
} from "./elements.jsx";
import s from './Flow.module.css'

function Flow() {
    const proOptions = { hideAttribution: true };
    
    return (
        <div className={s.container}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodesDraggable={false}
                proOptions={proOptions}
                fitView
                nodesConnectable={false}
                draggable={false}
            >
                <Background/>
            </ReactFlow>
       </div> 
    )
}

export default Flow
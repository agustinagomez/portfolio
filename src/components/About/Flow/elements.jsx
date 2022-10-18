import React from "react";
import { MarkerType } from "reactflow";

const style = {
  background: "#ffffff23",
  color: "#fff",
  border: "0",
  borderRadius: "10px",
  width: "28%",
  fontSize: "calc(0.75vh + 0.75vw)"
}

export const nodes = [
    {
        id: "1",
        type: "input",
        data: {
          label: (
            <>
              <strong>Full Stack </strong>Development
            </>
          )
        },
        position: { x: 250, y: 0 },
        style
    },
    {
        id: "2",
        data: {
          label: (
            <>
              <strong>Front-End </strong>Development
            </>
          )
        },
        position: { x: 70, y: 120 },
        style
    },
    {
        id: "3",
        data: {
          label: (
            <>
              <strong>Back-End </strong>Development
            </>
          )
        },
        position: { x: 430, y: 120 },
        style
    }
];

export const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: true
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "smoothstep",
    animated: true
  },
]
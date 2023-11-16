import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [treeData, setTreeData] = useState({
    value: "root",
    layer: 1,
    child: [
      {
        value: 1,
        layer: 2,
        child: [
          {
            value: 1,
            layer: 3,
            child: [],
          },
        ],
      },
      {
        value: 2,
        layer: 2,
        child: [
          {
            value: 1,
            layer: 3,
            child: [
              {
                value: 1,
                layer: 4,
                child: [],
              },
              {
                value: 2,
                layer: 4,
                child: [],
              },
              {
                value: 3,
                layer: 4,
                child: [],
              },
            ],
          },
        ],
      },
      {
        value: 3,
        layer: 2,
        child: [],
      },
    ],
  });

  function test(data) {
    return createTree(data);
  }

  function setData(data, parentValue, layer) {
    if (data.value == parentValue && data.layer == layer) {
      console.log(data);
    } else {
    }
    if (data.child.length > 0) {
      data.child.map((item, index) => {
        return setData(item, parentValue, layer);
      });
    }
    return data;
  }

  function setNewData(parentValue, layer) {
    console.log(setData(treeData, parentValue, layer));
  }
  function addNode(parentValue, layer) {
    // if (layer === 1) {
    //   setTreeData({
    //     value: treeData.value,
    //     layer: layer,
    //     child: [
    //       ...treeData?.child,
    //       {
    //         value: parseInt(Math.random().toString().slice(2, 5)),
    //         child: [],
    //         layer: layer + 1,
    //       },
    //     ],
    //   });
    // }
    const newData = {};
    setNewData(parentValue, layer);
  }

  function createTree(treeData) {
    return (
      <div className="container">
        <p
          className={treeData?.value === "root" ? "root" : "child"}
          onClick={() => {
            addNode(treeData?.value, treeData?.layer);
          }}
        >
          {treeData.value}
        </p>
        <div className="row_container">
          {treeData?.child?.map((item, index) => {
            return (
              <div key={index} className="container">
                {createTree(item)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  // console.log(treeData);
  return <div className="App">{test(treeData)}</div>;
}

export default App;

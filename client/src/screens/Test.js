import React from "react";
import { Button, Card, Col, Row } from "antd";
function Test(props) {
  //Mình bấm vào một cái nào đó thì nó sẽ tự động chọn mà cho mình drap
  //Khi buôn ra thì tự động xóa sự kiện đó
  // draggables.forEach((draggable) => {
  //   draggable.addEventListener("dragstart", () => {
  //     draggable.classList.add("dragging");
  //     console.log("one");
  //   });

  //   draggable.addEventListener("dragend", () => {
  //     draggable.classList.remove("dragging");
  //     console.log("Two");
  //   });
  // });

  // containers.forEach((container) => {
  //   container.addEventListener("dragover", (e) => {
  //     e.preventDefault();
  //     console.log("Two",e);
  //     const afterElement = getDragAfterElement(container, e.clientY);
  //     console.log(afterElement, "afterElement");
  //     const draggable = document.querySelector(".dragging");
  //     if (afterElement == null) {
  //       //Chèn phần tử dưới cuối cùng
  //       container.appendChild(draggable);
  //     } else {
  //       //chèn từ dưới đếm lên 1 phần tử
  //       container.insertBefore(draggable, afterElement);
  //     }
  //   });
  // });

  const abcd = () => {
    //Toàn bộ thẻ item
    const draggables = document.querySelectorAll(".draggable");
    // Toàn bộ thẻ Khung
    const containers = document.querySelectorAll(".container");
    console.log(draggables, containers);

    draggables.forEach((draggable) => {
      draggable.addEventListener("dragstart", () => {
        draggable.classList.add("dragging");
        console.log("one");
      });

      draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
        console.log("Two");
      });
    });

    containers.forEach((container) => {
      container.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log("Two",e);
        const afterElement = getDragAfterElement(container, e.clientY);
        console.log(afterElement, "afterElement");
        const draggable = document.querySelector(".dragging");
        if (afterElement == null) {
          //Chèn phần tử dưới cuối cùng
          container.appendChild(draggable);
        } else {
          //chèn từ dưới đếm lên 1 phần tử
          container.insertBefore(draggable, afterElement);
          // container.appendChild(draggable);
        }
      });
    });
  };
  function getDragAfterElement(container, y) {
    // Tìm kiếm ra 4 Array
    // console.log(container, "afterElement",y);
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];
    // console.log("getDragAfterElement", draggableElements);
    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }
  return (
    <>
      <Button onClick={abcd}>Click</Button>
      <div
        className="container"
        style={{ padding: "5px", border: "1px solid green" }}
      >
        <Row
          style={{
            border: "1px solid red",
            margin: "5px",
            backgroundColor: "red",
          }}
          className="draggable"
          draggable="true"
        >
          <Col>Box1</Col>
        </Row>
        <Row
          style={{
            border: "1px solid black",
            margin: "5px",
            backgroundColor: "black",
          }}
          className="draggable"
          draggable="true"
        >
          <Col>Box2</Col>
        </Row>
        <Row
          style={{
            border: "1px solid blue",
            margin: "5px",
            backgroundColor: "blue",
          }}
          className="draggable"
          draggable="true"
        >
          <Col>Box3</Col>
        </Row>
      </div>
    </>
  );
}

export default Test;

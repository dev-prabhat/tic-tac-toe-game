import React, { useState } from 'react'
import Icon from './Component/Icon'
// react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// reactstrap and bootstrap
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9)
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    }
    else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    }
    else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    }
    else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    }
    else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    }
    else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
    else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
    else if (((itemArray[0] === "cross") || (itemArray[0] === "circle")) && ((itemArray[1] === "cross") || (itemArray[1] === "circle")) && ((itemArray[2] === "cross") || (itemArray[2] === "circle")) && ((itemArray[3] === "cross") || (itemArray[3] === "circle")) && ((itemArray[4] === "cross") || (itemArray[4] === "circle")) && ((itemArray[5] === "cross") || (itemArray[5] === "circle")) && ((itemArray[6] === "cross") || (itemArray[6] === "circle")) && ((itemArray[7] === "cross") || (itemArray[7] === "circle")) && ((itemArray[8] === "cross") || (itemArray[8] === "circle"))) {
      setWinMessage("No One Wons")
    }
  };


  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    } else {
      return toast("already filled", { type: "error" })
    }


    checkIsWinner()
  }



  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {
            winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}> Restart</Button>
              </div>
            ) : (
              <h1 className="text-center text-success">
                {isCross ? "Cross turns" : "Circle turns"}
              </h1>
            )
          }
          <div className="grid">
            {
              itemArray.map((item, index) => (
                <Card onClick={() => changeItem(index)} color="warning" key={index}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

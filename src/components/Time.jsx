import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
export default function Time() {
  const [time, setTime] = useState("");
  const handleClick = () => {
    const date = new Date();
    const showTime =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    setTime(showTime);
  };
  return (
    <div>
      {" "}
      <div className="mb-5">
        <Button className="mb-4" variant="outline-info" onClick={handleClick}>
          {" "}
          Show Time{" "}
        </Button>
        <h2> {` Current Time: ${time} `} </h2>
      </div>
    </div>
  );
}

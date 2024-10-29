import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
export default function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {" "}
      <div>
        <Button
          className="mb-4"
          variant="outline-info"
          onClick={() => setCount(count + 1)}
        >
          {" "}
          Click Here{" "}
        </Button>
        <h1> {count} </h1>
      </div>
    </div>
  );
}

import React from "react";
import { Alert, Button } from "react-bootstrap";

export function Goal({ id, goal, complete, onRemove, toggleComplete }) {
  const alertVariant = complete ? "success" : "primary";
  const actionStyle = complete
    ? "arrow-undo-outline"
    : "checkmark-circle-outline";

  return (
    <Alert id={id} className="d-flex" variant={alertVariant}>
      <p className="mb-0 col-9 col-sm-10">{goal}</p>
      <Button
        variant={"outline-" + alertVariant}
        className="remove-goal btn-sm"
        onClick={onRemove}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </Button>
      <Button
        variant={alertVariant}
        className="btn-sm"
        onClick={toggleComplete}
      >
        <ion-icon name={actionStyle}></ion-icon>
      </Button>
    </Alert>
  );
}

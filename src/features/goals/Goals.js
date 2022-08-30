import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { Goal } from "./Goal";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, removeGoal, selectGoals, updateGoal } from "./goalsSlice";
export function Goals() {
  const [goal, setGoal] = useState("");
  const dispatch = useDispatch();
  const goals = useSelector(selectGoals);

  useEffect(() => {}, [goals]);
  const handleChange = (e) => {
    e.preventDefault();
    setGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goal) {
      return;
    }
    dispatch(addGoal({ id: uuidv4(), complete: false, goal: goal }));
    setGoal("");
  };

  const handleRemove = (e) => {
    const currentId = e.currentTarget.parentNode.id;
    dispatch(removeGoal({ id: currentId }));
  };

  const toggleComplete = (e) => {
    const currentId = e.currentTarget.parentNode.id;
    dispatch(updateGoal({ id: currentId }));
  };

  return (
    <Card>
      <Card.Header>Goals</Card.Header>
      <Card.Body>
        <Form className="mb-3" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="What do you want to achieve?"
              onChange={handleChange}
              value={goal}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add new goal
          </Button>
        </Form>
        {/* {goal && (
          <Alert variant="primary" onChange={handleChange}>
            {goal}
          </Alert>
        )} */}
        <hr></hr>
        {goals.length === 0 ? (
          <p>No goals to display. Add new goal.</p>
        ) : (
          goals
            ?.filter((goal) => goal.complete === false)
            .map((goal) => {
              return (
                <Goal
                  key={goal.id}
                  id={goal.id}
                  goal={goal.goal}
                  onRemove={handleRemove}
                  toggleComplete={toggleComplete}
                />
              );
            })
        )}
        {goals.length === 0 ? (
          <p></p>
        ) : (
          goals
            ?.filter((goal) => goal.complete === true)
            .map((goal) => {
              return (
                <Goal
                  key={goal.id}
                  id={goal.id}
                  complete={goal.complete}
                  goal={goal.goal}
                  onRemove={handleRemove}
                  toggleComplete={toggleComplete}
                />
              );
            })
        )}
      </Card.Body>
    </Card>
  );
}

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync, selectCarousel } from "./carouselSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export function CarouselList() {
  const dispatch = useDispatch();
  const images = useSelector(selectCarousel);
  const carousel = [
    "https://images.unsplash.com/photo-1657299143544-f10ea56fbcd2?ixid=MnwzNTg3NDR8MXwxfGFsbHwxfHx8fHx8Mnx8MTY2MTQ4MjU3MQ&ixlib=rb-1.2.1",
  ];

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <Card bg="dark" text="light">
      <Card.Header>Unsplash Carousel</Card.Header>
      <Card.Body>
        <Carousel variant="dark" slide={false} interval={null}>
          {Object.values(images)?.map((image) => {
            return (
              <Carousel.Item key={image.id}>
                <img
                  className="d-block w-100"
                  src={image.urls.small}
                  height="200px"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Card.Body>
    </Card>
  );
}

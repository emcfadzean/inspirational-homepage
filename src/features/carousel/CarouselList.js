import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync, selectCarousel } from "./carouselSlice";
import "bootstrap/dist/css/bootstrap.min.css";

export function CarouselList() {
  const dispatch = useDispatch();
  const images = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <Carousel
      style={{ zIndex: 0 }}
      variant="dark"
      slide={false}
      interval={null}
      nextLabel=""
      prevLabel=""
    >
      {Object.values(images)?.map((image) => {
        return (
          <Carousel.Item
            style={{ height: 500, backgroundColor: "black" }}
            key={image.id}
          >
            <img style={{ objectFit: "fill" }} src={image.urls.regular} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

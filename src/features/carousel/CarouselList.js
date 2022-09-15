import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync, selectCarousel } from "./carouselSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import { Quote } from "../quote/Quote";

export function CarouselList() {
  const dispatch = useDispatch();
  const images = useSelector(selectCarousel);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <Carousel
      style={{ zIndex: 0, minHeight: "50vh" }}
      variant="dark"
      slide={false}
      interval={null}
      nextLabel=""
      prevLabel=""
    >
      {Object.values(images)?.map((image) => {
        return (
          <Carousel.Item
            style={{
              height: 500,
              backgroundColor: "transparent",
            }}
            key={image.id}
          >
            <Carousel.Caption
              className="d-flex align-items-center"
              style={{ height: 500, paddingBottom: 0 }}
            >
              <Quote />
            </Carousel.Caption>

            <img
              width="100%"
              height="500px"
              style={{ objectFit: "cover" }}
              src={image.urls.regular}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

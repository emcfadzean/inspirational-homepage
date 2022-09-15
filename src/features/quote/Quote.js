import React, { Component, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync, selectQuote } from "./quoteSlice";

export function Quote(props) {
  const dispatch = useDispatch();
  const quote = useSelector(selectQuote);

  useEffect(() => {
    dispatch(fetchAsync());
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: 0,
        color: "white",
        backgroundColor: "transparent",
      }}
    >
      <q>
        {quote.quote
          ? quote.quote
          : "'Genius is one percent inspiration and 99 percent perspiration'"}
      </q>
      <p style={{ margin: 0, fontStyle: "italic" }}>
        - {quote.author ? quote.author : "Thomas Edison"}
      </p>
    </div>
  );
}

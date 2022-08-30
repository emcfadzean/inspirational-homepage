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
    <div style={{ textAlign: "center", paddingTop: 50 }}>
      <q>{quote.quote}</q>
      <p>- {quote.author}</p>
    </div>
  );
}

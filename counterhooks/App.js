import React, { useState } from "react";
import CounterHooks from "./s3/CounterHooks";


export default function App() {
  return <CounterHooks diff={1} />;
}

"use client";
import { FC } from "react";

interface errorPageProps {
  error : Error,
  reset: ()=> void
}

const Error: FC<errorPageProps> = ({error, reset}) => {
  return <div>Error <button onClick={reset}>Try again</button></div>;
};

export default Error;

import { FC } from "react";
import axios from "axios";

// export const dynamic = "force-dynamic";

export const revalidate = 10;

interface DashboardPageProps {}

const PageProps = async (props: DashboardPageProps) => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
  //  next: {
  //   revalidate: 10
  //  }
  // });
  // const data = await res.json();

  let time = new Date();

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  console.log({ data });

  return (
    <div>
      <div>Dashboard</div>
      <div style={{ padding: "1rem"}}>
        { time.toLocaleTimeString()}
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default PageProps;

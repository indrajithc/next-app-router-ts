import { FC } from "react";

interface DashboardPageProps {}

const PageProps = async (props: DashboardPageProps) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "no-store",
  });

  const data = await res.json();

  console.log({ data });

  return (
    <div>
      <div>Dashboard</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default PageProps;

import axios from "axios";
import { resolve } from "path";

const wait = (ms: number) => new Promise((resolve)=> setTimeout(resolve, ms))

const DashboardPage = async () => {

  await wait(5)
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1",
  );

  console.log({ data });

  return <div>Dashboard</div>;
};

export default DashboardPage;

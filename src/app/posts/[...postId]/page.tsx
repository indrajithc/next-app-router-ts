import { FC } from "react";

interface PostsPageProps {
  params: {
    postId: string;
  };
}

const PageProps  = async(props: PostsPageProps) => {
  const { params } = props;
  console.log({ params})
  return <div>{params.postId}</div>;
};

export default PageProps;

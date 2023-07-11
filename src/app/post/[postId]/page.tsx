import { FC } from "react";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const PageProps  = async(props: PostPageProps) => {
  const { params } = props;
  return <div>{params.postId}</div>;
};

export default PageProps;

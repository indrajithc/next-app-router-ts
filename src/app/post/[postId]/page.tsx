import { FC } from "react";

interface PostPageProps {
  params: {
    postId: string;
  };
}

const PageProps: FC<PostPageProps> = (props) => {
  const { params } = props;
  return <div>{params.postId}</div>;
};

export default PageProps;

import { FC } from "react";

export async function generateStaticParams() {
  const posts= ["post-one", "post-two"];
  
  return posts.map((post) => {

    return ({
      postId: post
    })
  })
}

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

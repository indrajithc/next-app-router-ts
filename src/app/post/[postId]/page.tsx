import { Metadata } from "next";

interface PostPageProps {
  params: {
    postId: string;
  };
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export async function generateMetadata({
  params,
}: PostPageProps): Promise<MetaData> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  );
  const data = (await res.json()) as Post;
  return {
    title: data.title,
  };
}

const PageProps = async (props: PostPageProps) => {
  const { params } = props;
  return <div>{params.postId}</div>;
};

export default PageProps;

import Post from "@/entities/Post/ui/Post";
import { useGetPostByIdQuery } from "@/shared/store/api/api";
import { useParams } from "react-router-dom";
import styles from "./PostPage.module.scss";

export function PostPage() {
  const { postId } = useParams();
  const { data } = useGetPostByIdQuery(parseInt(postId as string));

  return <div className={styles.container}>{data && <Post {...data} />}</div>;
}

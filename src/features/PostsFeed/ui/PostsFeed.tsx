import type { FC } from "react";
import Post from "@/entities/Post/ui/Post";
import styles from "./PostsFeed.module.scss";
import { useUpdateOnScroll } from "../model";

export const PostsFeed: FC = () => {
  const { data, IORef } = useUpdateOnScroll();

  return (
    <div className={styles.container}>
      {data &&
        data.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      <div ref={IORef} style={{ height: "10px" }}></div>
    </div>
  );
};

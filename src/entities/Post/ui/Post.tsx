import { Link, useParams } from "react-router-dom";
import clsx from "clsx";
import type { FC } from "react";
import type { TPost } from "@/shared/types/Post";
import styles from "./Post.module.scss";

const Post: FC<TPost> = (data: TPost) => {
  const params = useParams();

  const classNames = clsx({ wide: params.postId });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={[styles.title, classNames].join(" ")}>
          {data.id}. {data.title}
        </h3>
        <p className={[styles.text, classNames].join(" ")}>{data.body}</p>
      </div>
      {!params.postId && (
        <div className={styles.buttonBlock}>
          <Link className={styles.link} to={`post/${data.id}`}>
            Перейти
          </Link>
        </div>
      )}
    </div>
  );
};

export default Post;

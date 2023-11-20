import { PostsFeed } from "@/features/PostsFeed/ui";
import styles from "./Home.module.scss";

export function HomePage() {
  return (
    <div className={styles.container}>
      <PostsFeed />
    </div>
  );
}

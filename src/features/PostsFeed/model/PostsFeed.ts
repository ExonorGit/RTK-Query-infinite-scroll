import { useGetPostsQuery } from "@/shared/store/api/api";
import { useEffect, useRef } from "react";

export const useUpdateOnScroll = () => {
  const count = useRef<number>(0);
  const { data, refetch } = useGetPostsQuery(count.current);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        count.current += 10;

        await refetch();
      }
    });

    observer.observe(ref.current as Element);

    return () => {
      observer.disconnect();
    };
  }, [refetch]);

  return {data, IORef: ref}
}

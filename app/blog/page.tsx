import "./blog.css";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "@/app/blog/[slug]/components/PostCard";

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return (
    <div className="blog">
      <section className="posts">
        {posts.map((post, idx) => (
          <PostCard key={idx} {...post} className="post posts__post" />
        ))}
      </section>
    </div>
  );
}

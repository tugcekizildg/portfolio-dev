import type { Route } from './+types/index';
import type { PostMeta } from '~/types';
import PostCard from '~/components/PostCard';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Something went wrong');

  const data = await res.json();
  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  return { posts: data };
}
const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-8 bg-gray-900'>
      <h2 className='text-3xl font-bold text-center mb-8'>My Blog 📝</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;

import type { PostMeta } from '~/types';
import { Link } from 'react-router';

type LatestPostsProps = {
  posts: PostMeta[];
  limit?: number;
};

const LatestPosts = ({ posts, limit = 4 }: LatestPostsProps) => {
  return (
    <section className='mt-10 p-6 flex flex-col items-center gap-4 bg-gray-900'>
      <h2 className='text-2xl font-bold mt-2 mb-6 text-gray-200'>
        Latest Posts 📝
      </h2>
      <div className='max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        {posts.slice(0, limit).map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className='flex flex-col gap-2 hover:bg-gray-800 transition-colors duration-300 p-4 rounded-md cursor-pointer'>
            <h3 className='text-lg font-semibold text-purple-300'>
              {post.title}
            </h3>
            <p className='text-sm text-gray-400'>{post.excerpt}</p>
          </Link>
        ))}
      </div>
      {posts.length > limit && (
        <a
          href='/blog'
          className='inline-block text-white py-2 px-6 mb-4 rounded bg-purple-400 hover:bg-purple-500 transition-colors duration-300'>
          View all posts
        </a>
      )}
    </section>
  );
};

export default LatestPosts;

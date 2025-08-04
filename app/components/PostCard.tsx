import type { PostMeta } from '~/types';
import { Link } from 'react-router';
const PostCard = ({ post }: { post: PostMeta }) => {
  return (
    <article className='bg-gray-800 p-6 rounded-lg shadow-md mb-4 cursor-pointer'>
      <h3 className='text-2xl font-semibold text-purple-300 mb-2'>
        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
      </h3>
      <p className='text-gray-400 text-sm mb-2'>
        {new Date(post.date).toDateString()}
      </p>
      <p className='text-gray-300 mb-4'>{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className='text-purple-300 hover:text-purple-400 hover:underline hover:underline-offset-2 transition-colors duration-300'>
        Read More
      </Link>
    </article>
  );
};

export default PostCard;

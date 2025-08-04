import ReactMarkdown from 'react-markdown';
import type { Route } from './+types/details';
import type { PostMeta } from '~/types';
import type React from 'react';
import { Link } from 'react-router';

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;

  const url = new URL('../../../public/posts-meta.json', request.url);
  const res = await fetch(url.href);

  if (!res.ok) throw new Error('Something went wrong');

  const index = await res.json();

  const postMeta = index.find((post: PostMeta) => post.slug === slug);

  if (!postMeta) throw new Response('Not Found', { status: 404 });

  //Dynamically import raw markdown file and render it with ReactMarkdown
  const markdown = await import(`../../posts/${slug}.md?raw`);

  return {
    postMeta,
    markdown: markdown.default,
  };
}
type BlogPostDetailsPageProps = {
  loaderData: {
    postMeta: PostMeta;
    markdown: string;
  };
};
const BlogPostDetailsPage = ({ loaderData }: BlogPostDetailsPageProps) => {
  const { postMeta, markdown } = loaderData;
  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-12 bg-gray-900'>
      <h1 className='text-3xl text-purple-400 font-bold mb-6'>
        {postMeta.title}
      </h1>
      <p className='text-gray-400 text-sm mb-6'>
        {new Date(postMeta.date).toDateString()}
      </p>
      <div className='prose prose-invert max-w-none mb-12'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <Link
        to='/blog'
        className='text-purple-400 hover:text-purple-500 hover:underline hover:underline-offset-4 transition-colors duration-300'>
        🔙 Back to Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailsPage;

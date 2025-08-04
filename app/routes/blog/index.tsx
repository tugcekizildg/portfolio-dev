import { useState } from 'react';
import type { Route } from './+types/index';
import type { PostMeta } from '~/types';
import PostCard from '~/components/PostCard';
import Pagination from '~/components/Pagination';
import PostFilter from '~/components/PostFilter';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const { posts } = loaderData;

  //filtering posts
  const filteredPosts = posts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query)
    );
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexLastPost = currentPage * postsPerPage;
  const indexFirstPost = indexLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexFirstPost, indexLastPost);
  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-8 bg-gray-900'>
      <h2 className='text-3xl font-bold text-center mb-8'>My Blog 📝</h2>

      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />

      {/* Check if matches any posts */}
      <div className='space-y-8'>
        {currentPosts.length === 0 ? (
          <p className='text-gray-400'>No posts found.</p>
        ) : (
          currentPosts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;

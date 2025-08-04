import FeaturedProjects from '~/components/FeaturedProjects';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import AboutPreview from '~/components/AboutPreview';
import LatestPosts from '~/components/LatestPosts';
import type { PostMeta } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Portfolio Dev | Welcome' },
    { name: 'description', content: 'Custom website for The Portfolio Dev' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch('http://localhost:8000/projects'),
    fetch(new URL('/posts-meta.json', url)),
  ]);

  //Error handling
  if (!projectRes.ok || !postRes.ok) throw new Error('Something went wrong');

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
      <LatestPosts posts={posts} />
    </>
  );
};

export default HomePage;

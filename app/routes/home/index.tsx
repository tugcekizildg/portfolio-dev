import FeaturedProjects from '~/components/FeaturedProjects';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import AboutPreview from '~/components/AboutPreview';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Portfolio Dev | Welcome' },
    { name: 'description', content: 'Custom website for The Portfolio Dev' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();
  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <AboutPreview />
    </>
  );
};

export default HomePage;

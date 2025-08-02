import type { Route } from './+types/details';
import type { Project } from '~/types';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${params.id}`);

  if (!res.ok) throw new Response('Project Not Found', { status: 404 });

  const project: Project = await res.json();

  return project;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}
const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData as Project;
  return (
    <>
      <Link
        to={`/projects`}
        className='flex items-center mb-6 text-purple-300 transition-colors duration-300 hover:text-purple-400'>
        <FaArrowLeft className='text-xl mr-2' /> Back to Projects
      </Link>
      <div className='grid md:grid-cols-2 gap-8 items-start cursor-pointer'>
        <div>
          <img
            src={project.image}
            alt={project.title}
            className='w-full rounded-lg shadow-md'
          />
        </div>
        <div>
          <h1 className='text-3xl text-purple-300 font-bold mb-4'>
            {project.title}
          </h1>
          <p className='text-sm text-gray-500 mb-4'>
            {new Date(project.date).toLocaleDateString()} 🟣 {project.category}
          </p>
          <p className='text-md text-gray-300 mb-6'>{project.description}</p>
          <a
            href={project.url}
            target='_blank'
            rel='noreferrer'
            className='inline-block text-white py-2 px-6 rounded bg-purple-400 hover:bg-purple-500 transition-colors duration-300'>
            View Live Site 💻
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;

import { useState } from 'react';
import ProjectCard from '~/components/ProjectCard';
import type { Route } from './+types/index';
import type { Project } from '~/types';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();
  return { projects: data };
}
const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  //Calculate the number of pages needed to display all projects
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  //Get current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  //Pagination button render
  const renderPaginationButtons = () => (
    <div className='flex justify-center gap-2 mt-8'>
      {/* create buttons */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`px-4 py-2 rounded-full cursor-pointer ${
              currentPage === page
                ? 'bg-purple-500 text-white hover:bg-purple-400'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        )
      )}
    </div>
  );

  return (
    <>
      <h2 className='text-3xl font-bold text-center mb-8'>Projects 🚀</h2>

      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {totalPages > 1 && renderPaginationButtons()}
    </>
  );
};

export default ProjectsPage;

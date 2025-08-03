import { useState } from 'react';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import ProjectCard from '~/components/ProjectCard';
import Pagination from '~/components/Pagination';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();
  return { projects: data };
}
const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  //filtering projects
  const [selectedCategory, setSelectedCategory] = useState('All');
  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2;

  const { projects } = loaderData as { projects: Project[] };

  //Get unique categories
  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  //Filter projects by category
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  //Calculate the number of pages needed to display all projects
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  //Get current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <>
      <h2 className='text-3xl font-bold mb-8'>Projects 🚀</h2>

      {/* filtering projects by category */}
      <div className='flex flex-wrap gap-2 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-md text-sm cursor-pointer ${
              selectedCategory === category
                ? 'bg-purple-500 text-white hover:bg-purple-400'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}>
            {category}
          </button>
        ))}
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default ProjectsPage;

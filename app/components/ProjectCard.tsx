import type { Project } from '~/types';
import { Link } from 'react-router';
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      className='block transform transition duration-300 hover:scale-[1.02]'
      to={`/projects/${project.id}`}>
      <div className='bg-gray-800 border-purple-700 rounded-lg overflow-hidden shadow-sm transition duration-300 hover:shadow-md cursor-pointer'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-60 object-cover'
        />
        <div className='p-5'>
          <h3 className='text-2xl font-semibold mb-2 text-purple-300'>
            {project.title}
          </h3>
          <p className='text-sm text-gray-300 mb-2'>{project.description}</p>
          <div className='flex justify-between items-center text-sm text-purple-200'>
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

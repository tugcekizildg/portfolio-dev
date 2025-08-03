type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;
  return (
    <div className='flex justify-center gap-2 mt-8'>
      {/* create buttons */}
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          className={`px-4 py-2 rounded-full cursor-pointer ${
            currentPage === idx + 1
              ? 'bg-purple-500 text-white hover:bg-purple-400'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => onPageChange(idx + 1)}>
          {idx + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

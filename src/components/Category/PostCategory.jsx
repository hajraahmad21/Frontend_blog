// eslint-disable-next-line react/prop-types
const PostCategory = ({ categories, onCategorySelect , onClearFilters }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-10">
      {/* All Articles Category */}
      <button
        className="h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
        onClick={onClearFilters}
      >
        All Articles
      </button>
      {
        // eslint-disable-next-line react/prop-types
        categories?.map((category) => (
          <a
            key={category._id}
            className="h-10 inline-flex items-center justify-center w-full sm:w-auto text-center py-3 px-4 rounded-full bg-white border border-gray-200 text-sm font-semibold hover:bg-gray-50 focus:ring focus:ring-orange-200 transition duration-200"
            href="#"
            onClick={() => onCategorySelect(category._id)}
          >
            {category.categoryName} ({category.posts?.length})
          </a>
        ))
      }
    </div>
  );
};

export default PostCategory;

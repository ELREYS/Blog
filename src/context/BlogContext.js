import createDataContext from "../context/createDataContext";

//const BlogContext = React.createContext();



const blogReducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case "deleteBlogPost":
      return state.filter(blogPost => {
        //blogPost.id !== action.payload

        if (blogPost.id !== action.payload) {
          return state;
        }
      });

    case "addBlogPost":
      return [
        ...state,
        { blog: `Blog #  - ${Math.floor(Math.random() * 9999)}`, id: `${Math.floor(Math.random() * 9999)}` }
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: "addBlogPost" });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);

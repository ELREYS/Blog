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
      console.log(action);

      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content,
          id: `${Math.floor(Math.random() * 9999)}`
        }
      ];
    case "editBlogPost":
      
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id){
          console.log(action.payload);
          
          return action.payload;
        }else{
          return blogPost;
        }
      })
      
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content,callback) => {
    dispatch({ type: "addBlogPost", payload: { title, content,callback } });
    callback();
  };
  
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return (id, title, content,callback) => {
    dispatch({ type: "editBlogPost", payload: { id, title, content,callback } });
    callback();
  };
  
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  []
);

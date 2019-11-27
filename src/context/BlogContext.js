import createDataContext from "../context/createDataContext";
import jsonServer from "../api/jsonServer";

//const BlogContext = React.createContext();

//Request API

try {
} catch (error) {}

BlogPosts = [];

const blogReducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case 'getBlogPosts':
      
      return action.payload
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
        {
          title: action.payload.title,
          content: action.payload.content,
          id: `${Math.floor(Math.random() * 9999)}`
        }
      ];
    case "editBlogPost":
      return state.map(blogPost => {
        if (blogPost.id === action.payload.id) {
          console.log(action.payload);

          return action.payload;
        } else {
          return blogPost;
        }
      });

    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return async (title, content, callback) => {
    //dispatch({ type: "addBlogPost", payload: { title, content, callback } });
    //callback();
    await jsonServer.post('/blogposts',{title,content})
    if (callback){
      callback()
    }
  };
  
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`blogposts/${id}`)
    dispatch({ type: "deleteBlogPost", payload: id });
  };
};

const editBlogPost = dispatch => {
  return  async(id, title, content, callback) => {
    
    await jsonServer.put(`blogposts/${id}`,{title,content})

    dispatch({
      type: "editBlogPost",
      payload: { id, title, content, callback }
    });
    callback();
  };
};

const getBlogPosts = dispatch => {
  
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({ type: "getBlogPosts", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost,getBlogPosts },
  []
);

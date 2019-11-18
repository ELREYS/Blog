
import  createDataContext from '../context/createDataContext'

//const BlogContext = React.createContext();

const listofBlogs = [
  {
    blog: "First Blog 1",
    id: "1"
  },
  {
    blog: "First Blog 2",
    id: "2"
  },
  {
    blog: "First Blog 3",
    id: "3"
  }
];

const blogReducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case "addBlogPost":
      //console.log(state);
      return [...state, { blog: "Blog", id: `${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch,message) =>{
    return () =>{
        dispatch({type:'addBlogPost'});
        console.log(message);
        
    }
    
}



export const {Context,Provider} =  createDataContext(blogReducer,{addBlogPost},listofBlogs);

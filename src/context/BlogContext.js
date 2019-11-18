
import  createDataContext from '../context/createDataContext'

//const BlogContext = React.createContext();

const listofBlogs = [
  {
    blog: "Blog #",
    id: "1"
  },
  {
    blog: "Blog #",
    id: "2"
  },
  {
    blog: "Blog #",
    id: "3"
  }
];

const blogReducer = (state, action) => {
  // state === {data:string ,id:string}
  // action === {type: 'addBlogPost' || 'deleteBlogPost' || 'editBlogPost'}
  switch (action.type) {
    case "addBlogPost":
      //console.log(state);
      return [...state, { blog: "Blog #",id:`${state.length + 1}` }];
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

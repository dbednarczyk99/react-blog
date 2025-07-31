import shortid from "shortid";

//selectors
export const getPostById = (state, postId) => state.posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const REMOVE_POST = createActionName('REMOVE_POST');
export const ADD_POST = createActionName('ADD_POST');

export const removePost = payload => ({ type: REMOVE_POST, payload});
export const addPost = payload => ({ type: ADD_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => (post.id !== action.payload));
    case LOAD_POSTS:
      return {
        ...statePart, ...action.payload
      };
    case ADD_POST:
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return [...statePart, { ...action.payload, id: shortid(), publishedDate: date}]
    default:
      return statePart;
  };
};

export default postsReducer;
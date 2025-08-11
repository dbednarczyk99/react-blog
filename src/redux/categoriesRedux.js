import shortid from "shortid";

//selectors
export const getCategoryById = (state, categoryId) => state.categories.find(category => category.id === categoryId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const REMOVE_POST_FROM_CATEGORY = createActionName('REMOVE_POST_FROM_CATEGORY');
export const ADD_POST_TO_CATEGORY = createActionName('ADD_POST_TO_CATEGORY');
export const ADD_CATEGORY = createActionName('ADD_CATEGORY');
export const REMOVE_CATEGORY = createActionName('REMOVE_CATEGORY');

// action creators
// payload = { categoryId, postId }
export const removePostFromCategory = payload => ({ type: REMOVE_POST_FROM_CATEGORY, payload });
export const addPostToCategory = payload => ({ type: ADD_POST_TO_CATEGORY, payload });

// payload = { name: 'New category name' }
export const addCategory = payload => ({ type: ADD_CATEGORY, payload });
// payload = { categoryId: '1' }
export const removeCategory = payload => ({ type: REMOVE_CATEGORY, payload });


const categoriesReducer = (statePart = [], action) => {

  switch (action.type) {
    case REMOVE_POST_FROM_CATEGORY:
      return statePart.map(category =>
        category.id === action.payload.categoryId
          ? { ...category, postsId: category.postsId.filter(id => id !== action.payload.postId) }
          : category
      );
    case ADD_POST_TO_CATEGORY:
      return statePart.map(category =>
        category.id === action.payload.categoryId
          ? { ...category, postsId: [...category.postsId, action.payload.postId] }
          : category
      );
    case ADD_CATEGORY:
      return [
        ...statePart,
        {
          id: shortid(), // unikalne ID
          name: action.payload.name,
          postsId: []
        }
      ];
    case REMOVE_CATEGORY:
      return statePart.filter(category => category.id !== action.payload.categoryId);
    default:
      return statePart;
  };
};

export default categoriesReducer;
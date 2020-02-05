import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actionTypes';
import { StudentsList, StudentActionTypes } from './types';

const initialState: StudentsList = {
  students: [],
};

export default function reduce(state = initialState, action: StudentActionTypes): StudentsList {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        students: [...state.students, action.payload]
      };
    case EDIT_STUDENT:
      return {
        students: [...state.students, action.payload]
      };
    default:
      return state;
  }
};

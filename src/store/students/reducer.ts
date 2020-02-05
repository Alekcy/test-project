import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT } from './actionTypes';
import { StudentsList, StudentActionTypes } from './types';

const initialState: StudentsList = {
  students: [
      {
          FIO: 'qwd qwdqw qwdqw',
          birthday: '123123',
          academicPerformance: 'отл',
      },
      {
          FIO: '1',
          birthday: '2',
          academicPerformance: '3',
      }
  ],
};

export default function reduce(state = initialState, action: any): StudentsList {
  switch (action.type) {
    case ADD_STUDENT:
        return {
            students: [...state.students, action.payload]
        };
    case EDIT_STUDENT:
        return {
            students: state.students.map((student, index) => {
                return action.payload.studentOld.tableData.id === index
                    ? action.payload.studentNew
                    : student
            })
        };
    case DELETE_STUDENT:
        console.log(action.payload)
        state.students.splice(action.payload.tableData.id, 1);
        console.log(state.students)
        /* data.splice(data.indexOf(oldData), 1);*/
        return {
            students: [...state.students]
        };
    default:
        return state;
  }
};

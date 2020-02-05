import { ADD_STUDENT, EDIT_STUDENT, DELETE_STUDENT, LOAD_STUDENTS_FROM_STORAGE } from './actionTypes';
import { StudentsList, StudentActionTypes } from './types';

const initialState: StudentsList = {
  students: [],
};

export default function reduce(state = initialState, action: any): StudentsList {
    switch (action.type) {
        case ADD_STUDENT:
            const studentsAdd = [...state.students, action.payload];
            localStorage.setItem('studentList', JSON.stringify(studentsAdd));
            return {
                students: studentsAdd
            };
        case EDIT_STUDENT:
            const studentsEdit = state.students.map((student, index) => {
                return action.payload.studentOld.tableData.id === index
                    ? action.payload.studentNew
                    : student
            });
            localStorage.setItem('studentList', JSON.stringify(studentsEdit));
            return {
                students: studentsEdit,
            };
        case DELETE_STUDENT:
            state.students.splice(action.payload.tableData.id, 1);
            localStorage.setItem('studentList', JSON.stringify(state.students));
            return {
                students: [...state.students]
            };
        case LOAD_STUDENTS_FROM_STORAGE:
            return {
                students: JSON.parse(localStorage.getItem('studentList') || '[]')
            };
        default:
            return state;
    }
};

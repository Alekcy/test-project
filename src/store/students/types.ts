import {ADD_STUDENT, DELETE_STUDENT} from './actionTypes'

export interface Student {
    FIO: string
    birthday: string
    academicPerformance: string,
}

export interface StudentsList {
    students: Student[]
}

export interface AddStudentAction {
    type: typeof ADD_STUDENT
    payload: Student
}

export interface EditStudentAction {
    type: typeof EDIT_STUDENT
    payload: {
        student: Student,
        id: number,
    }
}

export interface DeleteStudentAction {
    type: typeof DELETE_STUDENT
    payload: {
        id: number,
    }
}

export type StudentActionTypes = AddStudentAction | EditStudentAction | DeleteStudentAction;

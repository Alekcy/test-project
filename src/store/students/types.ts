import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, LOAD_STUDENTS_FROM_STORAGE } from './actionTypes'

export interface Student {
    FIO: string
    birthday: string
    academicPerformance: number
    tableData?: any
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
        studentNew: Student,
        studentOld: Student,
    }
}

export interface DeleteStudentAction {
    type: typeof DELETE_STUDENT
    payload: Student
}

export interface LoadStudentsAction {
    type: typeof LOAD_STUDENTS_FROM_STORAGE
}

export type StudentActionTypes = AddStudentAction | EditStudentAction | DeleteStudentAction | LoadStudentsAction;

import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT, LOAD_STUDENTS_FROM_STORAGE } from './actionTypes';
import { Student, LoadStudentsAction, DeleteStudentAction, EditStudentAction, AddStudentAction } from './types'

export function addStudent(newStudent: Student): AddStudentAction {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
}

export function editStudent(studentNew: Student, studentOld: Student): EditStudentAction {
    return {
        type: EDIT_STUDENT,
        payload: {
          studentNew,
          studentOld,
        }
    }
}

export function deleteStudent(studentOld: Student): DeleteStudentAction {
    return {
        type: DELETE_STUDENT,
        payload: studentOld
    }
}

export function loadStudentsFromStorage(): LoadStudentsAction {
    return {
        type: LOAD_STUDENTS_FROM_STORAGE
    }
}


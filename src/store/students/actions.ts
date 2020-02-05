import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from './actionTypes';
import { Student, StudentActionTypes } from './types'

export function addStudent(newStudent: Student): StudentActionTypes {
    return {
        type: ADD_STUDENT,
        payload: newStudent
    }
}

export function editStudent(student: Student, id): StudentActionTypes {
    return {
        type: EDIT_STUDENT,
        payload: {
          student,
          studentId: id,
        }
    }
}

export function deleteStudent(id: number): StudentActionTypes {
    return {
        type: DELETE_STUDENT,
        payload: id
    }
}


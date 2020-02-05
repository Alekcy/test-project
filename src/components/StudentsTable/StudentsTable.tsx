import * as React from 'react';
import { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { addStudent, editStudent, deleteStudent, loadStudentsFromStorage } from "../../store/students/actions";
import { tableIcons } from "./tableIcons";

export function StudentsTable() {
    const students = useSelector(store => store.student.students);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadStudentsFromStorage());
    }, []);
    return (
        <div>
            <MaterialTable
                icons={tableIcons}
                columns={[
                    { title: "ФИО", field: "FIO" },
                    { title: "Дата рождения", field: "birthday", type: "date" },
                    {
                        title: "Успеваемость",
                        field: "academicPerformance",
                        lookup: { 2: "Неуд", 3: "Удовл", 4: "Хор", 5: "Отл" }
                    }
                ]}
                data={students}
                title="Список студентов"
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                dispatch(addStudent(newData));
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    dispatch(editStudent(newData, oldData));
                                }
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                dispatch(deleteStudent(oldData));
                            }, 600);
                        }),
                }}
            />
        </div>
    );
};
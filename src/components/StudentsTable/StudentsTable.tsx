import * as React from 'react';
import { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable, { MTableEditRow } from 'material-table';
import { addStudent, editStudent, deleteStudent, loadStudentsFromStorage } from "../../store/students/actions";
import { tableIcons } from "./tableIcons";
import { TextField, Select, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Clear from '@material-ui/icons/Clear';

interface IErrors {
    FIO: string | null,
    birthday: string | null,
    academicPerformance: string | null
}

export function StudentsTable() {
    const students = useSelector(store => store.student.students);
    const dispatch = useDispatch();
    const [errors, setErrors] = useState<IErrors>({
        FIO: null,
        birthday: null,
        academicPerformance: null
    });
    useEffect(() => {
        dispatch(loadStudentsFromStorage());
    }, []);

    const validateFields = (data: IErrors) => {
        if (!data.FIO || !data.birthday || !data.academicPerformance) {
            setErrors({
                FIO: !data.FIO ? 'Empty field' : null,
                birthday: !data.birthday ? 'Empty field' : null,
                academicPerformance: !data.academicPerformance ? 'Empty field' : null,
            });
            return false;
        }
        return true;
    };

    const resetErrors = () => {
        setErrors({
            FIO: null,
            birthday: null,
            academicPerformance: null
        })
    };

    return (
        <div>
            <MaterialTable
                icons={{
                    ...tableIcons,
                    Clear: forwardRef<SVGSVGElement>((props, ref) => (
                        <Clear
                            {...props}
                            onClick={() => resetErrors()}
                            ref={ref}
                        />
                    )),
                }}
                columns={[
                    {
                        title: "First name, Last name",
                        field: "FIO",
                        editComponent: props => (
                            <TextField
                                required type="text" value={props.value}
                                helperText={errors.FIO} error={!!errors.FIO}
                                onChange={e => props.onChange(e.target.value)}
                            />)
                    },
                    {
                        title: "Birthday",
                        field: "birthday",
                        type: "date",
                        editComponent: props => (
                            <TextField
                                required type="date" value={props.value}
                                helperText={errors.birthday} error={!!errors.birthday}
                                onChange={e => props.onChange(e.target.value)}
                            />
                        )
                    },
                    {
                        title: "Academic performance",
                        field: "academicPerformance",
                        editComponent: props =>  (
                            <FormControl error={!!errors.academicPerformance}>
                                <Select
                                    id="select" value={props.value}
                                    error={!!errors.academicPerformance}
                                    onChange={e => props.onChange(e.target.value)}
                                >
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                                {
                                    !!errors.academicPerformance &&
                                    <FormHelperText>{errors.academicPerformance}</FormHelperText>
                                }
                            </FormControl>
                        )
                    }
                ]}
                data={students}
                title="Students list"
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if (validateFields(newData)) {
                                setTimeout(() => {
                                    resolve();
                                    dispatch(addStudent(newData));
                                    resetErrors();
                                }, 600);
                            } else {
                                reject();
                            }
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                if (validateFields(newData)) {
                                    setTimeout(() => {
                                        resolve();
                                        if (oldData) {
                                            dispatch(editStudent(newData, oldData));
                                            resetErrors();
                                        }
                                    }, 600);
                                } else {
                                    reject();
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
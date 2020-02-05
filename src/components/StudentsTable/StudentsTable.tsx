import * as React from 'react';
import { useState, useEffect, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MaterialTable from 'material-table';
import { addStudent, editStudent, deleteStudent, loadStudentsFromStorage } from "../../store/students/actions";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef<SVGSVGElement>((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef<SVGSVGElement>((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef<SVGSVGElement>((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef<SVGSVGElement>((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef<SVGSVGElement>((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef<SVGSVGElement>((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef<SVGSVGElement>((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef<SVGSVGElement>((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef<SVGSVGElement>((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef<SVGSVGElement>((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef<SVGSVGElement>((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef<SVGSVGElement>((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef<SVGSVGElement>((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef<SVGSVGElement>((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef<SVGSVGElement>((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef<SVGSVGElement>((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef<SVGSVGElement>((props, ref) => <ViewColumn {...props} ref={ref} />)
};

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
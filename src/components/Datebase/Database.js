import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import List from '../ListComponents/List'
import { createBackup, deleteBackup, getBackups, restore } from '../../actions/database';
import { useTranslation } from 'react-i18next';

const Database = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [rendered, setRendered] = useState(false);

    const { backups } = useSelector(state => ({
        backups: state.database.backups
    }), shallowEqual)

    useEffect(() => {
        if(rendered){
            dispatch(getBackups(t))
        }
        
        if( ! rendered ) {
            setRendered(true);
        }
    }, [dispatch, t, rendered])

    const action = (item) => {
        return (
            <td>
                <button
                    onClick={() => { dispatch(restore(item.backupName, t)) }}
                    style={{ marginRight: "3px"}}
                    className="btn btn-outline-warning btn-sm float-left">
                    <i className="bi-upload" />
                </button>
                <button
                    onClick={() => { dispatch(deleteBackup(item.backupName, t)) }}
                    className="btn btn-outline-danger btn-sm float-left">
                    <i className="bi-trash" />
                </button>
            </td>
        )
    }

    return (
        <List
            name="backups"
            records={backups}
            k="backupName"
            columns={['backupName']}
            createRecord={() => dispatch(createBackup(t))}
            refreshRecords={() => dispatch(getBackups(t))}
            action={action}
        />
    );
};

export default Database;
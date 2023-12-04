import React, {ChangeEvent, useEffect, useState} from "react";
type ProfileStatusProps = {
    status: string
    updateStatus: (val: string) => void
}
export const ProfileStatusWitchHooks = (props:ProfileStatusProps)=> {
    let [editMode,SetEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        const raw = localStorage.getItem('status');
        if (raw) {
            setStatus((raw));
        }
    }, []);

    useEffect(() => {
    localStorage.setItem('status',(status))
    }, [status]);

    const activateEditMode = () => {
        SetEditMode(true)
    }
    const deactivateEditMode = () => {
        SetEditMode(false)
        props.updateStatus(status)
    }
const onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
    setStatus(event.currentTarget.value)
}
    return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{status || '----'}</span>
                    </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                   value={status} />
                </div>
                }
            </div>
        )

}
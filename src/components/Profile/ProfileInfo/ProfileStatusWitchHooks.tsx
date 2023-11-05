import React, {ChangeEvent, useEffect, useState} from "react";
type ProfileStatusProps = {
    status: string
    updateStatus: (val: string) => void
}
export const ProfileStatusWitchHooks = (props:ProfileStatusProps)=> {
    let [editMode,SetEditMode] = useState(false)
    let [status, SetStatus] = useState(props.status)
    useEffect(()=>{
        SetStatus(props.status)
    },[props.status])
    const activateEditMode = () => {
        SetEditMode(true)
    }
    const deactivateEditMode = () => {
        SetEditMode(false)
        props.updateStatus(status)
    }
const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
    SetStatus(e.currentTarget.value)
}
    return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                    </div>
                }
                {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange}
                    value={status}/>
                </div>
                }
            </div>
        )

}
import React, {ChangeEvent } from "react";
type ProfileStatusProps = {
    status: string
    updateStatus: (val: string) => void
}
export class ProfileStatus extends React.Component<ProfileStatusProps, any> {
    state = {
        editMode: false,
        status:''
    }
    activateEditMode =()=>{
       this.setState({editMode:true})
    }
    deactivateEditMode = ()=>{
    this.setState({editMode:false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange =(e:ChangeEvent<HTMLInputElement>)=>{
 this.setState({
     state:e.currentTarget.value
 })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusProps>, prevState: Readonly<any>, snapshot?: any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status:this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           value={this.state.status} onBlur={this.deactivateEditMode}
                           autoFocus={true}/>
                </div>
                }
            </div>
        )
    }
}
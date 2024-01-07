import React from "react";
import s from "./ProfileInfo.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";
import {Input, Textarea} from "../../FormsControls/FormsControls";
import {ProfileType, ProfType} from "../../redux/profile-reducer";

export type ProfileDataFormType = {
    profile: ProfType;
    fullName: string
    aboutMe: string
    lookingForAJobDescription: string
    lookingForAJob: boolean;
    MyProfessionalSkills:string
    error:string
    saveProfile: (profile: ProfType) => Promise<void>
    //initialValues:ProfType
}

const ProfileDataMyForm: React.FC<InjectedFormProps<ProfileDataFormType, ProfileType>
    & { profile: ProfType }> = ({ handleSubmit, profile
                                                             ,error }) => {
    // Ваш компонент


        return (
            <form className={s.userInfo} onSubmit={handleSubmit}>
                <div>
                    <button type={'submit'}>Save</button>
                </div>
                { error && <div className={s.formSummaryError}>
                    {error}
                </div>
                }
                <div><b>AboutMe: </b><Field
                    placeholder={"AboutMe"}
                    name={"aboutMe"}
                    validate={[]}
                    component={Input}
                    //type={"checkbox"}
                />
                </div>
              {/*  { error && <div className={s.formSummaryError}>
                    {error}
                </div>
                }*/}
                <div>
                    <b>FullName: </b>
                    <Field
                        placeholder={"Full name"}
                        name={"fullName"}
                        validate={[requiredField]}
                        component={Input}
                    />
                </div>
                <div>
                    <b>LookingForAJob</b>:
                    <Field
                        placeholder={"lookingForAJob"}
                        name={"lookingForAJob"}
                        validate={[]}
                        component={Input}
                        type={"checkbox"}/>
                </div>
                <div><b>My professional skills: </b>
                    <Field
                        placeholder={"MyProfessionalSkills"}
                        name={"MyProfessionalSkills"}
                        validate={[]}
                        component={Textarea}
                    />
                    <div>
                        <b>Contacts</b>:{Object.keys(profile.contacts).map(key=>{

                            return <div className={s.contacts} key={key}>

                            <b>{key}
                                <Field
                                    placeholder={key}
                                    name={`contacts.${key}`} // Обратите внимание на правильный синтаксис для работы с объектом в redux-form
                                    validate={[]}
                                    component={Input}
                                />

                             {/*   :{createFild(key,'contacts' + key, [], Input )}*/}
                            </b>
                            </div>
                    })}
                    </div>
                </div>
            </form>
        );
    };
const ProfileDataReduxForm = reduxForm<ProfileDataFormType, ProfileType>({
    form: "edit-profile",
})(ProfileDataMyForm);

export default ProfileDataReduxForm;

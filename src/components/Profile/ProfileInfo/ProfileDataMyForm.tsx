import React from "react";
import s from "./ProfileInfo.module.css";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { requiredField } from "../../../utils/validators/validators";
import { Input } from "../../FormsControls/FormsControls";
import { ProfileType } from "../../redux/profile-reducer";

type ProfileDataFormProps = {
    profile: ProfileType;
    isOwner: boolean;
    goToEditMode: () => void;
};

const ProfileData: React.FC<InjectedFormProps<ProfileType,
    ProfileDataFormProps> & ProfileDataFormProps> =
    ({profile, isOwner, goToEditMode, handleSubmit
    }) => {
    const {
        aboutMe,
        fullName,
        lookingForAJob,
        lookingForAJobDescription,
        contacts
    } = profile.profile;

    return (
        <form className={s.userInfo} onSubmit={handleSubmit}>
            <div>
                <button type="submit">Save</button>
            </div>

            <div>
                <b>AboutMe: </b>
                {profile.profile.aboutMe}
            </div>
            <div>
                <b>FullName: </b>
                <Field
                    placeholder={"Full name"}
                    name={"fullName"}
                    validate={[]}
                    component={Input}
                />
            </div>
            <div>
                <b>LookingForAJob</b>: {profile.profile.lookingForAJob ? "Yes" : "No"}
            </div>
            {profile.profile.lookingForAJob ? (
                <div>
                    <b>My professional skills: </b>
                    {profile.profile.lookingForAJobDescription}
                </div>
            ) : null}

            <div>{profile.profile.contacts?.facebook}</div>
            <div>{profile.profile.contacts?.github}</div>
            <div>
                <b>Contacts: </b>
                {profile.profile.contacts &&
                    Object.keys(profile.profile.contacts).map((key) => {
                        return (
                            <div key={key}>
                                <b>{key}: </b>
                                {profile.profile.contacts[key]}
                            </div>
                        );
                    })}
            </div>
        </form>
    );
};

const ProfileDataReduxForm = reduxForm<ProfileType, ProfileDataFormProps>({
    form: "profileDataForm", // Уникальное имя вашей формы
})(ProfileData);

export default ProfileDataReduxForm;

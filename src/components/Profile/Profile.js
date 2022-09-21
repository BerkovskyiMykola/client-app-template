import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../../actions/message";
import { editProfile, getProfile } from "../../actions/profile";
import { FieldInput } from "../FormComponents";
import ModalWindow from "../ModalWindow/ModalWindow"
import {
    Row,
    Col,
    Container,
    Button
} from 'reactstrap';

export default function Profile() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [rendered, setRendered] = useState(false);

    const [modalEdit, setModalEdit] = useState(false);
    const [model, setModel] = useState({ lastname: "", firstname: "" });

    const { profile, message } = useSelector(state => ({
        profile: state.profile.profile,
        message: state.message.message
    }), shallowEqual)

    useEffect(() => {
        if(rendered){
            dispatch(getProfile());
        }
        
        if(!rendered) {
            setRendered(true);
        }
    }, [dispatch, rendered])

    const editRecord = () => {
        dispatch(editProfile(model.lastname, model.firstname, t))
            .then(() => {
                setModalEdit(false);
                dispatch(clearMessage());
            })
            .catch(() => { })
    }

    return (
        <Container>
            <div class="container-fluid bg-dark text-white rounded p-5">
                <div class="container bg-dark p-5">
                    <Row>
                        <Col sm="10" className="text-left">
                            <h3>
                                <strong>{t("profile")}: {profile.lastname} {profile.firstname}</strong>
                            </h3>
                        </Col>
                        <Col sm="2" className="text-right">
                            <Button color="success" onClick={() => { dispatch(clearMessage()); setModalEdit(true); setModel({ lastname: profile.lastname, firstname: profile.firstname }); }}>
                                <i className="bi-pencil-square" />
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
            <br />
            <p>
                <strong>{t("email")}:</strong> {profile.email}
            </p>
            <p>
                <strong>{t("role")}:</strong> {profile.role}
            </p>
            <ModalWindow modal={modalEdit} deactiveModal={() => { setModalEdit(false); }} textHeader={t("edit")}
                textButton={t("edit")} method={editRecord} message={message}
            >
                <FieldInput name="firstname" model={model} setModel={setModel} minLength={2} maxLength={30} />
                <FieldInput name="lastname" model={model} setModel={setModel} minLength={2} maxLength={30} />
            </ModalWindow>
        </Container>
    );
}
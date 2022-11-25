import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseapp from './firebase';

export function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [subTitle, setSubtitle] = useState('');
    const [loading, setLoading] = useState(false);

    function onChangeUserName({ target: { value = '' } }) {
        setUserName(value);
    }

    function onChangePassword({ target: { value = '' } }) {
        setPassword(value);
    }

    function onSubmit(event: any) {
        event.preventDefault();
        setLoading(true);
        const auth = getAuth(firebaseapp);
        signInWithEmailAndPassword(auth, userName, password).then(() => {
            setSubtitle("Successfully logged in");
        }).catch(() => {
            setSubtitle("Failed to log in");
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <Card title="Login User" subTitle={subTitle} style={{ width: '25em', position: 'absolute', top: '30%', left: '40%' }} >
            <div className="grid p-fluid">
                <div className="col-12 md:col-12">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Username" value={userName} onChange={onChangeUserName} />
                    </div>
                </div>
                <div className="col-12 md:col-12">
                    <div className="p-inputgroup">
                        <span className="p-inputgroup-addon">
                            <i className="pi pi-eye-slash"></i>
                        </span>
                        <Password value={password} onChange={onChangePassword} toggleMask />
                    </div>
                </div>
                <div className="col-12 md:col-12">
                    <Button label="Submit" loading={loading} onClick={onSubmit} />
                </div>
            </div>
        </Card>
    )
}
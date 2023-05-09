import React, { useContext } from 'react';
import { SettingsContext } from '../App';

const Settings = () => {
    const {username, handleUsername} = useContext(SettingsContext);
    return (
        <div>
            <input type="text" name="usename" id="username" onChange={handleUsername} />
        </div>
    );
};

export default Settings;
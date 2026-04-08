import React, { useState, useEffect } from 'react';
import axios from 'axios';

const vtsLogin = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const login = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/vts-login', {
                    params: {
                        userAccount: 'SaraExpress1',
                        userPassword: 'SEd@54321'
                    }
                });
                
                if (res.data.result === 0) {
                    setData(res.data);
                } else {
                    setError(res.data.message || 'Login Failed');
                }
            } catch (err) {
                setError('Server error or connection failed');
            }
        };

        login();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>VTS Status</h2>
            <hr />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {data ? (
                <div style={{ color: 'green' }}>
                    <p>✅ Login Success!</p>
                    <p>Session: {data.jsessionid}</p>
                </div>
            ) : (
                !error && <p>Loading...</p>
            )}
        </div>
    );
};

export default vtsLogin;
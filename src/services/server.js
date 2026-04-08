import express from "express";
import axios from "axios";
import cors from "cors";
import md5 from "md5";
import https from "https";
import moment from "moment"; // ❗ Nishchit hoye nin 'npm install moment' korechen

const app = express();
app.use(cors());
app.use(express.json());

// SSL errors ignore korar jonno
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.get('/api/vts-login', async (req, res) => {
    const { account, password } = req.query;

    if (!account || !password) {
        return res.status(400).json({ error: "Account and Password are required!" });
    }

    try {
        // VTS Encryption Logic
        const firstHash = md5(password).toUpperCase();
        //const hashedPassword = md5(firstHash).toUpperCase();
        const time = moment().format('YYYY-MM-DD');

        // URL theke '?' soriye deya hoyeche
        const vtsUrl = `https://vts.adlmotoviewer.com/StandardApiAction_login.action`;

        console.log(`Attempting login for: ${account}`);

        const response = await axios.get(vtsUrl, {
            params: {
                account: account,
                password: firstHash,
                time: time
            },
            httpsAgent: new https.Agent({ rejectUnauthorized: false }),
            timeout: 10000 
        });

        res.json(response.data);
    } catch (error) {
        console.error("VTS API Error:", error.message);
        res.status(500).json({ error: "Internal Server Error", message: error.message });
    }
});

// ❗ EI PART-TI APNAR CODE-E CHILO NA
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`-----------------------------------------`);
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 Waiting for requests...`);
    console.log(`-----------------------------------------`);
});
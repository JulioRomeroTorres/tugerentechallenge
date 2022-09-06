import {config} from 'dotenv';

config();

export default {
    host: process.env.HOST || "",
    dabase: process.env.DATABASE || "", 
    root: process.env.ROOT || "",
    password: process.env.PASSWORD || "",
    port: process.env.PORT || "3000",
};
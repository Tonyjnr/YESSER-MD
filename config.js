const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtwT05PMnBYLzErZURYeXNObGwrL3ZMUXdDdUpjVjIrQWVWbjhWL0UyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUQvUjVyaVZpMU1KNTFCWHVWRFJLTnMwVkZuS0FRb1dMNUo3M2FVL2hTWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR2VBZURPYzNJOVlCbzZJMElrS2xhbG9tYzl5a0lhU3FMdHRrWHpsNUdVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzNlUraE9PTTRhN1MrbXdsRXpjdkNkTXZPNTA3Ty9UZWgydXdLOWVXL1VnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIdHYzVzZJYkdhQ1h6RnI0cyttTDZncjhTZUhmVi9Gbjl3Q21LTk9GVmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1qUXphTjArMGFRZmZmNjY1L0lqWjdLbVJIcG8xWE84cGdPRm1Ld2hHeW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0VSR0V2UEF3TklySVRsTTAvSk5Ld3J0MXg5U1ZIQW1OZGs1WWNNRWxHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielJkQXowVURSTVVOOCt5cXR2d0RqQ2wzeVBsemQ3dUV3M2x6ZjJjYWtCYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhiTWpTZ3BHOFZHc3B0NlFiRzBCcUtsVFM1Z1BOdFZ6WUhTQnRHakQrczlZNWxDV1RTOFE2RFdrTUQ0OTM5d25FV0llSFlEd2Y0UXpsbm5HM1pqRmpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiYVFDVGxibE50R0RxdWxTNUw1MzJSWHRvSEU3YlRoNG5tRFRxbktFVlRTMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiamNIUkI2R3NTdS1ERGs1Z25mN1FfQSIsInBob25lSWQiOiJkN2ZhOGE0Ni0yYzNiLTRjMzUtODhmMy03MTIzMmZkZjZlYmMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicFNhcTVrTFlzVnhXcmdDSlErQ3V2eExlTmhrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRoSXRDWUs0TlRBWUN5ZG9DNlg5WUVkWU9jbz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJMRVJSSjlCQyIsIm1lIjp7ImlkIjoiMjM0OTE1MzIzMjAzODo3OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmpOdCswR0VKZlc5N3dHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSzlHRU5qT2VYYWkxQWJDQjJ2bW1yODRLT0tWbmJyNWRVTFpzYmpkMTB5ST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZmJ6TVB1bXBoSHUrMWhWZllWRDYybmVZM1hta3NnNW1hR2FOaUpsNUZnbVFjZVJteE5XQ3FNQXdQNE04dmlFT1Y4YVFhSW8yWlk4NVB6cjRpWjdnQkE9PSIsImRldmljZVNpZ25hdHVyZSI6ImNZUllsUmgyTk1kUjdlcXVTY1F5aERJUGJpWnFwYWh6UDdFVVdaYmgrNGpDQlRIcmRFcDhMVG5YaDJDVys0d3F6OXh5ZmNjK3JDZWo3S2NFUTBLS2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTE1MzIzMjAzODo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTdlJoRFl6bmwyb3RRR3dnZHI1cHEvT0NqaWxaMjYrWFZDMmJHNDNkZE1pIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4NDAyNTk2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0yRiJ9",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    MODE: process.env.MODE || "private",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "ᵀⁱᵗᵃⁿReaper",
    STATUS_REACT: process.env.STATUS_REACT || "👀",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

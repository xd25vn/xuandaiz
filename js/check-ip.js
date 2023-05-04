var maxtheard;
var testurl;
var lsat_date = 0;
var CountryCode_ThanhDieu = {
    US: "United States",
    CA: "California",
    HK: "HongKong (Trung Quá»‘c)",
    TW: "Taiwan (ÄĂ i Loan)",
    SG: "Singapore",
    JP: "Japan",
    KR: "Korea",
    AU: "Australia",
    NZ: "New Zealand",
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa (United States)",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    VG: "British Virgin Islands (United Kingdom)",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CV: "Cape Verde",
    KY: "Cayman Islands (United Kingdom)",
    CF: "Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CO: "Colombia",
    KM: "Comoros",
    CD: "Congo (Kinshasa)",
    CK: "Cook Islands (New Zealand)",
    CR: "Costa Rica",
    CI: "Ivory Coast",
    HR: "Croatia",
    CU: "Cuba",
    CY: "Cyprus",
    CZ: "Czech Republic",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominique",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    FO: "Faroe Islands (Denmark)",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana (France)",
    PF: "French Polynesia",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar (United Kingdom)",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam (United States)",
    GT: "Guatemala",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Republic of Ireland",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "North Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao (China)",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Republic of Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique (France)",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat (UK)",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia (France)",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    MP: "Northern Mariana Islands (USA)",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    CN: "China",
    PE: "Peru",
    PH: "Philippines",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico (United States)",
    QA: "Qatar",
    CG: "Republic of the Congo",
    ZW: "Zimbabwe",
    RE: "Reunion (France)",
    RO: "Romania",
    RU: "Russia",
    RW: "Rwanda",
    SH: "Saint Helena",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    PM: "Saint Pierre and Miquelon (France)",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Republic of Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan",
    SR: "Suriname",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "East Timor",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "TĂ¼rkiye",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands (United Kingdom)",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis and Futuna (France)",
    YE: "Yemen",
    ZM: "Zambia"
};
var all_down_sum = 0;
var run = false;
var checkIP = false;
var visibl = true;
var thread_down = [];
var lsat_all_down = 0;
var refresh_lay = 5e3;
async function start_thread(index) {
    try {
        const response = await fetch(testurl, {
            cache: "no-store",
            mode: "cors",
            referrerPolicy: "no-referrer"
        });
        const reader = response.body.getReader();
        while (true) {
            const {
                value,
                done
            } = await reader.read();
            if (done) {
                reader.cancel();
                start_thread(index);
                break;
            }
            if (!run) {
                reader.cancel();
                break;
            }
            thread_down[index] += value.length;
        }
    } catch (err) {
        console.log(err);
        if (run) start_thread(index);
    }
}


function checkip_address() {
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.ip + " " + data.isp;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(checkip_address, 5000);
}


function noisong() {
    if (visibl) {
        fetch("https://api-ipv4.ip.sb/geoip", {
            referrerPolicy: "no-referrer"
        }).then(response => response.json()).then(data => {
            var tag = document.getElementById("checkip_address");
            tag.innerText = data.region + " " + data.region_code + " " + data.country;
            if (data.ip !== gbip) {
                tag.style.color = "";
                ckip(data.ip, tag);
            }
            gbip = data.ip;
        });
    }
    setTimeout(noisong, 7000);
}
checkip_address();
noisong();
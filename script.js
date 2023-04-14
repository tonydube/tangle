"use strict";

const quibs = [
  "tShZNRagRX",
  "UBum36vM5",
  "RvqpnaFvABIY",
  "z6qESmmSnsFH",
  "WzhPe07XA6rt",
  "5lsIG8ZCgvy4",
  "279KuN7AAeyu",
  "xdwmubQ3Sh49",
  "HQbv3qLFz1cL",
  "1SHCOeLgKWa0",
  "VyI86KmWFu1",
  "sBETVwDHY0",
  "XduO9RALT6t6",
  "DlQmGRzNGo3i",
  "EnigX_rWUlBu",
  "tfo24zWoAJ",
  "c6vlwstBvI",
  "xiz-AuLNow5",
  "28NZgIOW_fUV",
  "0rHhMXNYdyo",
  "XmkVP-9blK",
  "jUzHSANe7yNC",
  "-wz9LjinT4y9",
  "hSxHK-iwap5",
  "yLb6zkeIx9zc",
  "HHvawzJ0YMs3",
  "R0jNpkTSUJX",
  "hhDqMdHw5w",
  "N4uElQP58Nb6",
  "ARKzsqVpFY",
  "0lnHVeiNr0un",
  "Kk81FRfUEi",
  "K_JAFGFr7CQ",
  "uqRZV8skVN",
  "EFIK1GrN6Otv",
  "1crYPFXZKUuv",
  "ckDszJK-0T",
  "z56LpsUqHr",
  "h3vqfIeuhcho",
  "bmKMocxtR7bJ",
  "uGEfG3Spn4DF",
  "UGTlczrORBij",
  "VgsphQQC9g",
  "ZP4Osu902G-r",
  "IARxwjpiXK",
  "4gJgNXPzK5",
  "9rSuCtK9CCZk",
  "7CqA_-kKZKKF",
  "gcVt4O0JbKIm",
  "hXmMutk9Y8Nd",
  "dZewn83VJ8",
  "ME7DOkrq0U-m",
  "vps23_-2ni",
  "6YlJjSaAbKdA",
  "yiGmHFjNwha4",
  "HkgF9bFkMa5",
  "GQl3vxcYr-",
  "A5l8yCGO4BL5",
  "gwQJOur7lHXd",
  "REagZNlW0YMq",
  "XjDEdNTOQrPx",
  "97Zb1PjxN7",
  "d7YaDDmP1FiW",
  "udQR137ixwNN",
  "NeX-2_82sj",
  "_8rRJPvOl2we",
  "DiIyvrMPCZUK",
  "OSF3eMB6sZaP",
  "1fFK-Xgvy5",
  "1hBx2S406Bh3",
  "VNOXXedRYrrQ",
  "D6Yr5I9ikXXc",
  "HMBEfGB94i",
  "51iIZed76Z",
  "JQKhc24vj6Ga",
  "Ig8FLVp7MUGN",
  "F27LZqNadOh3",
  "B8_nsfJfMx",
  "3E7C0r4EhlHT",
  "94-9NFLcRNOc",
  "N6l6bDDcBP",
  "gZSiJPLyt_zX",
  "LhxvElmCIcpk",
  "vpHGlmeIu3Oz",
  "_tnh-9akIJ0N",
  "IPv8r6n1dC",
  "hmOTkU4-LiQM",
  "JQSnlxjgDa",
  "P6bkLTixc7",
  "Hv_qMJFVRTO",
  "nm0-EMpYdg",
  "rc2Yx_x_X0qD",
  "rIyjtuXKWUzv",
  "ZKH8C08aF-",
  "UzvFA9ox5C21",
  "je7UytrRlH-0",
  "QGYxfoed_tdc",
  "w4QwG7e8hNr7",
  "Ps20py3bE1JW",
  "xdmXfzn20ml",
  "_KiEvJQt0dRj",
  "4zzDULN1Lx",
  "BPH3iUjq75e",
  "ytCMTCxPfR",
  "KG02qiNWTjdM",
  "aqcSKjNUlSZt",
  "sF8AwOka_A",
  "JkGCNZF9ISSN",
  "6pgaH9TfTdET",
  "H-AvX5eVCKBF",
  "aNfYq5ccGUEL",
  "S9gvh8-zNo0A",
  "x4gbVTU0f3TW",
  "HNZ1AQgHZk8I",
  "ldPGIu-fmv2e",
  "oAtERLD0yyQR",
  "qHyhEzStTCEi",
  "wNdaJpR3m0lK",
  "GcWOk8pTEf",
  "EhPdlmjZ9ON",
  "oxe8I2VZw3Im",
  "XNLGqepInX",
  "EM1MHb0Sm2bR",
  "UaLmcHJ32iUj",
  "qSE0xr7MBUiX",
  "wRJIJvRbLExe",
  "yYG8ZRdYyi_X",
  "VBlwGGSQRWom",
  "9knYf-nVYu10",
  "Jfg0hrQn-Y6N",
  "IcEZdEWfRppj",
  "b8TNXXWOkfSV",
  "PY1mMrjcEYfF",
  "C3knCn6X0qO",
  "KaIFTRaBv59T",
  "ZyIkYFat1B",
  "sTma0kWPt2",
  "TcJ1vf7DaqhU",
  "GNr03IjJv",
  "5SHro-fGJ9P",
  "aIdF_4BNgA1m",
  "NTseDGDXOuo8",
  "8pxScew8Z6Fg",
  "O5DRbJoceY05",
  "qHyhEzStTCEi",
  "y2-XO-7xRg",
  "lZ8sFKiGiC",
  "kPkjANuGZ9dV",
  "ogQIdnkj_Jv1",
  "S7VBLnPG-q",
  "NZjOnL1Piu",
  "QG_K9KD16X1J",
  "DmBSFmjwZukB",
  "vNz2HBNrEPZK",
  "jwPiczAgtQbq",
  "VoWw5hs4hU",
  "2j0J0COgUTmX",
  "Rg9qZuplwl-4",
  "nDXa5iqd6KKD",
  "0GYhGCy1iGJq",
  "HewRwT9KnT7S",
  "Ls62KqLuousc",
  "iUBBoBk8rSal",
  "esZiZpODqx",
  "-dQf7muOG4",
  "d4my6t1iI1q1",
  "yH9ZEKxlcJL-",
  "3RcVkUaPSYBI",
  "Mv26be7c-4_i",
  "d7YaDDmP1FiW",
  "XnnivKkhRfW2",
  "EMU3qvO-r3j",
  "JQ2qX84KBJdS",
  "WsswXPIbtq1p",
  "8mHI-1eW7cg",
  "82Ucdsd1amiC",
  "9pQeVJgxcsKT",
  "K0U8xYcya0Aj",
  "tUWq0SLGX_L2",
  "CmSBhf2rWoUM",
  "k_WpPLnr1hYR",
  "gZSiJPLyt_zX",
  "wNdaJpR3m0lK",
  "OCYncamLH9W",
  "3nM-lSBTxLVL",
  "vjaSdJET0E9l",
  "QIgGGw79Wb",
  "x6LCvKtrXx",
  "KvuprJqqjJM",
  "WndePPLcTJ",
  "DmBSFmjwZukB",
  "38EIHUXkkhc",
  "quPFG0dg3QKy",
  "bMnHSvaeRhlz",
  "udQR137ixwNN",
  "61fgPzU6BeYY",
  "wIfNy-oDtr",
  "ElHdPHLQGGGK",
  "i5NVHAIzPDWa",
  "P5EGPtazma",
  "VDDodhULiss2",
  "q3SfzGZd2iGb",
  "JIP8Z3unkKLi",
  "oKk8MCHpwgsK",
  "4E342E1vP",
  "19XnsDE_kpQq",
  "C0UBtodkJKfk",
  "sTma0kWPt2",
  "XSBuuvIdzX",
  "yYG8ZRdYyi_X",
  "kbd0ItzHwGdq",
  "gcVt4O0JbKIm",
  "fXCc-Adzx2i5",
  "__7E1LEXGN_0",
  "quPFG0dg3QKy",
  "Rn3KahYUQG2Q",
  "mT4iARsFw",
  "Lsnybb98ghb",
  "HI5Afb6wjI8n",
  "ComoDwgAEY2",
  "VsarQ0iEgE1",
  "X1jdRU0Azian",
  "6uwpDHGyz1Nd",
  "cldBH7aZAkC_",
  "sHu_LU1tMdkz",
  "I8UvAqPYmS",
  "_DRD2nPtR3",
  "-LwlAMmYmOG",
  "n9IS1uOuPD",
  "gO2rEcTrwLo7",
  "EiMTkdWMquh",
  "37aUWcuNWjSh",
  "NPkLjPHDLJ",
  "KBBVyoNtUib6",
  "Yk5zlxPAS_M7",
  "EEdhZ7MQ8",
  "iuhPAoY96b4z",
  "EbwcJxDo-wVb",
  "EpDrsWX_c6li",
  "sAqRoYN_WRkP",
  "tK5T0Jab4_vP",
  "RmeADLR8F3X2",
  "HrDfFDfT_HDs",
  "iUBBoBk8rSal",
  "q_cFcKHlt5",
  "TxvV88zUrVi3",
  "yH9ZEKxlcJL-",
  "oExWZWaD3aPW",
  "OuOSAZxGADC",
  "WBaxVQ5fAMhK",
  "4WUTnj9QTW",
  "NZx4vMwOCDxJ",
  "bjME-U4e3i",
  "WQx3WN4CyDy4",
  "l8TCjE1d2T",
  "-ZfnGHueyp",
  "nIBJdpafN5Kc",
  "rAIJZHn5TH",
  "F-hSEwf4KdGY",
  "gFupCkjzmop",
  "AKE0_H6LR05G",
  "-aFzTtY-Ls",
  "B4VtMmx3gG",
  "QowQF_1qh0AL",
  "Z5HhvrGNn3_Y",
  "0I3MzxBI2Cyo",
  "HewRwT9KnT7S",
  "PrlfORUW5kZm",
  "3BOQbdqBbzOd",
  "V7HF0nCuOodn",
  "7zFPleA6jG",
  "gp8JCh6guz4B",
  "dG_GSfocp4",
  "Juy6Vkv1y9V2",
  "HuuK4BGIf2",
  "qQocZdcZvP",
  "wftK-3DERCdh",
  "5mqeP6Q3hWIz",
  "upj50_hSUD20",
  "CwRoiaY5uW8",
  "a94oxGLYg1kL",
  "KgR2yx3RcrGw",
  "Rnz3ZtcUgY1V",
  "5gFkFLdevhlL",
  "qnHNh4SbqhSR",
  "kPkjANuGZ9dV",
  "SPqg3-WqniZ",
  "T3WzgRWp0RNY",
  "VHFFYD5KcXN6",
  "mT5cy5juDLmk",
  "lEjcF-a2-Z5w",
  "WMAsdt9ag7fx",
  "UXTu1fXwnb",
  "4-GmMILEcnHw",
  "a7XBvRnXiE",
  "MCaYdNBRu3VH",
  "k_WpPLnr1hYR",
  "WndePPLcTJ",
  "mvAZepcjue",
  "tcFPk-72hdRT",
  "QLHIDLCkdjB",
  "K_5qMVYUQCFa",
  "Bg0GobDyVYuP",
  "WsswXPIbtq1p",
  "C0UBtodkJKfk",
  "cz9a9Ioqgp0Z",
  "jMrR6OsgunZ",
  "39c_g75LzbEV",
  "btD8Qvbzm_fD",
  "q3SfzGZd2iGb",
  "GO3s1i6LD9",
  "esZiZpODqx",
  "erm1w9nM2ryb",
  "r9DZsOfySa",
  "ZWsrdScwbDP",
  "c2crwHSzalPu",
  "mJsawC7KrtMh",
  "bkL1a4IExc",
  "5U3Qdp9L0OId",
  "2wYjTZiTUSgQ",
  "RDBJa5AxMPw",
  "UXR4urX1Deim",
  "_Ai5yulUS-s0",
  "nkftU-0YuUP6",
  "BGwOo6FZq3tH",
  "ihnLNFx2ZolZ",
  "4CYX4OWZ4S-W",
  "Fr8H5aDoCx",
  "LVmRBE6cytXv",
  "_5G4HT7Jd5bb",
  "iDSY05hYTVIU",
  "JQ2qX84KBJdS",
  "rMjF0mP5jls",
  "JxE5YMTDIK",
  "k3s9mCR6CK",
  "SHkEkVB-_5IM",
  "OSaopvW0IUd",
  "oGDhpm8DK_Jh",
  "iMBF9RD67JO7",
  "oKpokhAy8o17",
  "ohlZ513hzbVN",
  "KfOJkr869PQo",
  "OyLHLZT290ii",
  "Rg9qZuplwl-4",
  "I6EOd5T7NbBg",
  "DmfzZnpdPbq",
  "TIKMpXnxq-",
  "QZoT0w8MRyc_",
  "pSE653rSzmV",
  "rcf0sSXGr9yk",
  "82Ucdsd1amiC",
  "uOzqCA_J_8Nd",
  "eDIMF-N3ATJ3",
  "HuU2RKn2Tn-g",
  "MRUQtEH0tbXo",
  "ZahS1pL6yi-9",
  "jnnIm5mCp1",
  "WV2RpJq9s4qz",
  "FO7XX9krDFzO",
  "SLy0f2J9fbAn",
  "D-KuPZEq59LD",
  "SBqsC7DOKoC0",
  "PZj6l3xlpYAa",
  "KIWgGSudMpjZ",
  "x9kAYDPv-Rz",
  "DQFsUHF3g12U",
  "1IyeJ8SjYlLe",
  "gvD3xZyOVd3b",
  "8l0ws1Tmixsj",
  "-kr3shAHWtGr",
  "a7lEejDkHdFL",
  "PCE3W7VuJfnu",
  "__Y4zBlGjiI",
  "XskWCCo89r",
  "6isvcSZcOcZz",
  "ACSV7S22kJrQ",
  "znGmkx4vZ7lE",
  "XSBuuvIdzX",
  "4MRaRRKq4Tcg",
  "_tNDPuX5N3v5",
  "ULj6Dce6aMta",
  "eJC3Bf-J2fe",
  "COOYD278-JAr",
  "LJdZayGhYgjp",
  "U50kYf5u3f4B",
  "C71_HiGpvT2j",
  "LT9DDr9oO_1",
  "N9KKfOWlSm",
  "fmyyfiC5cJL2",
  "MBt-5fvDPQwf",
  "5xt93w4ql_UM",
  "XHblJb9aZ68R",
  "kd2p5bp3pJ9g",
  "zZGkrVvwzUaZ",
  "sKRDFZR86R5",
  "QG_K9KD16X1J",
  "haE3BcDtjrBQ",
  "B9UxMLiqU9H8",
  "eDuDLZphbw9c",
  "Oug3r9Htje7b",
  "4t5kIaLA6m8H",
  "n9hmgKxlcKXC",
  "5EQjiYO8FFHA",
  "BIBarxYM26Ux",
  "0PnL1GPc2muX",
  "VdR9FbAuXXzH",
  "Z_9VClTWUcSv",
  "LjDsuym4_U",
  "rDZezIKy6KJ7",
  "Qkl55U0twCr",
  "o6XQ_Gzhxg",
  "OwQANbtdRT",
  "ZIUHncH2frxc",
  "aNE_rvppMD",
  "pAcdc2oMJ_",
  "kTmtHqeUMESD",
  "MftnYcoJsQc3",
  "s-FViy5Lm3E0",
  "p3WMuYECz33S",
  "Q8AlUDqUpT",
  "_dfC0aL_AGD4",
  "R80GBolDfAev",
  "ehBmRJ9WwXKK",
  "2xpHvSOQMD",
  "UydvuUuGWjGo",
  "89tyQf_NKq3f",
  "-p4UJJtG2e0g",
  "HqmUz-uqkFCn",
  "yt71V7jtBU",
  "M1DjUqEQCO-E",
  "1RmEkIqT9Cyn",
  "X6UDrdk4ZIk",
  "ShnYV3CU2",
  "4w4phxeQaW",
  "fXCc-Adzx2i5",
  "MFFCMyuycWf",
  "gphANJ7YEjnz",
  "er8h8dsPVIc6",
  "sGgvLLYMYHUd",
  "Mv26be7c-4_i",
  "rB5d9Z2peN",
  "-CzNrWMGIg8V",
  "I29pkBiF6GJR",
  "a9C880IWYfsD",
  "_2iWk5KE6Xc5",
  "_cllvgW3qw9C",
  "tLHlKytgFRyW",
  "yP5v07kw1jVp",
  "iOP3zVICCTtp",
  "qEtZ0iATJh",
  "2r5oVsxF_c",
  "Gq3dzDrL32z",
  "wzfYBGOk6maE",
  "i6ciiFzPCN-n",
  "4Ooefeml0d",
  "AkrNJyl-mYhj",
  "RXBrRJcq1Cih",
  "-DUavsjRcctX",
  "5V7Gw25dIjvc",
  "CmSBhf2rWoUM",
  "02EyYMrjqDZ",
  "7Ndd5D0hjib4",
  "3nM-lSBTxLVL",
  "dqGms-NhJTvE",
  "wEfrviG0x9r",
  "oKk8MCHpwgsK",
  "SmLKR1PDjBK",
  "S7VBLnPG-q",
  "nFekPJy-f7",
  "yNsOlf1OVa12",
  "FFdTTIJ6aqj_",
  "l5LN5uzfws7",
  "NZjOnL1Piu",
  "bUM3Kw1GEj8",
  "tVqHnTXq3bDN",
  "_gs3v3KTB66",
  "PqBpQ9FyIO0-",
  "osWsdfNtz9he",
  "rNeqBQiP6B5n",
  "lOjXfROWf1n",
  "JdALGB3Qy982",
  "kvTitxhuKqUw",
  "8TXdurkixxgm",
  "Qhc0Ny5-nYwV",
  "Aw2IkKJ2mX",
  "6c2h-AtqMj6d",
  "6d2lKK8P1nzS",
  "4IhfJJqAxwUF",
  "OuWRYKXp-8xu",
  "jArDA1C0h8_z",
  "3dgyDeYuO_m8",
  "KJhB_lkgrbPa",
  "Px4iWP-ghc",
  "9d-sTGwiVr",
  "U2BywpVWXe",
  "0zVGLJ51n4H-",
  "BN2gsNt8uRS",
  "vg8IPwvWClZ9",
  "pvYXttE__hcb",
  "ueyq9zjTg9Rb",
  "WSpdlKZYCP",
  "YC9amT8URZZ",
  "c7TreSlDeQUg",
  "EMU3qvO-r3j",
  "UNCIDxM-0I4m",
  "hL3bSnfjWhS-",
  "6pQGyzlfHb",
  "2Mx1de_dko_",
  "Qp99OW_XqORq",
  "NzmVr08q5EkO",
  "TdIyDe0XX542",
  "3Zd4zOud2gp9",
  "5ujpXxYvGfQp",
  "5OsoVNA7a0ad",
  "RfsD8oOMcu7",
  "VskL4g20pu5J",
  "qgRPI2mMJRZv",
  "zJg0xZQ2Hk2f",
  "B3rDUL-aALd",
  "_f9Y8p7qWkxD",
  "hwA4bNHgJPCa",
  "vBKEzNMvWrF",
  "KBk2VabfrRne",
  "PC6SCHS2uMD",
  "qle6kfkGUI",
  "b5tOksSpKROM",
  "DHSz9oNRv15E",
  "oJh2j0vHlQs0",
  "NcBJY-YJ58W",
  "tUWq0SLGX_L2",
  "Fyet-MEuSrkD",
  "tiEnxKJXPM",
  "0GYhGCy1iGJq",
  "x6LCvKtrXx",
  "mVZ3mhSDcX15",
  "fgNERo-i9sHI",
  "jwPiczAgtQbq",
  "2cApxEvjmdRN",
  "CAnUBEJ1mw",
  "uQwITry_sQQv",
  "2kY4qTishsqp",
  "nRe-W6vOUe6S",
  "ge3CMrnyX7ee",
  "y-o6i7QcoSA7",
  "vTak3m-m9hN5",
  "kZm2ikxIlVrg",
  "2gO92SUDmhSk",
  "cR1oBKwCFpyq",
  "jFcxLEUS2zO",
  "5syS8jEn8m",
  "08lM-q3vwnS",
  "kR04kYueA9w",
  "eoqYvztdD6Xo",
  "kvdGu0krJLwC",
  "XnnivKkhRfW2",
  "GLwOgSgQOg",
  "CkDdotg_n1T",
  "w3Rpf-oD-QF",
  "J5PSPk8DWdfq",
  "pnmUUNjcx",
  "UcAqxDLZOT_M",
  "-ZGXOoJquO1",
];

// elements
const screen = document.getElementById("screen");
const wrapper = document.getElementById("wrapper");
const switchElement = document.getElementById("switch");
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");
const keyboard = document.querySelector("[data-keyboard]");
const timer = document.querySelector(".countdown-timer");

// variables
let mode = "dark";
let quibMD5 = "";
let permutedQuib = "";
// let test =
// "The liberties of a people never were, nor ever will be, secure, when the transactions of their rulers may be concealed from them. - Patrick Henry";

// dates for retreiving daily quib
const date1 = new Date("09/15/2022");
const date2 = new Date();
const difference = date2.getTime() - date1.getTime();
const days = Math.ceil(difference / (1000 * 3600 * 24));

(function () {
  fetch(`https://api.quotable.io/quotes/${quibs[days]}`)
    .then((response) => response.json())
    .then((response) => setData(response))
    .catch((err) => console.error(err));

  const totalGames = window.localStorage.getItem("totalGames") || 0;
  window.localStorage.setItem("totalGames", Number(totalGames) + 1);
})();

// event listener for toggling light/dark mode
switchElement.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.remove("dark-mode");

  if (mode === "light") {
    mode = "dark";
  } else {
    mode = "light";
  }
  lightDarkMode();
});

// light/dark mode toggle function
function lightDarkMode() {
  const bgcolor = getComputedStyle(document.documentElement).getPropertyValue(
    "--bgcolor"
  );
  const fgcolor = getComputedStyle(document.documentElement).getPropertyValue(
    "--fgcolor"
  );
  document.documentElement.style.setProperty("--bgcolor", fgcolor);
  document.documentElement.style.setProperty("--fgcolor", bgcolor);
}

// function to create permuted alphabet
function shuffle(string) {
  const a = string.split("");
  const n = a.length;

  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

// update stats on win
function updateStats(totalSolved) {
  const totalSolvedElement = document.getElementById("total-solved");
  totalSolvedElement.innerText = totalSolved;
}

// setup game
function setData(data) {
  console.log(data); // don't look, cheater!
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const permuted = shuffle(alphabet);

  updateStats(window.localStorage.getItem("totalSolved") || 0);

  quibMD5 = md5(
    (data.content + " " + data.author)
      .replace(/\s+/g, " ")
      .toLowerCase()
      .split(" ")
      .join("")
  );

  permutedQuib = `${(data.content + " " + data.author).toLowerCase()}`;

  let i = 0;
  let result = "";
  while (i < permutedQuib.length) {
    let ind = alphabet.indexOf(permutedQuib.charAt(i));
    result += permuted.charAt(ind) || permutedQuib.charAt(i);
    i++;
  }

  permutedQuib = result;
  init();
}

// display navigation modals
function display(modal) {
  screen.classList.toggle("hide");
  wrapper.classList.toggle("hide");
  document.getElementById(modal).classList.toggle("hide");
}

// close navigation modals
function closed(modal) {
  screen.classList.toggle("hide");
  wrapper.classList.toggle("hide");
  document.getElementById(modal).classList.toggle("hide");
}

// initialize game
function init() {
  lightDarkMode();

  // split quib into an array of words
  const wordsArray = createWords(permutedQuib);
  for (let word of wordsArray) {
    const div = document.createElement("div");
    div.className = "word";
    guessGrid.appendChild(div);
  }

  // loop through words with createLetterTile and wrap in word class div
  const wordElements = document.querySelectorAll(".word");
  for (let i = 0; i < wordsArray.length; i++) {
    for (let letter of wordsArray[i]) {
      createLetterTile(wordElements[i], letter.toUpperCase());
    }
    const div = document.createElement("div");
    const tile = document.createElement("div");
    div.className = "space";
    tile.className = "tile hidden opacity";
    div.appendChild(tile);
    wordElements[i].appendChild(div);
  }

  // begin
  startInteraction();
}

// split string into an array of words
function createWords(string) {
  return string.split(" ");
}

// create tiles, watch for new lines
function createLetterTile(parentDiv, letter) {
  const div = document.createElement("div");
  const tile = document.createElement("button");
  div.className = "letter";
  tile.className = "tile";
  div.dataset.letter = letter;
  div.innerHTML = letter;

  if (letter.toUpperCase() === letter.toLowerCase()) {
    tile.className = "tile hidden";
    if (letter === "\n") {
      tile.className = "tile hidden opacity";
    }
    tile.dataset.letter = letter;
    tile.innerHTML = letter;
  }

  div.appendChild(tile);
  parentDiv.appendChild(div);
}

// allow user interaction
function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

// disable user interaction
function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

// mouse (on-screen keyboard) input function
function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key.toLowerCase());
    return;
  }
  if (e.target.matches("[data-enter]")) {
    submitGuess();
    return;
  }
  if (e.target.matches("[data-delete]")) {
    deleteKeys();
    return;
  }
  console.log(e)
  // clicked a tile box, add active dataset state to all matches
  if (e.srcElement.matches(".tile")) {
    removeAllActiveTiles();

    // get letter data from parent node of guess
    const letter = e.srcElement.parentNode.getAttribute(["data-letter"]);

    setAllActiveTiles(letter);
  }
}

// keyboard input function
function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess();
    return;
  }
  if (e.key === "Backspace" || e.key === "Delete") {
    deleteKeys();
    return;
  }
  if (e.key.match(/^[a-z]$/)) {
    pressKey(e.key);
    return;
  }
}

// input key function
function pressKey(key) {
  const activeTiles = getActiveTiles();

  // active tiles have a letter, remove used from keyboard
  if (activeTiles[0].dataset.letter) {
    const keyboardKey = keyboard.querySelector(
      `[data-key="${activeTiles[0].dataset.letter}"i]`
    );
    keyboardKey.classList.toggle("used");
  }

  // check if letter is already guessed, if so it must be removed from the other tiles
  const guessedLetters = getGuessedLetters();
  if (guessedLetters.includes(key.toUpperCase())) {
    const removeTiles = getGuessTiles(key);
    for (let tile of removeTiles) {
      tile.textContent = "";
      delete tile.dataset.state;
      delete tile.dataset.letter;
    }
  }

  // set all active tiles to letter guess
  for (let tile of activeTiles) {
    tile.dataset.letter = key.toLowerCase();
    tile.textContent = key;
  }

  // update keyboard, darken used key
  const keyboardKey = keyboard.querySelector(`[data-key="${key}"i]`);
  keyboardKey.classList.add("used");

  // set active tiles to next empty tile (exclude 'space' tiles)
  const nextTile = guessGrid.querySelector(
    ":not([data-letter]):not(.hidden):not(.word):not(.space)"
  );
  removeAllActiveTiles();
  setAllActiveTiles(nextTile?.parentNode.getAttribute(["data-letter"]));
}

// remove all occurrences of guessed letter
function deleteKeys() {
  const activeTiles = getActiveTiles();

  if (activeTiles == null) return;
  const keyboardKey = keyboard.querySelector(
    `[data-key="${activeTiles[0].dataset.letter}"i]`
  );
  keyboardKey?.classList.toggle("used");
  for (let tile of activeTiles) {
    tile.textContent = "";
    delete tile.dataset.state;
    delete tile.dataset.letter;
  }
}

// get all occurrences of guesssed letter
function getGuessTiles(letter) {
  return guessGrid.querySelectorAll(`[data-letter="${letter}"]`);
}

// get all currently active tiles
function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]');
}

// get all letter tiles
function getLetterTiles() {
  return document.querySelectorAll(".tile:not(.opacity)");
}

// remove all currently active tiles
function removeAllActiveTiles() {
  const activeTiles = getActiveTiles();

  for (let tile of activeTiles) {
    delete tile.dataset.state;
  }
}

// sets all locations of a letter to active
function setAllActiveTiles(letter) {
  // find all same letters (returns nodelist)
  const letterLocations = document.querySelectorAll(
    `[data-letter='${letter}']`
  );

  // change all children tiles values to guess
  for (let node of letterLocations) {
    node.firstElementChild.dataset.state = "active";
  }
}

// returns letters that have been used already
function getGuessedLetters() {
  const keyboardKeys = keyboard.querySelectorAll(".used");
  let letters = [];

  for (let keyboardKey of keyboardKeys) {
    letters.push(keyboardKey.dataset.key);
  }

  return letters;
}

// stop interaction and check for win
function submitGuess() {
  stopInteraction();
  checkWinLose(getGuess());
}

// function to get guess string
function getGuess() {
  // query select all tiles add up everything to a guess string
  const tiles = document.querySelectorAll(".tile:not(.opacity)");
  let guess = "";

  for (let tile of tiles) {
    guess += tile.dataset.letter;
  }
  return guess;
}

// check for win
function checkWinLose(guess) {
  if (md5(guess) === quibMD5) {
    showAlert("You Win!", 5000);
    danceTiles(getLetterTiles());

    const totalSolved = window.localStorage.getItem("totalSolved") || 0;
    window.localStorage.setItem("totalSolved", Number(totalSolved) + 1);

    updateStats(totalSolved);

    return;
  }

  // else keep trying alert, restart interaction
  showAlert("Keep Trying...", 3000);
  shakeTiles(getLetterTiles());
  startInteraction();
}

// keep trying animation
function shakeTiles(tiles) {
  tiles.forEach((tile) => {
    tile.classList.add("shake");
    tile.addEventListener(
      "animationend",
      () => {
        tile.classList.remove("shake");
      },
      { once: true }
    );
  });
}

// you win animation
function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener(
        "animationend",
        () => {
          tile.classList.remove("dance");
        },
        { once: true }
      );
    }, (index * 50) / 5);
  });
}

// show alerts
function showAlert(message, duration = 1000) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);
  if (duration == null) return;
  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => {
      alert.remove();
    });
  }, duration);
}

// show timer
function showTimer() {
  let d = new Date();
  d.setHours(24, 0, 0, 0);
//   timer.innerHTML = d;
}
showTimer();

"use strict";
exports.id = 635;
exports.ids = [635];
exports.modules = {

/***/ 1687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_GoogleLogin)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(17421);
;// CONCATENATED MODULE: ./src/app/utils/googleAuth.ts
const getGoogleOAuthURL = ()=>{
    const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
    const options = {
        redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        access_type: "offline",
        response_type: "code",
        prompt: "consent",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email"
        ].join(" ")
    };
    // @ts-ignore
    const qs = new URLSearchParams(options);
    return `${rootUrl}?${qs.toString()}`;
};

;// CONCATENATED MODULE: ./public/signin/google-logo.png
/* harmony default export */ const google_logo = ({"src":"/_next/static/media/google-logo.6e023fd9.png","height":900,"width":900,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEVMaXE0q1b9wwb2RChKkPA6rVk0pl/ZWks7xTLyQy1GhvXrRDY5iv32uwpGiPs4pHFPjPbrRzlBkM5Hj//pQUFiskXsRDb0YS2cvyf/iQ9GhfvxRTk1qVJD6GEsAAAAHHRSTlMA1DgdMUMpCw1Amf6d/NPnHc+0+i/S29Y0MsjJPjMh0QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVyzcSwCAQALElH8k4R/7/Tg+dGgEhxgCwnzkvQ9dnTAR0fSglzeh6k97NwqG8rBPgVe/NjibOCfxOnQIm8l7JPgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/app/components/GoogleLogin.tsx






const GoogleLogin = ({ text })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Button, {
            sx: {
                borderRadius: "0.5rem",
                backgroundColor: "rgba(144, 202, 249, 0.15)",
                border: "1px solid rgba(144, 202, 249, 0.15)"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: getGoogleOAuthURL(),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                            sx: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                height: 25,
                                width: 25,
                                src: google_logo,
                                alt: "google logo"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Box, {
                            sx: {
                                p: 1,
                                color: "#FFFFFF"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "body2",
                                sx: {
                                    height: "100%",
                                    width: "auto"
                                },
                                children: text
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_GoogleLogin = (GoogleLogin);


/***/ }),

/***/ 27963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const validateUserData = (input, type)=>{
    let errors = {};
    // email validation
    if (!input.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        errors.email = "Email is invalid";
    }
    // password validation
    if (!input.password) {
        errors.password = "Password is required";
    }
    if (type === "signup") {
        if (!input.fullname || input.fullname.trim().length < 1) {
            errors.fullname = "Full Name is required";
        }
        if (input.password.length < 8) {
            errors.password = "Password must be at least 8 characters";
        }
        if (!input.confirmPassword || input.password !== input.confirmPassword) {
            errors.confirmPassword = "Passwords must match";
        }
    }
    return {
        valid: Object.keys(errors).length === 0,
        errors: errors
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateUserData);


/***/ })

};
;
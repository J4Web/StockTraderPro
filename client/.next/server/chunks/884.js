"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 87959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14773);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Loader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {
        sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            minHeight: "100vh",
            position: "fixed"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__/* .TailSpin */ .gy, {
            height: "80",
            width: "80",
            color: "#0079FF",
            ariaLabel: "tail-spin-loading",
            radius: "1",
            wrapperStyle: {},
            wrapperClass: "",
            visible: true
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);


/***/ }),

/***/ 44078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZL: () => (/* binding */ getReq),
/* harmony export */   pg: () => (/* binding */ searchStock),
/* harmony export */   qC: () => (/* binding */ postData)
/* harmony export */ });
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98422);

const postData = async (url, userData)=>{
    try {
        const res = await _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post(url, userData);
        const data = await res.data;
        return data;
    } catch (error) {
        return {
            error: error?.response?.data
        };
    }
};
const getReq = async ()=>{
    try {
        const req = await _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/validate");
        return req.data;
    } catch (error) {
        return {
            error: error?.response?.data
        };
    }
};
const searchStock = async (symbol)=>{
    try {
        const req = await _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get(`/stockdata/search`, {
            params: {
                symbol: symbol
            }
        });
        return req.data;
    } catch (error) {
        return {
            error: error?.response?.data
        };
    }
};


/***/ }),

/***/ 24884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45942);
/* harmony import */ var _hooks_axiosapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44078);
/* harmony import */ var _lib_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13526);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87959);
/* __next_internal_client_entry_do_not_use__ default auto */ 



//* ************** Custom imports *************** *//




//* ************** *************** *//
const WithAuth = (Component, isPublicPage = false)=>{
    const Inner = (props)=>{
        const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
        const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(pathname.startsWith("/chart/"));
        const { isSignedIn, status } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth);
        // console.log('🚀 isSignedIn:', isSignedIn);
        const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
            (0,_hooks_axiosapi__WEBPACK_IMPORTED_MODULE_5__/* .getReq */ .ZL)().then((data)=>{
                dispatch((0,_lib_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__/* .validateUser */ .h3)(data));
                setLoading(false);
            });
            // Clean up by disconnecting the socket when the component unmounts
            return ()=>{
                _socket__WEBPACK_IMPORTED_MODULE_4__/* .socket */ .W.disconnect();
            };
        }, [
            dispatch,
            isPublicPage,
            isSignedIn,
            router
        ]);
        if (loading) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {});
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...props,
            isAuthenticated: isSignedIn
        });
    };
    return Inner;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithAuth);


/***/ }),

/***/ 45942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ socket)
/* harmony export */ });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69604);

const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_0__.io)(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, {
    autoConnect: false,
    withCredentials: true
});


/***/ })

};
;
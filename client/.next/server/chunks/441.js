exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 79789:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 84933:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 73440));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24566));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 84019));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 59977))

/***/ }),

/***/ 98422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93258);

const api = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create({
    baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
    withCredentials: true,
    timeout: 10000
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ }),

/***/ 24566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29300);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_redux_api_profileApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33363);
/* harmony import */ var _lib_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13526);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_trends_upward_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(30535);
/* __next_internal_client_entry_do_not_use__ default auto */ 










const settings = [
    "Sign out"
];
const Navbar = ()=>{
    const [anchorElUser, setAnchorElUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const isSmallScreen = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__.useMediaQuery)(theme.breakpoints.down("sm"));
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const { isSignedIn } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);
    const [logout] = (0,_lib_redux_api_profileApi__WEBPACK_IMPORTED_MODULE_5__/* .useLogoutMutation */ ._y)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleScroll = ()=>{
            // Here, 100 is the amount of pixels scrolled before changing the navbar style
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Cleanup listener on component unmount
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
        userLogout();
    };
    // Handle user logout
    const userLogout = async ()=>{
        const resLogout = await logout("");
        dispatch((0,_lib_redux_slices_authSlice__WEBPACK_IMPORTED_MODULE_6__/* .signout */ .uf)(resLogout));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.AppBar, {
        position: "fixed",
        sx: {
            backdropFilter: isScrolled ? "blur(20px)" : "none",
            backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.3)" : "transparent",
            width: "100vw",
            boxShadow: "none",
            transition: "backgroundColor 0.5s",
            zIndex: 10
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {
            maxWidth: "xl",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Toolbar, {
                disableGutters: true,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                    sx: {
                        display: "flex",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                flex: 1,
                                minWidth: 0
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                    src: _public_trends_upward_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                    alt: "upward trend",
                                    width: 35,
                                    height: 35
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "/",
                                    style: {
                                        color: "white",
                                        fontWeight: 700,
                                        letterSpacing: ".1rem"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                        noWrap: true,
                                        sx: {
                                            fontWeight: "600",
                                            fontSize: {
                                                xs: "1rem",
                                                md: "1rem"
                                            },
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                            lineHeight: 1.5
                                        },
                                        children: isSmallScreen ? "STP" : "STOCK TRADER PRO"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                            sx: {
                                display: "flex",
                                alignItems: "center",
                                gap: isSmallScreen ? 1 : 2,
                                flexShrink: 0
                            },
                            children: isSignedIn && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {
                                sx: {
                                    flexGrow: 0
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {
                                        title: "Open settings",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.IconButton, {
                                            onClick: handleOpenUserMenu,
                                            sx: {
                                                p: 0
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Avatar, {
                                                sx: {
                                                    background: "transparent"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_icons_material_Person__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    sx: {
                                                        color: "white"
                                                    }
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Menu, {
                                        sx: {
                                            mt: "40px"
                                        },
                                        id: "menu-appbar",
                                        anchorEl: anchorElUser,
                                        anchorOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        disableScrollLock: true,
                                        keepMounted: true,
                                        transformOrigin: {
                                            vertical: "top",
                                            horizontal: "right"
                                        },
                                        open: Boolean(anchorElUser),
                                        onClose: handleCloseUserMenu,
                                        children: settings.map((setting)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.MenuItem, {
                                                onClick: handleCloseUserMenu,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Typography, {
                                                    textAlign: "center",
                                                    children: setting
                                                })
                                            }, setting))
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);


/***/ }),

/***/ 73440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeRegistry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7904);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68941);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





// This implementation is from emotion-js
function ThemeRegistry(props) {
    const { options, children } = props;
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
        palette: {
            mode: "dark",
            background: {
                default: "#100b16"
            }
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active  {
          -webkit-box-shadow: 0 0 0 100px #111111 inset !important;
        }
      `
            }
        },
        typography: {
            fontFamily: [
                "-apple-system",
                "BlinkMacSystemFont",
                '"Trebuchet MS"',
                "Roboto",
                '"Ubuntu"',
                "sans-serif"
            ].join(",")
        }
    });
    const [{ cache, flush }] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{
        const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args)=>{
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useServerInsertedHTML)(()=>{
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = "";
        for (const name of names){
            styles += cache.inserted[name];
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            "data-emotion": `${cache.key} ${names.join(" ")}`,
            dangerouslySetInnerHTML: {
                __html: styles
            }
        }, cache.key);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_5__.C, {
        value: cache,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
            theme: theme,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 84019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Providers: () => (/* binding */ Providers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(8250);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(91388);
// EXTERNAL MODULE: ./src/lib/redux/slices/authSlice.tsx
var authSlice = __webpack_require__(13526);
// EXTERNAL MODULE: ./src/lib/redux/slices/stockSlice.tsx
var stockSlice = __webpack_require__(9476);
// EXTERNAL MODULE: ./src/lib/redux/api/stockApi.ts
var stockApi = __webpack_require__(17153);
// EXTERNAL MODULE: ./src/lib/redux/api/profileApi.ts
var profileApi = __webpack_require__(33363);
;// CONCATENATED MODULE: ./src/lib/redux/store.ts





const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        auth: authSlice/* default */.ZP.reducer,
        stock: stockSlice/* default */.ZP.reducer,
        [stockApi/* stockApi */.nD.reducerPath]: stockApi/* stockApi */.nD.reducer,
        [profileApi/* profileApi */.c_.reducerPath]: profileApi/* profileApi */.c_.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(stockApi/* stockApi */.nD.middleware, profileApi/* profileApi */.c_.middleware)
});
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./src/lib/providers.tsx
/* __next_internal_client_entry_do_not_use__ Providers auto */ 



const Providers = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(lib.Provider, {
        store: redux_store,
        children: props.children
    });
};


/***/ }),

/***/ 33363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _y: () => (/* binding */ useLogoutMutation),
/* harmony export */   c_: () => (/* binding */ profileApi)
/* harmony export */ });
/* unused harmony export useUserProfileQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23298);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const profileApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "profileApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`
    }),
    tagTypes: [
        "auth"
    ],
    endpoints: (builder)=>({
            userProfile: builder.query({
                query: ()=>`user`
            }),
            logout: builder.mutation({
                query: ()=>({
                        url: `/logout`,
                        method: "POST",
                        credentials: "include"
                    })
            })
        })
});
const { useUserProfileQuery, useLogoutMutation } = profileApi;


/***/ }),

/***/ 17153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L7: () => (/* binding */ useGetStockDataQuery),
/* harmony export */   P1: () => (/* binding */ useLazyGetOnSelecteStockDataQuery),
/* harmony export */   nD: () => (/* binding */ stockApi)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23298);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const stockApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "stockApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: `${"https://stocktraderpro.onrender.com"}/api`
    }),
    tagTypes: [
        "stocks",
        "history"
    ],
    endpoints: (builder)=>({
            // get stock data
            getStockData: builder.query({
                query: ({ market, symbol })=>({
                        url: `/intraday/${symbol}`,
                        method: "GET"
                    }),
                providesTags: [
                    "stocks"
                ]
            }),
            // get stock data
            getOnSelecteStockData: builder.query({
                query: ({ symbol, day })=>({
                        url: `/historical/${symbol}/${day}`,
                        method: "GET"
                    }),
                providesTags: [
                    "history"
                ]
            })
        })
});
const { useGetStockDataQuery, useLazyGetOnSelecteStockDataQuery } = stockApi;


/***/ }),

/***/ 13526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   h3: () => (/* binding */ validateUser),
/* harmony export */   n$: () => (/* binding */ userLogin),
/* harmony export */   uf: () => (/* binding */ signout)
/* harmony export */ });
/* unused harmony export signin */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98422);


// Login User
const userLogin = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/signin", async (userData)=>{
    try {
        const res = await _axios_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/signin", userData);
        let data = await res.data;
        if (data) {
            return data;
        }
    } catch (error) {
        // console.log('🚀 userLogin ~ error:', error.response?.data.message);
        throw new Error(error.response?.data.message);
    }
});
const initialState = {
    name: "",
    isSignedIn: false,
    status: "idle"
};
// Slice
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({
    name: "auth",
    initialState,
    reducers: {
        signin: (state, action)=>{
            state.isSignedIn = action.payload?.isSignedIn;
        },
        signout: (state, action)=>{
            state.isSignedIn = action.payload?.isSignedIn;
        },
        validateUser: (state, action)=>{
            state.isSignedIn = action.payload?.isSignedIn;
        }
    },
    extraReducers: (builder)=>{
        // userLogin reducers
        builder.addCase(userLogin.pending, (state)=>{
            state.status = "loading";
        });
        builder.addCase(userLogin.fulfilled, (state, { payload })=>{
            state.status = "idle";
            state.isSignedIn = payload?.isSignedIn;
        });
        builder.addCase(userLogin.rejected, (state)=>{
            state.status = "failed";
        });
    }
});
let { signin, signout, validateUser } = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice);


/***/ }),

/***/ 9476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   oO: () => (/* binding */ setDataType),
/* harmony export */   u3: () => (/* binding */ setMarketStatus)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91388);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    marketStatus: "",
    dataType: null
};
const stockSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "stock",
    initialState,
    reducers: {
        setMarketStatus: (state, action)=>{
            if (action.payload !== state.marketStatus) {
                state.marketStatus = action.payload;
            }
        },
        setDataType: (state, action)=>{
            if (action.payload !== state.dataType) {
                state.dataType = action.payload;
            }
        }
    }
});
const { setMarketStatus, setDataType } = stockSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stockSlice);


/***/ }),

/***/ 89312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(25856);
var layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/@vercel/analytics/dist/react/index.js
var react = __webpack_require__(62690);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/lib/providers.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/home/j4web/Downloads/StockTraderPro/client/src/lib/providers.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Providers"];

;// CONCATENATED MODULE: ./src/app/components/ThemeRegistry.tsx

const ThemeRegistry_proxy = (0,module_proxy.createProxy)(String.raw`/home/j4web/Downloads/StockTraderPro/client/src/app/components/ThemeRegistry.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeRegistry_esModule, $$typeof: ThemeRegistry_$$typeof } = ThemeRegistry_proxy;
const ThemeRegistry_default_ = ThemeRegistry_proxy.default;


/* harmony default export */ const ThemeRegistry = (ThemeRegistry_default_);
;// CONCATENATED MODULE: ./src/app/components/Navbar.tsx

const Navbar_proxy = (0,module_proxy.createProxy)(String.raw`/home/j4web/Downloads/StockTraderPro/client/src/app/components/Navbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Navbar_esModule, $$typeof: Navbar_$$typeof } = Navbar_proxy;
const Navbar_default_ = Navbar_proxy.default;


/* harmony default export */ const Navbar = (Navbar_default_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.tsx







const metadata = {
    title: "Stock Trading Platform",
    description: "Real Time Stock Trading Platform",
    openGraph: {
        authors: "J4web",
        title: "Stock Trading Platform",
        description: "Indian NSE Stock Trading Platform",
        url: "https://stock-platform.vercel.app",
        images: [
            {
                url: "https://res.cloudinary.com/dcvbqthie/image/upload/v1701194279/STP_meta.png",
                width: 600,
                height: 600
            }
        ]
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(e0, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("html", {
            lang: "en",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ThemeRegistry, {
                        options: {
                            key: "mui"
                        },
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react/* Analytics */.c, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 30535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/upward.88ed1ee9.svg","height":25,"width":25,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;
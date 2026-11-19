"use strict";const t=require("../request.js");exports.getUserInfo=()=>t.http.get("/auth/user-info"),exports.login=e=>t.http.post("/auth/login",e);

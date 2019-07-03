import { ADDNAME,ADDAGE } from "./action-type";

//包含所有的action creator
export const addNameCreater = (name) =>({type:ADDNAME,data:name})
export const addAgeCreater = (age) => ({type:ADDAGE,data:age})
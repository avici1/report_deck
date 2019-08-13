import  { Router } from 'express';
import std from  '../controllers/schoolParameterController';

const route = Router();
route.get('/',std.getAll);
route.put('/:id',std.updateSchool);
route.post('/',std.addNew);
export default route;
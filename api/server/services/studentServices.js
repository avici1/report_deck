import database from '../../models';
import { isNull } from 'util';
// import Util from 'Util';

class studentServices{
    static async getAllStudent(){
        try {
            return await database.Students.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOneStudent(id){
        try {
            const foundStudent = await database.Students.findOne({where:{studentId:id}});
            if(foundStudent){
                return foundStudent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async UpdateStudent(id,Updated){
        try {
            const updateStudent = await database.Student.update(updated,{where:{studentId:id}})
            if (updateStudent){
                return updateStudent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleteStudent(id){
        try {
            const deletedStudent = await database.Student.destroy({where:{studentId:id}});
            if(deletedStudent){
                return deletedStudent
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async addStudent(newStudent){
        try {
            const added = await database.Student.create(newStudent);
            if (added){
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default studentServices;
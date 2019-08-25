import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class classService{
    static async getAllClasses(){
        try {
            return await database.Classes.findAll();
        } catch (error) {
            throw error;
        }
    }
    static async getOneClass(id){
        try {
            const ClassToFind = await database.Classes.findAll({
                where: {
                  classYear: { [op.like]: '%' + id + '%' },
                  classId: { [op.like]: '%' + id + '%' },
                  classMasterTeacher:{ [op.like]: '%' + id + '%' },
                  classSection:{[op.like]: '%' + id +'%'},
                  classLevel:{ [op.like]: '%' + id + '%' }
                }
              });
            if(ClassToFind){
                return ClassToFind;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async AddClass(newClass){
        try{
            return await database.Classes.create(newClass);
        }catch(error){
            throw error;
        }
    }
    static async updateClass(id, newClass){
        try {
            const classToUpdate = await database.Classes.findOne({
                where: {id:Number(id)}
            });
            if(classToUpdate){
                await database.Classes.update(newClass,{where:{id:Number(id)}});
                return newClass;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleteClass(id){
        try {
            const classToDelete = await database.Classes.findOne({
                where: {id:Number(id)}
            });
            if(classToDelete){
                await database.Classes.destroy({where:{id:Number(id)}});
                return classToDelete;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}

export default classService;
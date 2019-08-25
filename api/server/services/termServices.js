import database from '../../models';
import sequelize from 'sequelize';
const  op = sequelize;
class termServices{
    static async addNew(newEntry){
        try {
            const added = await database.Term.create(newEntry);
            if(added){
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleter(id){
        try {
            const deleted = await database.Term.destroy({where:{studentId:id}});
            if(deleted){
                return deleted;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async updater(id,updated_){
        try {
            const updated = await database.Term.update(updated_,{where:{studentId:id}});
            if(updated){
                return updated;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async getAll(){
        try {
            return await database.Term.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOne(searchParam){
        try {
            const foundTerm = await database.Term.findAll({
                where : {
                    [op.or] : [
                        {studentId : { [op.like]: '%' + searchParam + '%' }},
                        {maxTj : { [op.like]: '%' + searchParam + '%' }},
                        {tj : { [op.like]: '%' + searchParam + '%' }},
                        {maxExam : { [op.like]: '%' + searchParam + '%' }},
                        {exam : { [op.like]: '%' + searchParam + '%' }},
                    ]
                }
            });
            if(foundTerm){
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default termServices;
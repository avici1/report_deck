import database from '../../models';

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
            const deleted = await database.Term.destroy({where:{StudentId:id}});
            if(deleted){
                return deleted;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async updater(id,updated){
        try {
            const updated = await database.Term.update(updated,{where:{StudentId:id}});
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
    static async getOne(id){
        try {
            const foundTerm = await database.Term.findOne({where:{StudentId:id}});
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
import database from '../../models';

class schoolParameterServices{
    static async addNew(newEntry){
        try {
            const added = await database.SchoolParameters.create(newEntry);
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
            const deleted = await database.SchoolParameters.destroy({where:{id:id}});
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
            const updated = await database.SchoolParameters.update(updated,{where:{id:id}});
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
            return await database.SchoolParameters.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOne(id){
        try {
            const foundTerm = await database.SchoolParameters.findOne({where:{id:id}});
            if(foundTerm){
                return foundTerm;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default schoolParameterServices;
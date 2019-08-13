import database from '../../models';
import sequelize from 'sequelize';
const op = sequelize.Op;
class staffService {
    static async GetAllStaff() {
        try {
            return await database.Staff.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async SearchStaff(searchParam) {
        try {
            const staff = await database.Staff.findAll({
                where: {
                    [op.or]: [
                        { staffId: { [op.like]: '%' + searchParam + '%' } },
                        { staffNames: { [op.like]: '%' + searchParam + '%' } },
                        { staffTitle: { [op.like]: '%' + searchParam + '%' } },
                        
                    ]
                }
            });
            if (staff) {
                return staff;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async AddStaff(newStaff) {
        try {
            return await database.Staff.create(newStaff);
        } catch (error) {
            throw error;
        }
    }
    static async UpdateStaff(id, newStaff) {
        try {
            const StaffToUpdate = await database.Staff.findOne({ where: { staffId: id } });
            if (StaffToUpdate) {
                await database.Staff.update(newStaff, { where: { staffId: id } });
                return newStaff;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async DeleteStaff(id) {
        try {
            const staffToDelete = await database.Staff.findOne({ where: { id: Number(id) } });
            if (staffToDelete) {
                return await database.Staff.destroy({ where: { staffid: Number(id) } });
            }
        } catch (error) {
            throw error;
        }
    }
}
export default staffService;
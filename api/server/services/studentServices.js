import database from '../../models';
import sequelize from 'sequelize';
// import Util from 'Util';
const op = sequelize.Op;
class studentServices {
    static async getAllStudent() {
        try {
            return await database.Students.findAll();

        } catch (error) {
            throw error;
        }
    }
    static async getOneStudent(searchParam) {
        try {
            const foundStudent = await database.Students.findAll({
                where: {
                    [op.or]: [
                        { matricule: { [op.like]: '%' + searchParam + '%' } },
                        { names: { [op.like]: '%' + searchParam + '%' } }
                    ]
                }
            });
            if (foundStudent) {
                return foundStudent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async UpdateStudent(id, Updated) {
        try {
            const updateStudent = await database.Students.update(Updated, { where: { matricule: id } })
            if (updateStudent) {
                return updateStudent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async deleteStudent(id) {
        try {
            const deletedStudent = await database.Students.destroy({ where: { matricule: id } });
            if (deletedStudent) {
                return deletedStudent;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
    static async addStudent(newStudent) {
        try {
            const added = await database.Students.create(newStudent);
            if (added) {
                return added;
            }
            return null;
        } catch (error) {
            throw error;
        }
    }
}
export default studentServices;
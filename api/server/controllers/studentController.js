import studentService from '../services/studentServices';
import Util from '../utils/Util';
const util = new Util();
class studentController {


    static async getAll(req, res) {
        try {
            const all = await studentService.getAllStudent();
            if (!all) {
                util.setError(400, "Students can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Students found successfully", 200, all);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message + ' controller');
            return util.send(res);
        }
    }
    static async getParticular(req, res) {
        try {
            const id = req.params;
            const one = await studentService.getOneStudent(id);
            if (!one) {
                util.setError(400, "Student can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Student found", 200, one);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async deleter(req, res) {
        try {
            const id = req.params;
            const deleted = await studentService.deleteStudent(id);
            if (!deleted) {
                util.setError(400, "Student can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Deleted successfully", 200, deleted);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message );
            return util.send(res);
        }
    }
    static async adder(req, res) {
        try {
            const addee = req.body;
            const added = await studentService.addStudent(addee);
            if (!added) {
                util.setError(400, "Student can't be added");
                return util.send(res);
            } else {
                util.setSuccess("Added successfully", 200, added);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async updater(req, res) {
        const { id } = req.params;
        const updated = req.body;


        try {

            if ((Object.values(updated).length >= 1) == false) {
                util.setError(404, `sent empty fields`);
                return util.send(res);
            } else {
                const updated_class = await studentService.UpdateStudent(id, updated);
                if (!updated_class) {
                    util.setError(404, `cant update a class`);
                    return util.send(res);
                } else {
                    util.setSuccess('Classes updated successfully', 200, updated_class);
                    return util.send(res);
                }

            }

        } catch (error) {
            util.setError(404, 'Oops something Went wrong cant update the book >> ' + error.message);
            return util.send(res);
        }

    }
}
export default studentController;
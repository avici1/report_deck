import Util from '../utils/Util';
import staffService from '../services/staffServices';
import { PDFInvalidObjectParsingError } from 'pdf-lib';
const util = new Util();


class staffController {

    static async getListStaff(req, res) {
        try {
            const staffList = await staffService.GetAllStaff()
            if (staffList.length > 0) {
                util.setSuccess("Staff found successfully", 200, staffList);
                return util.send(res);
            } else {
                util.setSuccess("Staff Not found", 200, staffList);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message)
            return util.send(res);
        }
    }
    static async AddNewStaff(req, res) {
        try {
            const newStaff = req.body;
            if (!req.body.staffId || !req.body.staffNames || !req.body.staffTitle) {
                util.setError(400, "Please send complete information");
                return util.send(res);
            } else {
                const addedStaff = await staffService.AddStaff(newStaff);
                util.setSuccess("Staff added succefully", 200, addedStaff);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async searchStaff(req, res) {
        const { id } = req.params;
        try {

            if (!id) {
                util.setError(400, `Please provide accurate search information Q is ${id}`);
                return util.send(res);
            } else {
                const staff = await staffService.SearchStaff(id);
                if ((Object.values(staff).length >= 1) == false) {
                    util.setError(400, "Can't find that staff");
                    return util.send(res);
                } else {
                    util.setSuccess("Staff found successfully", 200, staff);
                    return util.send(res);
                }
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async updateStaff(req, res) {
        try {
            const { id } = req.params;
            const updated = req.body;
            if (!id) {
                util.setError(400, "Wrong search parameter");
                return util.send(res);
            } else {
                if ((Object.values(updated).length >= 1) == false) {
                    util.setError(400, "You sent empty body");
                    return util.send(res);
                } else {
                    const staffToUpdate = await staffService.SearchStaff(id);
                    if (!staffToUpdate) {
                        util.setError(400, "Can't find what you're trying to update");
                        return util.send(res);
                    } else {
                        const staff = await staffService.UpdateStaff(id, updated);
                        util.setSuccess("Staff updated successfully", 200, staff);
                        return util.send(res);
                    }

                }
            }

        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
    static async deleteStaff(req, res) {
        const { id } = req.params;
        if (!Number(id)) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);
        } else {
            try {
                const deletedStaff = await staffService.DeleteStaff(id);
                if (!deletedStaff) {
                    util.setError(404, `Staff with Id ${id} not found`);
                    return util.send(res);
                } else {
                    util.setSuccess(`Staff with Id ${id} deleted successfully`, 200, deletedStaff);
                    return util.send(res);
                }

            } catch (error) {
                util.setError(404, `can't delete the class`);
                return util.send(res);
            }



        }
    }
}
export default staffController;
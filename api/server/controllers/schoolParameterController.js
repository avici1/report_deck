import schoolp from '../services/schoolparameterServices';
import Util from '../utils/Util';
const util = new Util();
class schoolParameterController {
    static async addNew(req, res) {
        try {
            const body = req.body;
            const added = await schoolp.addNew(body);
            if (!body) {
                util.setError(400, "can't add a new record");
                return util.send(res);
            } else {
                util.setSuccess("Sent successfully", 200, added);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, "can't add a new record");
            return util.send(res);
        }
    }
    static async updateSchool(req, res) {
        const { id } = req.params;
        const updated = req.body;
        if (!Number(id)) {
            util.setError(404, 'Please provide a valid parameter');
            return util.send(res);

        } else {
            try {

                if ((Object.values(updated).length >= 1) == false) {
                    util.setError(404, `sent empty fields`);
                    return util.send(res);
                } else {
                    const updated_class = await schoolp.updater(id, updated);
                    if (!updated_class) {
                        util.setError(404, `cant update a class`);
                        return util.send(res);
                    } else {
                        util.setSuccess('School record updated successfully', 200, updated_class);
                        return util.send(res);
                    }

                }

            } catch (error) {
                util.setError(404, 'Oops something Went wrong cant update the book >> ' + error.message);
                return util.send(res);
            }
        }
    }
    //No delete options available
    static async getAll(req, res) {
        try {
            const all = await schoolp.getAll();
            if (!all) {
                util.setError(400, "Records can't be found");
                return util.send(res);
            } else {
                util.setSuccess("Records found successfully", 200, all);
                return util.send(res);
            }
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }
}
export default schoolParameterController;
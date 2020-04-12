const User = require('../model/User');

exports.getUsers = async (req,res,next) => {
    try{
        const {email} = req.body;
        const usersFromDb = await User.find({email});
        const users = usersFromDb.map(({phone}) => ({
            phone
        }));
        return res.send(users);
    } catch(err){
        next(err);
    }
};

import bcrypt from 'bcryptjs';
import User from '../schema/user-schema.js';


export const registerUser =  async (req, res) => {

    try {

        const { name, username, email,   password, cpassword } = req.body;
        if (!name  || !username || !email   || !password || !cpassword) {
            return res.status(421).json({ error: "invalid inputs" });
        }

        const userExist = await User.findOne({ email: email, });

        if (userExist) {
            console.log("user exist");
            return res.status(422).json({ error: "Email already exist" });

        } else if (password != cpassword) {
            console.log("pass not macthcing");
            return res.status(422).json({ error: "password are not matching" });

        } else {
            const user = new User({ name,username, email,  password, cpassword });
            console.log("usersignup succesflu");
            //using a middleware
            await user.save();
            res.status(201).json({ message: "user registerd succesfuly" });

        }

    } catch (err) {
        console.log(err);
    }
}


export const userSignin =  async (req, res) => {


    try {

  



        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(422).json({ error: " invalid  inputs" });
        }

        var userLogin = await User.findOne({ email: email });
        console.log(userLogin);

        if (userLogin) {
            console.log("before-match");
        const passMatch =  await bcrypt.compare(password, userLogin.password);

        console.log("after-match", passMatch);


            if (passMatch) {

                const token = await userLogin.generateAuthToken();

                
                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });

                res.json({ message: "use loged in successull" });
                console.log("user loged in successfuly");

            }else if(!passMatch){
                console.log("pass didn't match");
                res.status(500).json({ error: "error successfully" });
            }


        } else {
            res.status(500).json({ error: "error successfully" });
            console.log(" emails didn't match");
        }



    } catch (err) {
        console.log("catch")
        res.status(500).json(err);
    }

};


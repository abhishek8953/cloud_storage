import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
	try {
		const token = req.cookies["token"];
		const { sec } = req.body;

		if (!token && !sec)
			return res.json({
				success: false,
				message: "missing token or secreat",
			});

		try {
			const decodedToken = jwt.verify(token, process.env.JWT_SECRET).id;
			if (!decodedToken)
				return res.json({
					success: false,
					message: "wrong credentials",
				});

			req.id = decodedToken;
			return next();
		} catch (error) {
			try {
				if (!sec)
					return res.json({
						success: false,
						message: "secreat not present",
					});

				getSecreatUser(sec).then((id) => {
					console.log("id", id);
					if (id) {
						req.id = id;
						return next();
					}
					return res.json({
						success: false,
						message: "secret id not match",
					});
				});
			} catch (error) {
				return res.json({
					success: false,
					message: "some error in sec",
					error: error,
				});
			}
		}
	} catch (err) {
		return res.json({ success: false, message: "auth error", error: err });
	}
};

async function getSecreatUser(sec) {
	try {
		const id = await User.findOne({ sec });
		if (!id) return false;
		return id._id;
	} catch (error) {
		console.log(error);
	}
}

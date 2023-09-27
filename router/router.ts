import express from "express";
import {
  SignInUser,
  accountVerification,
  allAccount,
  changeAccountPassword,
  createAccount,
  deleteUser,
  firstAccountVerification,
  getAllUser,
  getSingleAccount,
  resetAccountPassword,
} from "../controller/authController";

const router = express.Router();

router.route("/create-account").post(createAccount);

router.route("/all-account").get(allAccount);

router.route("/:accountID/single-account").get(getSingleAccount);

router.route("/:token/first-mail").post(firstAccountVerification);

router.route("/all-accounts").get(getAllUser);

router.route("/:userID/delete").delete(deleteUser);

router.route("/reset-account-password").patch(resetAccountPassword);

router.route("/sign-in-account").post(SignInUser);

router.route("/:token/change-account-password").patch(changeAccountPassword);

router.route("/:token/verify-account").get(accountVerification);

export default router;

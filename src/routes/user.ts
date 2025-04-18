import { Router } from "express";
import { User } from "../models/User";

const router = Router();

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: A list of users.
 */
router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

export default router;

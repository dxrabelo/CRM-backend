import { Router } from "express";
import { register, login } from "../controllers/authController";

import {
  createCustomer,
  getCustomers,
  getUsers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} from "../controllers/customerController";

import { authMiddleware } from "../middlewares/authMiddleware";

const routes = Router();

routes.post("/auth/register", register);
routes.post("/auth/login", login);

routes.get("/users", authMiddleware, getUsers);

routes.post("/customers", authMiddleware, createCustomer);
routes.get("/customers", authMiddleware, getCustomers);


routes.get("/customers/:id", authMiddleware, getCustomerById);
routes.put("/customers/:id", authMiddleware, updateCustomer);
routes.delete("/customers/:id", authMiddleware, deleteCustomer);

export default routes;
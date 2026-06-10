import { Request, Response } from "express";
import { prisma } from "../prisma/client";

export async function createCustomer(
  req: Request,
  res: Response
) {
  try {
    const { name, email, phone, company } = req.body;

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        company,
        userId: req.userId
      }
    });

    return res.status(201).json(customer);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error creating customer"
    });
  }
}

export async function getCustomers(
  req: Request,
  res: Response
) {
  try {
    const customers = await prisma.customer.findMany({
      where: {
        userId: req.userId
      }
    });

    return res.status(200).json(customers);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error fetching customers"
    });
  }
}

export async function getUsers(
  req: Request,
  res: Response
) {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error fetching users"
    });
  }
}

export async function getCustomerById(
  req: Request,
  res: Response
) {
  try {
    const id = String(req.params.id);

    const customer = await prisma.customer.findFirst({
      where: {
        id,
        userId: req.userId
      }
    });

    if (!customer) {
      return res.status(404).json({
        error: "Customer not found"
      });
    }

    return res.status(200).json(customer);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error fetching customer"
    });
  }
}

export async function updateCustomer(
  req: Request,
  res: Response
) {
  try {
    const id = String(req.params.id);

    const customer = await prisma.customer.findFirst({
      where: {
        id,
        userId: req.userId
      }
    });

    if (!customer) {
      return res.status(404).json({
        error: "Customer not found"
      });
    }

    const updatedCustomer =
      await prisma.customer.update({
        where: { id },
        data: req.body
      });

    return res.status(200).json(updatedCustomer);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error updating customer"
    });
  }
}

export async function deleteCustomer(
  req: Request,
  res: Response
) {
  try {
    const id = String(req.params.id);

    const customer = await prisma.customer.findFirst({
      where: {
        id,
        userId: req.userId
      }
    });

    if (!customer) {
      return res.status(404).json({
        error: "Customer not found"
      });
    }

    await prisma.customer.delete({
      where: { id }
    });

    return res.status(200).json({
      message: "Customer deleted successfully"
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error deleting customer"
    });
  }
}
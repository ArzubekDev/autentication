import type { Request, Response } from "express";
import prisma from "../../config/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";

const addNewData = async (req: Request, res: Response) => {
  try {
    const { imageUrl, name, price } = req.body;

    const product = await prisma.product.create({
      data: {
        name,
        imageUrl,
        price: new Prisma.Decimal(price)
      }
    });

    res.status(201).json({
      success: true,
      message: "Product successfully created",
      product
    });
  } catch (error) {
    console.error("Error in addNewData:", error);
    res.status(500).json({
      success: false,
      error: `Error in addNewData: ${error instanceof Error ? error.message : error}`
    });
  }
};

const getAllData = async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" }
    });

    res.status(200).json({
      success: true,
      count: products.length,
      products
    });
  } catch (error) {
    console.error("Error in getAllData:", error); 
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error instanceof Error ? error.message : error}`
    });
  }
};

export default {
  addNewData,
  getAllData
};

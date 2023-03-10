import { ProductModel } from "../../../../model/product.model.js";
import { validateFields } from "../../../../utils/requeridFields.js";

export const updateProductController = {
  async handle(req, res) {
    const { error, msg } = validateFields(
      req,
      ["name", "description"],
      ["price"]
    );

    if (error) {
      return res.status(400).json({ msg });
    }

    try {
      const loggedInUser = req.currentUser;
      const updatedProduct = await ProductModel.findOneAndUpdate(
        { _id: req.params.id },
        {
          ...req.body,
          $push: { updatedBy: loggedInUser._id },
        },
        { new: true, runValidators: true }
      );

      if (!updatedProduct)
        return res.status(404).json({ msg: "Product not found" });

      return res.status(200).json(updatedProduct);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};

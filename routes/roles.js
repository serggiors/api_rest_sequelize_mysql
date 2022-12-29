const express = require("express");
const rolesModel = require("../models/roles");

const rolesRoutes = express.Router();

rolesRoutes.get("/", async (req, res) => {
  const data = await rolesModel.findAll();

  res.json({ status: 200, data });
})

rolesRoutes.get("/:id", async (req, res) => {
  const data = await rolesModel.findByPk(req.params.id);

  res.json({ status: 200, data });
})

rolesRoutes.post("/create", async (req, res) => {
  const data = await rolesModel.create(req.body);

  res.json({ status: 200, data });
})

rolesRoutes.delete("/:id", async (req, res) => {
  const data = await rolesModel.destroy({
    where: {
      id: req.params.id
    }
  })

  res.json({ status: 200, data });
})

rolesRoutes.patch("/:id", async (req, res) => {
  const data = await rolesModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({ status: 200, data });
})

module.exports = rolesRoutes;
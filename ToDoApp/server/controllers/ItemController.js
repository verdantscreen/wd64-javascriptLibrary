const { Router } = require("express");
const { ToDoItem, ToDoList } = require("../models");

const ItemController = Router();

ItemController.post("/new", async (req, res) => {
  try {
    const { listID, name } = req.body;
    const list = await ToDoList.findOne({
      where: {
        id: listID,
        createdBy: req.user.id,
      },
    });
    list
      ? ToDoItem.create({ name, complete: false, listId: listID })
      : res.status(404).json({ message: "List not found" });
    res.status(200).json({
      message: "List Item successfully created",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Failed to make a new item",
    });
  }
});

ItemController.route("/:id")
  .put(async (req, res) => {
    try {
      const { listID, isComplete } = req.body;
      const list = await ToDoList.findOne({
        where: {
          id: listID,
          createdBy: req.user.id,
        },
      });
      if (list) {
        const toUpdate = await ToDoItem.findOne({
          where: {
            id: req.params.id,
            listId: list.id,
          },
        });
        toUpdate.complete = isComplete;
        toUpdate.save();
        res.status(200).json({
          message: "Successfully updated completion",
        });
      } else {
        res.status(404).json({
          message: "Not allowed to update completion on item",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Failed to update completion on item",
      });
    }
  })
  .delete(async (req, res) => {
    try {
      const { listID } = req.body;
      const list = await ToDoList.findOne({
        where: {
          id: listID,
          createdBy: req.user.id,
        },
      });
      if (list) {
        const toRemove = await ToDoItem.findOne({
          where: {
            id: req.params.id,
            listId: list.id,
          },
        });
        toRemove
          ? toRemove.destroy()
          : res.status(404).json({ message: "Item not found" });
        res.status(200).json({
          message: "Successfully deleted item",
        });
      } else {
        res.status(404).json({
          message: "Cannot delete item",
        });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({
        message: "Failed to delete item",
      });
    }
  });

module.exports = ItemController;

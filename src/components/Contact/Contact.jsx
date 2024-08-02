import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { Button, Typography, TextField } from "@mui/material";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => toast.success("Contact deleted successfully"))
      .catch(() => toast.error("Failed to delete contact"));
    setIsModalOpen(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editContact(id, { name: newName, number: newNumber }))
      .then(() => {
        toast.success("Contact updated successfully");
        name = newName;
        number = newNumber;
      })
      .catch(() => toast.error("Failed to update contact"));
    setIsEditing(false);
  };

  return (
    <>
      <li className={css.container}>
        <div className={css.list}>
          <div className={css.listItem}>
            <BsPeopleFill />
            {isEditing ? (
              <TextField
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                variant="outlined"
                size="small"
              />
            ) : (
              <Typography variant="body1">{name}</Typography>
            )}
          </div>
          <div className={css.listItem}>
            <ImPhone />
            {isEditing ? (
              <TextField
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                variant="outlined"
                size="small"
              />
            ) : (
              <Typography variant="body1">{number}</Typography>
            )}
          </div>
        </div>
        <div className={css.buttonContainer}>
          {isEditing ? (
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                color="error"
                size="small"
                sx={{ fontSize: 10 }}
                onClick={() => setIsModalOpen(true)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ fontSize: 10 }}
                onClick={handleEdit}
              >
                Edit
              </Button>
            </>
          )}
        </div>
      </li>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";

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
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
          <div className={css.listItem}>
            <ImPhone />
            {isEditing ? (
              <input
                type="tel"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
              />
            ) : (
              <span>{number}</span>
            )}
          </div>
        </div>
        <div className={css.buttonContainer}>
          {isEditing ? (
            <button onClick={handleSave}>Save</button>
          ) : (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: "red", color: "white" }}
              >
                Delete
              </button>
              <button
                onClick={handleEdit}
                style={{ backgroundColor: "green", color: "white" }}
              >
                Edit
              </button>
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

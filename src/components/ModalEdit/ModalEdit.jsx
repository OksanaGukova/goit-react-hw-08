import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Modal, Button, Typography } from "@mui/material";
import { editContact } from "../../redux/contacts/operations";

const ModalEdit = ({ isOpen, onRequestClose, contact }) => {
  const dispatch = useDispatch();
  const [isConfirming, setIsConfirming] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSave = () => {
    setIsConfirming(true);
  };

  const handleCancel = () => {
    setIsConfirming(true);
  };

  const handleConfirmSave = () => {
    dispatch(
      editContact({
        id: contact.id,
        updatedContact: { name: newName, number: newNumber },
      })
    );
    onRequestClose();
  };

  const handleConfirmCancel = () => {
    onRequestClose();
  };

  return (
    <Modal open={isOpen} onClose={onRequestClose}>
      <div className={css.modalContainer}>
        <Typography variant="h6">Edit Contact</Typography>
        <div className={css.modalContent}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <div className={css.modalActions}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
          <Button variant="contained" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
        {isConfirming && (
          <div className={css.modalConfirm}>
            <Typography variant="body1">
              Are you sure you want to save changes?
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmSave}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleConfirmCancel}
            >
              No
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalEdit;

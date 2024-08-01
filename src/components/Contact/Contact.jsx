import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ImPhone } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

import toast from 'react-hot-toast';
import DeleteConfirmationModal from '../DeleteConfirmationModal/DeleteConfirmationModal';

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .then(() => toast.success('Contact deleted successfully'))
      .catch(() => toast.error('Failed to delete contact'));
    setIsModalOpen(false);
  };

  return (
    <>
      <li className={css.container}>
        <div className={css.list}>
          <div className={css.listItem}>
            <BsPeopleFill />
            <p>{name}</p>
          </div>
          <div className={css.listItem}>
            <ImPhone />
            <p>{number}</p>
          </div>
        </div>
        <button className={css.delButton} onClick={() => setIsModalOpen(true)}>
          Delete
        </button>
      </li>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

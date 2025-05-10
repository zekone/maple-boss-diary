import "./EditEntry.css";
import { useState } from 'react';
import { api, inputs } from "../constant";
import axios from "axios";
import { FiEdit3, FiTrash2, FiSave, FiX } from "react-icons/fi";
import Modal from "../components/Modal";

const EditEntry = ({ id, boss, date, editId, setEditId }) => {
    const [inputId, setInputId] = useState(id);
    const [inputBoss, setInputBoss] = useState(boss);
    const [inputDate, setInputDate] = useState(date);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onIdInput = e => {
        setInputId( e.target.value.replace(/\s/g, ''));
    };

    const onBossInput = e => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z ]/g, '');
        const checkStartSpace = onlyLetters.replace(/^\s*/g, '');
        const capitalizeFirst = checkStartSpace.replace(/\b[a-z]/g, x=>x.toUpperCase());
        setInputBoss(capitalizeFirst);
    };

    const onDateInput = e => {
        setInputDate(e.target.value.replace(/[^0-9]/g, ''));
    };

    const handleSave = async () => {

        if (!isInputValid()) {
            alert("Input data is invalid.");
            return;
        }


        // const response = await axios.put(`${api.EDIT}/${id}`, {id:inputId, boss:inputBoss.replace(/\s*$/g, ''), date:inputDate});
        
        // if (response.status !== 201) {
        //     alert(`Failed to edit ${id}.`);
        // }

        setEditId("");
        alert(`Not implemented.`);
    };

    const handleDelete = async () => {
        // const response = await axios.delete(`${api.DELETE}/${id}`);

        // if (response.status !== 201) {
        //     alert(`Failed to delete ${id}.`);
        // }
        alert(`Not implemented.`);
    };

    const handleCancelEdit = () => {
        setEditId("");
        setInputId(id);
        setInputBoss(boss);
        setInputDate(date);
    };

    const isSelfEditing = () => editId === id;
    
    const isOthersEditing = () => editId !== "" && editId !== id;

    const isInputValid = () => {
        return inputId.length > 0 && inputBoss.length > 0 && inputDate.length === 6;
    }

	return (
        <>
            <div className='edit-entry'>
                <input
                    className="edit-entry-input id-input"
                    disabled={!isSelfEditing()}
                    type="text"
                    value={inputId}
                    maxLength={inputs.MAX_ID_LENGTH}
                    onChange={onIdInput}
                />

                <input
                    className="edit-entry-input name-input"
                    disabled={!isSelfEditing()}
                    type="text"
                    value={inputBoss}
                    maxLength={inputs.MAX_NAME_LENGTH}
                    onChange={onBossInput}
                />

                <input
                    className="edit-entry-input date-input"
                    disabled={!isSelfEditing()}
                    type="text"
                    value={inputDate}
                    maxLength={inputs.MAX_DATE_LENGTH}
                    onChange={onDateInput}
                />
                
                {
                    isSelfEditing()? 
                    (<FiSave className="edit-entry-button" onClick={handleSave}/>)
                    :
                    (<FiEdit3 
                        className={`edit-entry-button${isOthersEditing()? "-disabled" : ""}`} 
                        onClick={isOthersEditing()? ()=>{} : ()=>setEditId(id)}
                    />)
                }

                {
                    isSelfEditing()? 
                    (<FiX className="edit-entry-button" onClick={handleCancelEdit}/>)
                    :
                    (<FiTrash2 
                        className={`edit-entry-button${isOthersEditing()? "-disabled" : ""}`} 
                        onClick={isOthersEditing()? ()=>{} : () => setIsModalOpen(true)}
                    />)
                }
            </div>

            {isModalOpen && (
                <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    message={`Deleting ${id} will also delete all its data. Do you wish to proceed?`}
                    buttonName={"Delete"}
                    onClick={handleDelete}
                    onClose={()=>{}}
                />
            )}
        </>
	)
}

export default EditEntry
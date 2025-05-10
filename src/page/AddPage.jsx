import "./AddPage.css"
import { api, inputs } from "../constant";
import { useState } from 'react';
import axios from "axios";

const AddPage = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [id, setId] = useState('');
    const [boss, setBoss] = useState('');
    const [date, setDate] = useState('');
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!videoFile || !thumbnailFile) {
            return setMessage('Please select both video and thumbnail files.');
        }
    
        const formData = new FormData();
        formData.append('id', id);
        formData.append('boss', boss.replace(/\s*$/g, ''));
        formData.append('date', date);
        formData.append('video', videoFile);
        formData.append('thumbnail', thumbnailFile);
    
        try {
            setUploading(true);
            // await axios.post(api.ADD, formData, {
            //     headers: { 'Content-Type': 'multipart/form-data' },
            //     onUploadProgress: (progressEvent) => {
            //         const total = progressEvent.total;
            //         const current = progressEvent.loaded;
            //         const percentage = Math.floor((current / total) * 100);
            //         setMessage(`Upload progess: ${percentage}%`);
            //     }
            // });
            setMessage(`Not implemented.`);
            setVideoFile(null);
            setThumbnailFile(null);
            setId('');
            setBoss('');
            setDate('');
        } catch (err) {
            console.error(err);
            setMessage('Upload failed.');
        } finally {
            setUploading(false);
        }
    };

    const onIdInput = e => {
        setId( e.target.value.replace(/\s/g, ''));
    };

    const onNameInput = e => {
        const onlyLetters = e.target.value.replace(/[^a-zA-Z ]/g, '');
        const checkStartSpace = onlyLetters.replace(/^\s*/g, '');
        const capitalizeFirst = checkStartSpace.replace(/\b[a-z]/g, x=>x.toUpperCase());
        setBoss(capitalizeFirst);
    };

    const onDateInput = e => {
        setDate(e.target.value.replace(/[^0-9]/g, ''));
    };

    return (
        <div className='page-container'>
            <div className='form-container'>
                <form className='add-form' onSubmit={onSubmit}>
                    <h2>Add New Entry</h2>
                    
                    <label className="text-label">
                        ID
                        <input
                            className="form-text-input"
                            type="text"
                            maxLength={inputs.MAX_ID_LENGTH}
                            value={id}
                            onChange={onIdInput}
                            disabled={uploading}
                            title=""
                            required
                        />
                    </label>

                    <label className="text-label">
                        Boss
                        <input
                            className="form-text-input"
                            type="text"
                            maxLength={inputs.MAX_NAME_LENGTH}
                            value={boss}
                            onChange={onNameInput}
                            disabled={uploading}
                            title=""
                            required
                        />
                    </label>

                    <label className="text-label">
                        Date
                        <input
                            className="form-text-input"
                            type="text"
                            maxLength={inputs.MAX_DATE_LENGTH}
                            pattern="[0-9]{6}"
                            value={date}
                            onChange={onDateInput}
                            disabled={uploading}
                            title=""
                            required
                        />
                    </label>

                    <label className="file-label no-wrap">
                        {"Video: "}
                        <input
                            className="form-file-input"
                            type="file"
                            accept="video/mp4"
                            disabled={uploading}
                            onChange={e => setVideoFile(e.target.files[0])}
                        />
                        <span>{videoFile?videoFile.name:"None"}</span>
                    </label>

                    <label className="file-label no-wrap">
                        {"Thumbnail: "} 
                        <input
                            className="form-file-input"
                            type="file"
                            accept="image/jpeg"
                            disabled={uploading}
                            onChange={e => setThumbnailFile(e.target.files[0])}
                        />
                        <span>{thumbnailFile?thumbnailFile.name:"None"}</span>
                    </label>

                    <button className="upload-button"  type="submit" disabled={uploading}>
                        {uploading ? 'Uploading…' : 'Upload'}
                    </button>

                    {message && <span className="message no-wrap">{message}</span>}
                </form>
            </div>
        </div>
    )
}
  
export default AddPage
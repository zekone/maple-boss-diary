import "./EditPage.css"
import EditEntry from "../components/EditEntry"
import { useState } from "react"

const EditPage = ({ data }) => {
    const [editId, setEditId] = useState("");

	return (
		<div className='page-container'>
            <div className='edit-page'>
                {[...data]
                .sort((a, b) => a.boss.localeCompare(b.boss))
                .map((item) => 
                    <EditEntry 
                        key={item.id} 
                        id={item.id} 
                        boss={item.boss} 
                        date={item.date} 
                        editId={editId}
                        setEditId={setEditId}
                    />
                )}
            </div>
		</div>
	)
}

export default EditPage
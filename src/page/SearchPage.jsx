import './SearchPage.css'
import React from 'react';
import { useLocation } from 'react-router-dom';
import ContentCard from '../components/ContentCard';

const SearchPage = ({ data, setVideoId }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query'); 

    return (
        <div className='page-container'>
            <p className='query-message'> {query? `Results for: ${query}` : "No search query provided."} </p>

            <div className='search-result-contents'>
            {query && (
                data
                    .filter(item => item.boss.toLowerCase().includes(query.toLowerCase()))
                    .map((item) => (
                        <ContentCard
                            key={item.id}
                            id={item.id}
                            boss={item.boss}
                            week={item.week}
                            date={item.date}
                            setVideoId={setVideoId}
                        />
                    ))
            )}
            </div>

        </div>
    );
};

export default SearchPage;
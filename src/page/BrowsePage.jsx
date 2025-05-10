import "./BrowsePage.css";
import SortByMenu from "../components/SortByMenu";
import ContentSection from "../components/ContentSection";


const BrowsePage = ({ displayItems, sectionRef, sortBy, setSortBy, setVideoId }) => {
    return (
		<div className='page-container'>

            <div className='sort-control-container'>
                <span className='no-wrap'>Sort By: </span>
                <SortByMenu sortBy={sortBy} setSortBy={setSortBy}/>
            </div>

            <div className='content-container'>
                {displayItems.map(displayItems =>
                    <ContentSection
                        key={displayItems.header}
                        header={displayItems.header}
                        contents={displayItems.contents}
                        setVideoId={setVideoId}
                        divref={element => sectionRef.current[`${displayItems.header}`] = element}
                    />
                )}
            </div>
		</div>
    )
}

export default BrowsePage
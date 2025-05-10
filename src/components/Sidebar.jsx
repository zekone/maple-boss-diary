import './Sidebar.css';

const Sidebar = ({ sidebar, sections, handleScrollToSection, handleCloseSidebar }) => {
    return (
        <>
            <nav className={`sidebar-nav ${sidebar ? 'active' : ''}`}>
                {sections.map(section => (
                    <span
                        key={section}
                        className="sidebar-item no-wrap"
                        onClick={() => {
                            handleScrollToSection(section);
                            handleCloseSidebar();
                        }}>
                        {section}
                    </span>
                ))}
            </nav >
        </>
    );
};

export default Sidebar;
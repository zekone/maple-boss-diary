import './Sidebar.css';

const Sidebar = ({ sidebar, handleScrollToSection, sections, handleCloseSidebar }) => {
    return (
        <>
            <nav className={`sidebar-nav ${sidebar ? 'active' : ''}`}>
                {sections.map(section => (
                    <a
                        key={section}
                        className="sidebar-item no-wrap"
                        onClick={() => {
                            handleScrollToSection(section);
                            handleCloseSidebar();
                        }}>
                        {section}
                    </a>
                ))}
            </nav >
        </>
    );
};

export default Sidebar;
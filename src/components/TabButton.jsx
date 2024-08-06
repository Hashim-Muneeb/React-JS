const TabButton = ({ onSelect, children }) => {
    return(
        <li>
           <button onClick={onSelect}>
              {children}
           </button>
        </li>
    )
}
export default TabButton;
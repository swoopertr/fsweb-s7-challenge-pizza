import Dropdown from "./Dropdown";

const DoughTypeComponent = () => {
const menuItems = [
    { label: "Normal", href: "Normal" },
    { label: "İnce", href: "İnce" },
    { label: "Kalın", href: "Kalın" },
  ];

return (
    <>
    <Dropdown buttonLabel="Dropdown button" menuItems={menuItems} />
    </>
)
}

export default DoughTypeComponent;
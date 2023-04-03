import { Link } from "react-router-dom";
import { Form, Input } from "../../components";
import { useState } from "react";

export default function AppNavigator() {
  const [tab, setTab] = useState(1);
  const navItems = ['forum', 'members'];
  const component = <Input type={'search'} placeHolder={'Search...'} />;
  const handleSeletedTab = (index) => {
    setTab(index);
  }
  const setClassName = (index) => {
    return tab === index ? 'active' : null;
  }
  return (
    <nav className="app-content__navigator">
      <ul className="nav-menu">
        {
          navItems.map((item, index) => (
            <li key={index} className={setClassName(index)} onClick={() => handleSeletedTab(index)}>
              <Link to={`/${item}`}>{item}</Link>
            </li>
          ))
        }
      </ul>
      <Form component={component} />
    </nav>
  )
}

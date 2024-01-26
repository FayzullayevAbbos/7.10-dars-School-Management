import { GroupOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { NavLink, useLocation } from "react-router-dom";


const menu = [
    {
        path:"/teachers",
        label:"Teachers",
        icon:<UserOutlined></UserOutlined>
    },
    {
        path:"/classes",
        label:"Classes",
        icon:<GroupOutlined></GroupOutlined>
    },
]
function Sidbar({collapse}) {
    const location = useLocation()
    
  return (
    <Sider
     trigger={null}
      width={250}
       collapsed={collapse}
       >
      <div className=" flex items-center font-bold text-white border-b gap-3 text-[18px] border-b-[#4B5A59] h-[64px] pl-3  py-0 ">
        {!collapse ? (
          <img className="w-[46px] " src="src/imges/logo.png" alt="" />
        ) : (
          ""
        )}
        <span>Teacher</span>
      </div>
      <Menu
        mode="vertical"
        theme="dark"
        selectedKeys={[location.pathname]}
        items={menu.map((m , i) => ({
            ...m,
            key:m.path,
            label:<NavLink  to={m.path}>{m.label}</NavLink>

        }))}
      />
    </Sider>
  );
}

export default Sidbar;

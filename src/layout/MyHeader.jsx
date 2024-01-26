import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";

function MyHeader({collapse , setCollapse}) {
  return (
    <Header className="bg-[#00152a p-0">
      |
      <Button
        className=" ml-5 w-[64px]  items-center pb-3 logo-bg"
        type="text"
        icon={
          collapse ? (
            <MenuUnfoldOutlined className="text-white text-[20px]" />
          ) : (
            <MenuFoldOutlined className="text-white text-[20px]" />
          )
        }
        onClick={() => setCollapse(!collapse)}
      />
    </Header>
  );
}

export default MyHeader;

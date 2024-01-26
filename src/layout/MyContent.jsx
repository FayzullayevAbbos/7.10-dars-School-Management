import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

function MyContent() {
  return (
    <Content className="bg-white p-[24px] rounded-[10px]">
      <Outlet/>
    </Content>
  );
}

export default MyContent;

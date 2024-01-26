

import {  Layout } from "antd";
import Sidbar from "../layout/Sidbar";
import MyHeader from "../layout/MyHeader";
import MyContent from "../layout/MyContent";
import { useState } from "react";


const Root = () => {
  const [collapse , setCollapse] = useState(false)
  return (
    <Layout className="min-h-full ">
      <Sidbar collapse={collapse} />
      <Layout>
        <MyHeader collapse={collapse} setCollapse={setCollapse}/>
        <Layout className="p-[24px]">
          <MyContent/>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Root;

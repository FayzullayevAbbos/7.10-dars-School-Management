import { DeleteFilled, UserAddOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Form, Input, Table } from "antd";

import { useEffect, useState } from "react";
import useTeacher from "../hooks/useTeacher";
import { useForm } from "antd/es/form/Form";



function Teachers() {
  const [form] = useForm();

  const { loading, data, addTeacher , deleteTeacher,open , setOpen } = useTeacher();

  const onFinish = (values) => {
    addTeacher(values);
  };

  useEffect(() => {
    if (!open) {
      form.resetFields();
    }
  }, [open]);


  const colums = [
    {
      title: "Ism",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Familya",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Actions",
      
      key: "actions",
      render:(record) => <Button danger onClick={() => deleteTeacher(record.id)} type="primary" icon={<DeleteFilled/>}></Button>
    },
  ];

  return (
    <div>
      <Flex className=" justify-between">
        <h1 className="text-[23px] font-bold ">Teachers</h1>
        <Button
          type="primary"
          onClick={() => setOpen(true)}
          className=" logo-bg"
          icon={<UserAddOutlined />}
        ></Button>
      </Flex>
      <br />
      <Table
        loading={loading}
        rowKey={"id"}
        columns={colums}
        dataSource={data}
      />
      <Drawer
        onClose={() => setOpen(false)}
        title={"Add new teacher"}
        open={open}
        placement="right"
      >
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          name="add_teacher"
        >
          <Form.Item
            rules={[
              {
                required: true,
                message: "Name please",
              },
            ]}
            label={"Ism"}
            name={"firstName"}
          >
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: "lastName please",
              },
            ]}
            label={"Familya"}
            name={"lastName"}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" className="logo-bg">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

export default Teachers;

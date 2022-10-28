import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Alert, Typography } from "antd";

interface IFormItems {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FunctionComponent<any> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const submitLoginForm = async (values: IFormItems) => {
    console.log(values);
  };

  const renderLogin = () => (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={submitLoginForm}
      autoComplete="off"
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input placeholder={"Username"} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder={"Password"} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>{"Remember me"}</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          {"Sign In"}
        </Button>
      </Form.Item>
    </Form>
  );
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-2xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-xl w-50 max-w-md">
        <div>
          <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
            Sign-in Now
          </div>
          <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
            Enter your credentials below to sign in
          </div>
        </div>
        <div className="mt-10">{renderLogin()}</div>
      </div>
    </div>
  );
};

export default Login;

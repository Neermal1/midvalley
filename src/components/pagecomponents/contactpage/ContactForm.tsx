import axiosInstance from "@/axiosInstance/axiosInstance";
import { Button, Form, Input, notification } from "antd";
import React from "react";

const ContactForm = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const handleContactSubmit = async (values: any) => {
    try {
      if (values) {
        const payload = {
          name: values?.name,
          email: values?.email,
          phone: values?.phone_number,
          message: values?.message,
        };
        const response = await axiosInstance.post("/contact/store", payload);
        if (response.status === 200) {
          notification.success({
            message: response?.data?.message,
          });
        }
        form.resetFields();
      }
    } catch (e) {
      console.log(e);
      notification?.error({
        message: "Sorry Something went wrong!!",
      });
    }
  };
  return (
    <div>
      <div className="">
        <div className="bg-[#F5F5F5] group drop-shadow-md p-4 md:p-8 lg:p-20 rounded-[8px]">
          <Form
            form={form}
            layout="vertical"
            className="flex flex-col gap-4"
            onFinish={handleContactSubmit}
          >
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="text-[16px] font-medium">Your Name</div>
                </div>
                <Form.Item
                  hasFeedback
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your full name",
                    },
                  ]}
                  className="form-label"
                >
                  <Input size="large" placeholder="Enter your full name here" />
                </Form.Item>
              </div>

              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="text-[16px] font-medium">Email Address</div>
                </div>

                <Form.Item
                  hasFeedback
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your email address",
                    },
                    {
                      pattern: /^[a-z][a-z0-9._]*@[a-z][a-z0-9]*.[a-z]+/,
                      message:
                        "Please provide your email address in correct format",
                    },
                  ]}
                  className=""
                >
                  <Input
                    size="large"
                    placeholder="Enter your email address here"
                  />
                </Form.Item>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4">
                <div className="">
                  <div className="text-[16px] font-medium ">Phone Number</div>
                </div>

                <Form.Item
                  hasFeedback
                  name="phone_number"
                  rules={[
                    {
                      required: true,
                      message: "Please provide your valid phone number",
                    },
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Mobile number must be 10 digits",
                    },
                  ]}
                  className=""
                >
                  <Input
                    size="large"
                    placeholder="Enter your phone number here"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="">
                <div className="text-[16px] font-medium ">Message</div>
              </div>
              <Form.Item
                hasFeedback
                name="message"
                rules={[
                  { required: true, message: "Please provide your message" },
                ]}
                className="color-changer"
              >
                <TextArea
                  rows={4}
                  cols={10}
                  className=""
                  placeholder="Enter your message please"
                  autoSize={false}
                />
              </Form.Item>
            </div>

            <Form.Item className="flex items-center justify-center">
              <Button
                size="large"
                htmlType="submit"
                style={{
                  backgroundColor: "#1a3f91",
                  color: "white",
                }}
                className="lg:w-[40vh] h-[6vh]"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

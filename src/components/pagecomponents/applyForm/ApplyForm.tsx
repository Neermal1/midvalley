import axiosInstance from "@/axiosInstance/axiosInstance";
import useFetchData from "@/hooks/useFetchData";
import { Button, Form, Input, Select, notification } from "antd";
import { useState } from "react";

const ApplyForm = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const { fetchedData } = useFetchData("/academic-programs");
  const { Option } = Select;

  const [academicId, setAcademicId] = useState<any>(null);

  const handleContactSubmit = async (values: any) => {
    try {
      if (values) {
        const payload = {
          name: values?.name,
          email: values?.email,
          phone: values?.phone_number,
          message: values?.message,
          academic_program_id: academicId,
          previous_school_name: values?.previous_school_name,
        };

        try {
          const response = await axiosInstance.post(
            "/application/store",
            payload
          );

          notification.success({
            message: response?.data?.message,
          });
          form?.resetFields();
        } catch (e: any) {
          console.log(e);
          notification.error({
            message: e.response?.data?.error,
          });
        }

        form.resetFields();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="">
      <div className="bg-[white] w-fit group drop-shadow-md p-4 md:p-8 lg:p-20 rounded-[8px]">
        <Form
          form={form}
          layout="vertical"
          className="flex flex-col gap-4"
          onFinish={handleContactSubmit}
        >
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
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your full name here"
              />
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
                type="email"
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your email address here"
              />
            </Form.Item>
          </div>

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
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your phone number here"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">
                Previous School Name
              </div>
            </div>
            <Form.Item
              hasFeedback
              name="previous_school_name"
              rules={[
                {
                  required: true,
                  message: "Please provide your previous school name",
                },
              ]}
              className="form-label"
            >
              <Input
                className="lg:w-[380px] w-[300px]"
                size="large"
                placeholder="Enter your previous school name"
              />
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium">
                Select an Academic program
              </div>
            </div>
            <Form.Item
              hasFeedback
              name="academicProgram"
              rules={[
                {
                  required: true,
                  message: "Please provide your academic program",
                },
              ]}
              className="form-label"
            >
              <Select
                onSelect={(value, option) => {
                  setAcademicId(option?.key);
                }}
                placeholder="Select an Academic program"
              >
                {fetchedData?.map((data: any) => (
                  <Option
                    label={data?.title}
                    value={data?.title}
                    key={data?.id}
                  >
                    {data?.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <div className="flex flex-col gap-4">
            <div className="">
              <div className="text-[16px] font-medium ">Message</div>
            </div>
            <Form.Item
              hasFeedback
              name="message"
              rules={[
                { required: false, message: "Please provide your message" },
              ]}
              className="color-changer"
            >
              <TextArea
                rows={4}
                cols={10}
                className="lg:w-[380px] w-[300px]"
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
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ApplyForm;

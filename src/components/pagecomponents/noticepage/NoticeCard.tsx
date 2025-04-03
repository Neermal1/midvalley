/* eslint-disable @next/next/no-img-element */

import { Modal } from "antd";
import { useState } from "react";
import { AiFillEye } from "react-icons/ai";

export default function NoticeCard({ notice }: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const [notice_image, set_notice_image] = useState<any>(null);

  const handleViewImage = (notice_image_link: any) => {
    const isPDF = notice?.image_link?.endsWith(".pdf");

    if (isPDF) {
      window.open(`${notice?.image_link}`, "_blank");
    } else {
      // If the notice is an image, display it in the modal
      set_notice_image(notice_image_link);
      setModalVisible(true);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <div className="border border-gray-500 rounded-2xl pl-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-6">
            <div className="text-gray-700  font-medium text-base md:text-lg lg:text-xl">
              <div>
                {new Date(notice?.created_at).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </div>
            </div>
            <h3 className="text-sm md:text-base lg:text-lg font-normal text-primary mb-2">
              {notice?.title}
            </h3>
          </div>
          <div>
            <button
              className=" bg-primary text-white px-4 py-2 text-base lg:text-lg font-bold rounded-s-xl"
              onClick={() => {
                handleViewImage(notice?.image_link);
              }}
            >
              <AiFillEye className="inline mr-1" />
              View
            </button>
          </div>
        </div>
      </div>
      <Modal open={modalVisible} onCancel={handleCloseModal} footer={null}>
        <img
          src={notice_image}
          alt={notice?.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Modal>
    </>
  );
}

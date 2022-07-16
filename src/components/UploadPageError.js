import {
  Form,
  Divider,
  Input,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import { useState } from "react";
import "./UploadPage.css";

const { TextArea } = Input;

const UploadPage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const onSubmit = (values) => {
    console.log("this is value", values);
  };
  const onChangeImage = (info) => {
    if (info.file.status === "uploading") {
      return;
    }
    if (info.file.status === "done") {
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl);
    }
  };

  /* const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";

    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }

    return isJpgOrPng && isLt2M;
  };
 */
  //const uploadButton = <div>Upload</div>;

  return (
    <div id="body">
      <div id="upload-container">
        <Form name="uploadForm" onFinish={onSubmit}>
          <Form.Item
            name="upload"
            label={<div className="upload-label">상품사진</div>}
          >
            <Upload
              name="image"
              action="http://localhost:8080/image"
              listType="picture"
              showUploadList={false}
              onChange={onChangeImage}
            >
              {imageUrl ? (
                <img
                  id="upload-img"
                  src={`http://localhost:8080/${imageUrl}`}
                />
              ) : (
                <div id="upload-img-placeholder">
                  <img src="/images/icons/camera.png" />
                  <span>이미지업로드</span>
                </div>
              )}
            </Upload>
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">판매자명</div>}
            name="seller"
            rules={[{ required: true, message: "판매자명을 입력해주세요" }]}
          >
            <Input
              className="upload-name"
              size="large"
              placeholder="판매자명을 입력해주세요"
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">상품명</div>}
            name="product"
            rules={[{ required: true, message: "상품명을 입력해주세요" }]}
          >
            <Input
              className="upload-name"
              size="large"
              placeholder="상품명을 입력해주세요"
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">판매가</div>}
            name="price"
            rules={[{ required: true, message: "판매가를 입력해주세요" }]}
          >
            <InputNumber
              className="upload-price"
              size="large"
              min={0}
              defaultlValue={0}
            />
          </Form.Item>
          <Divider />
          <Form.Item
            label={<div className="upload-label">상품설명</div>}
            name="description"
            rules={[{ required: true, message: "상품설명을 입력해주세요" }]}
          >
            <TextArea
              size="large"
              id="product-description"
              placeholder="상품설명을 입력해주세요"
              showCount
              maxLength={300}
            />
          </Form.Item>
          <Form.Item>
            <Button id="submit-button" size="large" htmlType="submit">
              상품등록하기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default UploadPage;

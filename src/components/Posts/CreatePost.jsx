import { useFormik } from "formik";
import * as Yup from "yup";
import { createPostApi } from "../../APIServices/postsApi";
import { useMutation } from "@tanstack/react-query";
import ReactQuill from "react-quill";
import "quill/dist/quill.snow.css";
import "./style.scss";
import { useState } from "react";

// Register custom fonts and sizes
import { Quill } from "react-quill";

var Font = Quill.import("formats/font");
Font.whitelist = ["arial", "roboto", "raleway", "montserrat", "lato", "rubik"];
Quill.register(Font, true);

var Size = Quill.import("formats/size");
Size.whitelist = [
  "9px",
  "10px",
  "11px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "22px",
  "24px",
  "26px",
  "28px",
];
Quill.register(Size, true);

function CreatePost() {
  const postMutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: (postData) => {
      return createPostApi(postData);
    },
  });

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      postMutation.mutate(values);
      resetForm();
    },
  });

  const [description, setDescription] = useState("");

  const toolBarOptions = [
    [{ font: Font.whitelist }], // Custom fonts
    [{ size: Size.whitelist }], // Custom sizes
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }], // Color and background color
    ["clean"], // Remove formatting button
  ];

  const formats = [
    "font",
    "size", // Include font and size in formats
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
  ];

  const modules = { toolbar: toolBarOptions };
  const isLoading = postMutation.isPending;
  //isErr
  const isError = postMutation.isError;
  //success
  const isSuccess = postMutation.isSuccess;
  //Error
  const errorMsg = postMutation?.error?.response?.data?.message;

  return (
    <div className="flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 m-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Add New Post
        </h2>
        {/* show alert */}

        {isLoading && (
          // <AlertMessage type="loading" message="Loading please wait" />
          <p>Loading...</p>
        )}
        {isSuccess && (
          // <AlertMessage type="success" message="Post created successfully" />
          <p>Post created successfully</p>
        )}
        {/* {isError && <AlertMessage type="error" message={errorMsg} />} */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Description Input - Using ReactQuill for rich text editing */}
          <div className="mb-10">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <ReactQuill
              value={formik.values.description}
              modules={modules}
              formats={formats}
              onChange={(e) => {
                setDescription(e);
                formik.setFieldValue("description", e);
              }}
            />

            {/* display err msg */}
            {formik.touched.description && formik.errors.description && (
              <span style={{ color: "red" }}>{formik.errors.description}</span>
            )}
          </div>

          {/* Category Input - Dropdown for selecting post category */}
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category
            </label>
            {/* <Select
              name="category"
              options={data?.categories?.map((category) => {
                return {
                  value: category._id,
                  label: category.categoryName,
                };
              })}
              onChange={(option) => {
                return formik.setFieldValue("category", option.value);
              }}
              value={data?.categories?.find(
                (option) => option.value === formik.values.category
              )}
              className="mt-1 block w-full"
            /> */}
            {/* display error */}
            {formik.touched.category && formik.errors.category && (
              <p className="text-sm text-red-600">{formik.errors.category}</p>
            )}
          </div>

          {/* Image Upload Input - File input for uploading images */}
          <div className="flex flex-col items-center justify-center bg-gray-50 p-4 shadow rounded-lg">
            <label
              htmlFor="images"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Upload Image
            </label>
            <div className="flex justify-center items-center w-full">
              <input
                id="images"
                type="file"
                name="image"
                accept="image/*"
                // onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
              >
                Choose a file
              </label>
            </div>
            {/* Display error message */}
            {formik.touched.image && formik.errors.image && (
              <p className="text-sm text-red-600">{formik.errors.image}</p>
            )}

            {/* error message */}
            {/* {imageError && <p className="text-sm text-red-600">{imageError}</p>} */}

            {/* Preview image */}

            {/* {imagePreview && (
              <div className="mt-2 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 h-24 w-24 object-cover rounded-full"
                />
                <button
                  onClick={removeImage}
                  className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1"
                >
                  <FaTimesCircle className="text-red-500" />
                </button>
              </div>
            )} */}
          </div>

          {/* Submit Button - Button to submit the form */}
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-500 hover:from-indigo-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;

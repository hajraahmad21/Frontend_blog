import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPostApi, updatePostApi } from "../../APIServices/postsApi";
import { useFormik } from "formik";
import * as Yup from "yup";

function EditPost() {
  const { id } = useParams();
  const { isError, error, data, isLoading, isSuccess } = useQuery({
    queryKey: ["get-post"],
    queryFn: () => getPostApi(id),
  });
  const updatePostMutation = useMutation({
    mutationKey: ["update-post"],
    mutationFn: (postData) => {
      return updatePostApi(id, postData);
    },
  });
  const formik = useFormik({
    initialValues: {
      title: data?.post?.title,
      description: data?.post?.description,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
    }),
    onSubmit: (values) => {
      updatePostMutation.mutate(values);
    },
  });
  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {updatePostMutation.isSuccess && <div>Post updated successfully</div>}
      {updatePostMutation.isError && (
        <div>{updatePostMutation.error.message}</div>
      )}
      {isSuccess && (
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            {...formik.getFieldProps("title")}
          />
          {formik.touched.title && formik.errors.title && (
            <span style={{ color: "red" }}>{formik.errors.title}</span>
          )}
          <input
            type="text"
            name="description"
            {...formik.getFieldProps("description")}
            placeholder="Enter description"
          />
          {formik.touched.description && formik.errors.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
          <button type="submit">update</button>
        </form>
      )}
    </>
  );
}

export default EditPost;

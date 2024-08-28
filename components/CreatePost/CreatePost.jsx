import {useFormik} from "formik"
import * as Yup from 'yup'
import { createPostApi } from "../../src/APIServices/postsApi"
import { useMutation } from "@tanstack/react-query"


function CreatePost() {
  const postMutation= useMutation({
    mutationKey: ["createPost"],
    mutationFn: (postData) => {
      return createPostApi(postData)
    }
  })
  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required')
    }),
    onSubmit: (values, {resetForm}) => {
      postMutation.mutate(values)
      resetForm()
    }
  })
  console.log('mutation', postMutation)
  return (
    <form onSubmit={formik.handleSubmit}>
    <input type="text" name="title" placeholder="Enter title"
    {...formik.getFieldProps("title")}
    />
    {formik.touched.title&& formik.errors.title&& <span style={{color:"red"}}>{formik.errors.title}</span>}
    <input type="text" name="description" 
    {...formik.getFieldProps("description")} placeholder="Enter description" />
    {formik.touched.description&&formik.errors.description&& <span style={{color:"red"}}>{formik.errors.description}</span>}
    <button type="submit">
    submit
    </button>
    </form>
  )
}

export default CreatePost
import * as yup from "yup";
import "yup-phone";

const schema = yup.object().shape({
  firstname: yup.string().required("First name can't be Empty").min(3).max(10),
  lastname: yup.string().max(15),
  parentname: yup
    .string()
    .required("Guardian name can't be Empty")
    .min(3)
    .max(25),
  phonenumber: yup
    .string()
    .phone("IN", true, "Phone number is invalid")
    .required(),

  city: yup.string().required("City info can't be Empty").min(3).max(15),
  school: yup.string().required("School info can't be Empty").min(3).max(35),
  class: yup
    .string()
    .required("class info can't be Empty")
    .matches(/^[1-8]+$/, "Must be from 1th to 8th")
    .min(1, "Must be exactly 1 digits")
    .max(1, "Must be exactly 1 digits"),
});

export default schema;

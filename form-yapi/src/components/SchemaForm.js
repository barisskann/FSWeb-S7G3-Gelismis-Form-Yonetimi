import * as yup from "yup";

let schema = yup.object().shape({
  isim: yup.string().required("İsim zorunludur!!"),
  email: yup.string().email("Email Hatalı").required("Email zorunlu"),
  sifre: yup
    .string()
    .min(3, "3 KARAKTERDEN FAZLA OLMAK ZORUNDA")
    .required("Parola zorunlu alan"),
  isTrue: yup
    .boolean()
    .oneOf([true], "Uygulamayı kullanmak için koşulları kabul etmelisiniz"),
});

export default schema;

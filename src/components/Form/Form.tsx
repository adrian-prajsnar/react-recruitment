import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./Form.module.css";

type FormInputs = {
  foodType: string;
};

const schema = yup
  .object({
    foodType: yup.string().required("To pole jest wymagane."),
  })
  .required();

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="foodType">Jedzenie</label>

      <select
        defaultValue=""
        id="foodType"
        {...register("foodType")}
        className={styles.select}
      >
        <option value="" disabled>
          Wybierz
        </option>
        <option value="vegetables">Warzywa</option>
        <option value="fruits">Owoce</option>
      </select>

      {errors.foodType && (
        <p className={styles.error}>{errors.foodType.message}</p>
      )}

      <button type="submit" className={`${styles.btn} btn-primary`}>
        Wyślij
      </button>
    </form>
  );
}

export default Form;

import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

const FirstStep = ({ formData, onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      Budget: formData.Budget || "",
      RevenueMensuel: formData.RevenueMensuel || "",
      CoutMensuel: formData.CoutMensuel || "",
      Localisation: formData.Localisation || "",
    },

    validationSchema: Yup.object({
      Budget: Yup.number("must be number").required("Budget est obligatoire"),
      RevenueMensuel: Yup.number("must be number").required(
        "RevenueMensuel est obligatoire"
      ),
      CoutMensuel: Yup.number("must be number").required(
        "CoutMensuel est obligatoire"
      ),
      Localisation: Yup.string("must be number").required(
        "Localisation est obligatoire"
      ),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto relative"
    >
      <div className="flex flex-col gap-6 items-center justify-start">
        <h1 className="text-4xl font-semibold absolute top-[-2.5rem] text-primary">
          Informations financiers
        </h1>
        <img src="icons/step2.svg" alt="step2 form image" className="w-2/5 " />
      </div>
      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Budget"
            className={`${
              formik.touched.Budget && formik.errors.Budget
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.Budget && formik.errors.Budget
              ? formik.errors.Budget
              : "Budget "}
          </label>
          <input
            type="text"
            name="Budget"
            placeholder="Vuillez entrer votre Budget"
            value={formik.values.Budget}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary`}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="Localisation"
            className={`${
              formik.touched.Localisation && formik.errors.Localisation
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.Localisation && formik.errors.Localisation
              ? formik.errors.Localisation
              : "Localisation"}
          </label>
          <select
            name="Localisation"
            value={formik.values.Localisation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md outline-none focus:outline-none focus:ring-2 focus:ring-primary h-12 p-3"
          >
            <option value="" label="Localisation" />
            <option value="nord" label="Nord" />
            <option value="sud" label="Sud" />
            <option value="est" label="Est" />
            <option value="ouest" label="Ouest" />
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="RevenueMensuel"
          className={`${
            formik.touched.RevenueMensuel && formik.errors.RevenueMensuel
              ? "text-red-500"
              : ""
          }`}
        >
          {formik.touched.RevenueMensuel && formik.errors.RevenueMensuel
            ? formik.errors.RevenueMensuel
            : "Revenue Mensuel"}
        </label>
        <input
          type="text"
          name="RevenueMensuel"
          placeholder="vuillez entrer votre Revenue Mensuel"
          value={formik.values.RevenueMensuel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="CoutMensuel"
          className={`${
            formik.touched.CoutMensuel && formik.errors.CoutMensuel
              ? "text-red-500"
              : ""
          }`}
        >
          {formik.touched.CoutMensuel && formik.errors.CoutMensuel
            ? formik.errors.CoutMensuel
            : "Cout Mensuel"}
        </label>
        <input
          type="text"
          name="CoutMensuel"
          placeholder="vuillez entrer le cout mensuel"
          value={formik.values.CoutMensuel}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex gap-10 items-center justify-between">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 border-neutral-300 px-10 py-2 w-fit rounded-xl font-semibold text-lg"
          onClick={() => {
            // manually updating the formData with the current value of the fields
            formData.Budget = formik.values.Budget;
            formData.RevenueMensuel = formik.values.RevenueMensuel;
            formData.CoutMensuel = formik.values.CoutMensuel;
            formData.Localisation = formik.values.Localisation;
            onBack(1);
          }}
        >
          Precédent
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary px-10 py-2 text-white w-fit rounded-xl font-semibold text-lg"
          type="submit"
        >
          Suivant
        </motion.button>
      </div>
    </form>
  );
};

export default FirstStep;

// ThirdStep.jsx
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import axiosInstance from "../../../../config/axiosConfig.js";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

const ThirdStep = ({ formData, onBack }) => {
  const token = localStorage.getItem("token");
  const [isUpdatePreview, setIsUpdatePreview] = useState(false);

  const formik = useFormik({
    initialValues: {
      DernierDon: formData.DernierDon || "",
      PremiereDon: formData.PremiereDon || "",
      DonsTotal: formData.DonsTotal || "",
      AngelInvestors: formData.AngelInvestors || false,
      DonCapital: formData.DonCapital || false,
    },
    validationSchema: Yup.object({
      DernierDon: Yup.string().required("Debut est obligatoire"),
      PremiereDon: Yup.string().required("Fin est obligatoire"),
      DonsTotal: Yup.number("must be number").required(
        "DonsTotal est obligatoire"
      ),
      AngelInvestors: Yup.boolean(),
      DonCapital: Yup.boolean(),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const combinedData = { ...formData, ...values };
        const response = await axiosInstance.post("/ideas/add", combinedData, {
          headers: {
            "x-access-token": token,
          },
        });

        toast.success(response.data.message);
        // wait for 2 seconds before redirecting to the dashboard
        setTimeout(() => {
          window.location.href = `/Results/:${response.data.ideaId}`;
        }, 2000);
      } catch (error) {
        console.error(error);
        toast.error("An error occurred while submitting the form.");
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Define the callback to handle file upload status change
  const handleUploadStatusChange = (file, status, formDataKey) => {
    setIsUpdatePreview(!isUpdatePreview);
    if (status === "done") {
      formik.values[formDataKey].push(file.file);
    }

    if (status === "removed") {
      formik.values[formDataKey] = formik.values[formDataKey].filter(
        (item) => item !== file.file
      );
    }
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-6 p-10 px-20 w-4/5 m-auto relative"
      encType="multipart/form-data"
    >
      <ToastContainer />
      <div className="flex flex-col gap-6 items-center justify-start">
        <h1 className="text-4xl font-semibold absolute top-[-2.5rem] text-primary">
          Autres informations
        </h1>
        <img src="icons/step3.svg" alt="step3 form image" className="w-2/5 " />
      </div>

      <div className="flex flex-col gap-10 items-center justify-start">
        <h1 className="text-xl text-primary">
          Choisir le type du support financier :
        </h1>
        <div className="flex gap-10 items-center justify-start">
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="AngelInvestors"
              value="AngelInvestors"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="AngelInvestors">
              {formik.touched.AngelInvestors && formik.errors.AngelInvestors
                ? formik.errors.AngelInvestors
                : "Angel investors"}
            </label>
          </div>
          <div className="flex gap-2 items-center justify-start">
            <input
              type="checkbox"
              name="DonCapital"
              value="DonCapital"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label htmlFor="DonCapital">
              {formik.touched.DonCapital && formik.errors.DonCapital
                ? formik.errors.DonCapital
                : "Don Capital"}
            </label>
          </div>
        </div>
      </div>

      <div className="flex gap-10 items-center justify-start">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="DernierDon"
            className={`${
              formik.touched.DernierDon && formik.errors.DernierDon
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.DernierDon && formik.errors.DernierDon
              ? formik.errors.DernierDon
              : "Année dernier don"}
          </label>
          <input
            type="date"
            name="DernierDon"
            placeholder="vuillez entrer la date du dernier don"
            value={formik.values.DernierDon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="PremiereDon"
            className={`${
              formik.touched.PremiereDon && formik.errors.PremiereDon
                ? "text-red-500"
                : ""
            }`}
          >
            {formik.touched.PremiereDon && formik.errors.PremiereDon
              ? formik.errors.PremiereDon
              : "Année premier don"}
          </label>
          <input
            type="date"
            name="PremiereDon"
            placeholder="vuillez entrer la date du premier don"
            value={formik.values.PremiereDon}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className=" border-[1.5px] border-neutral-300 w-[24.5rem] rounded-md p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="DonsTotal"
          className={`${
            formik.touched.DonsTotal && formik.errors.DonsTotal
              ? "text-red-500"
              : ""
          }`}
        >
          {formik.touched.DonsTotal && formik.errors.DonsTotal
            ? formik.errors.DonsTotal
            : "Total des dons"}
        </label>
        <input
          type="text"
          name="DonsTotal"
          placeholder="vuillez entrer le total des dons"
          value={formik.values.DonsTotal}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className=" border-[1.5px] border-neutral-300 w-full rounded-md  p-6 h-9 outline-none focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Back button */}
      <div className="flex gap-10 items-center justify-between">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="border-2 border-neutral-300 px-10 py-2 w-fit rounded-xl font-semibold text-lg"
          onClick={() => {
            // manually updating the formData with the current value of the fields
            formData.DernierDon = formik.values.DernierDon;
            formData.PremiereDon = formik.values.PremiereDon;
            formData.DonsTotal = formik.values.DonsTotal;
            formData.AngelInvestors = formik.values.AngelInvestors;
            formData.DonCapital = formik.values.DonCapital;
            onBack();
          }}
        >
          Previous
        </motion.button>
        {/* Submit button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary px-10 py-2 text-white w-fit rounded-xl font-semibold text-lg"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Simulating..." : "Simulate"}
        </motion.button>
      </div>
    </form>
  );
};

export default ThirdStep;

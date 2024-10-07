import { Button, Flex, Box } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../components/formComponents/FormInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageNumbers } from "../../interface/home";
import { IJobDetails } from "../../interface/forms";

const JobDetailsForm: React.FC<{
  handleTab: (n: PageNumbers) => void;
}> = ({ handleTab }) => {
  const formik = useFormik<IJobDetails>({
    initialValues: {
      jobTitle: "",
      jobDetails: "",
      jobLocation: "",
      jobPosition: "", // Added jobPosition to the initial values
    },
    validationSchema: Yup.object().shape({
      jobTitle: Yup.string().required("Job Title is required"),
      jobDetails: Yup.string().required("Job Details are required"),
      jobLocation: Yup.string().required("Job Location is required"),
      jobPosition: Yup.string().required("Job position is required"), // Added jobPosition validation
    }),
    onSubmit: (values) => {
      console.log({ values });
      handleTab(2); // Proceed to the next tab after successful validation
    },
  });

  return (
    <Box width="100%" as="form" onSubmit={formik.handleSubmit}>
      <Box width="100%">
        <FormInput
          label="Job Title"
          placeholder="Enter job title"
          name="jobTitle"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobTitle}
          error={formik.errors.jobTitle}
          touched={formik.touched.jobTitle}
        />
        <FormInput
          label="Job Details"
          placeholder="Enter job details"
          name="jobDetails"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobDetails}
          error={formik.errors.jobDetails}
          touched={formik.touched.jobDetails}
        />
        <FormInput
          label="Job Location"
          placeholder="Enter job location"
          name="jobLocation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobLocation}
          error={formik.errors.jobLocation}
          touched={formik.touched.jobLocation}
        />
        <FormInput
          label="Job Position" // Added Job Position field
          placeholder="Enter job position"
          name="jobPosition"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.jobPosition}
          error={formik.errors.jobPosition}
          touched={formik.touched.jobPosition}
        />
        <Flex w="100%" justify="flex-end" mt="4rem" gap="20px">
          <Button colorScheme="gray" type="button" onClick={() => handleTab(0)}>
            Previous
          </Button>
          <Button colorScheme="red" type="submit">
            Next
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default JobDetailsForm;

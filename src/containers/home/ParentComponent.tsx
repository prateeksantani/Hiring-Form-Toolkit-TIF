import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import RequisitionDetailsForm from "./RequisitionDetailsForm";
import JobDetailsForm from "./JobDetailsForm"; // If you have a separate form for job details
import InterviewDetailsForm from "./InterviewSettingsForm";
import PreviewCard from "./PreviewCard";
import { IRequisitionDetails, IJobDetails, IInterViewSettings } from "../../interface/forms";

const ParentComponent: React.FC = () => {
  // State for each section
  const [requisitionDetails, setRequisitionDetails] = useState<IRequisitionDetails>({
    requisitionTitle: "",
    noOfOpenings: 0,
    urgency: "",
    gender: "",
  });

  const [jobDetails, setJobDetails] = useState<IJobDetails>({
    jobTitle: "",
    jobDetails: "",
    jobLocation: "",
  });

  const [interviewSettings, setInterviewSettings] = useState<IInterViewSettings>({
    interviewMode: "",
    interviewDuration: "",
    interviewLanguage: "",
  });

  // Handlers for updating each form's state
  const handleRequisitionChange = (newRequisitionDetails: IRequisitionDetails) => {
    setRequisitionDetails(newRequisitionDetails);
  };

  const handleJobDetailsChange = (newJobDetails: IJobDetails) => {
    setJobDetails(newJobDetails);
  };

  const handleInterviewSettingsChange = (newInterviewSettings: IInterViewSettings) => {
    setInterviewSettings(newInterviewSettings);
  };

  return (
    <Flex width="100%" p="2rem" gap="2rem">
      <Box width="50%">
        {/* Passing state and handler to each form */}
        <RequisitionDetailsForm
          handleRequisitionChange={handleRequisitionChange}
          initialValues={requisitionDetails}
        />
        <JobDetailsForm
          handleJobDetailsChange={handleJobDetailsChange}
          initialValues={jobDetails}
        />
        <InterviewDetailsForm
          handleInterviewSettingsChange={handleInterviewSettingsChange}
          initialValues={interviewSettings}
        />
      </Box>

      <Box width="50%">
        {/* Passing the states to PreviewCard */}
        <PreviewCard
          requisitionDetails={requisitionDetails}
          jobDetails={jobDetails}
          interviewSettings={interviewSettings}
        />
      </Box>
    </Flex>
  );
};

export default ParentComponent;

import { useEffect, useState } from "react";
import useColorSelect from "../hooks/useColors";

export default {
  "Horizontal Stepper": () => {
    const [activeStep, setActiveStep] = useState(1);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          gap: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="tz-stepper horizontal">
            <div className={`tz-step ${activeStep > 0 ? "completed" : ""} ${activeStep === 1 ? "active" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 1 ? <span className="material-symbols-outlined">check</span> : "1"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Account</div>
                <div className="tz-step-description">Create your account</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 1 ? "completed" : ""} ${activeStep === 2 ? "active" : ""} ${activeStep < 2 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 2 ? <span className="material-symbols-outlined">check</span> : "2"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Profile</div>
                <div className="tz-step-description">Set up your profile</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 2 ? "completed" : ""} ${activeStep === 3 ? "active" : ""} ${activeStep < 3 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 3 ? <span className="material-symbols-outlined">check</span> : "3"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Preferences</div>
                <div className="tz-step-description">Choose your preferences</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 3 ? "completed" : ""} ${activeStep === 4 ? "active" : ""} ${activeStep < 4 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 4 ? <span className="material-symbols-outlined">check</span> : "4"}
                </div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Complete</div>
                <div className="tz-step-description">Finish setup</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            className="tz-button"
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
          >
            Previous
          </button>
          <button
            className="tz-button"
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
  "Vertical Stepper": () => {
    const [activeStep, setActiveStep] = useState(1);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          gap: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "600px", display: "flex", gap: "32px" }}>
          <div className="tz-stepper vertical">
            <div className={`tz-step ${activeStep > 0 ? "completed" : ""} ${activeStep === 1 ? "active" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 1 ? <span className="material-symbols-outlined">check</span> : "1"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Personal Information</div>
                <div className="tz-step-description">
                  Enter your name, email, and phone number to get started.
                </div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 1 ? "completed" : ""} ${activeStep === 2 ? "active" : ""} ${activeStep < 2 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 2 ? <span className="material-symbols-outlined">check</span> : "2"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Address Details</div>
                <div className="tz-step-description">
                  Provide your shipping and billing address information.
                </div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 2 ? "completed" : ""} ${activeStep === 3 ? "active" : ""} ${activeStep < 3 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 3 ? <span className="material-symbols-outlined">check</span> : "3"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Payment Method</div>
                <div className="tz-step-description">
                  Add your payment method and billing information.
                </div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 3 ? "completed" : ""} ${activeStep === 4 ? "active" : ""} ${activeStep < 4 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 4 ? <span className="material-symbols-outlined">check</span> : "4"}
                </div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Review & Confirm</div>
                <div className="tz-step-description">
                  Review your information and complete your registration.
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <button
              className="tz-button"
              onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
              disabled={activeStep === 1}
            >
              Previous
            </button>
            <button
              className="tz-button"
              onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
              disabled={activeStep === 4}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  },
  "Clickable Stepper": () => {
    const [activeStep, setActiveStep] = useState(2);
    const [completedSteps, setCompletedSteps] = useState([1]);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    const handleStepClick = (step: number) => {
      if (step <= Math.max(...completedSteps) + 1) {
        setActiveStep(step);
        if (!completedSteps.includes(step - 1) && step > 1) {
          setCompletedSteps([...completedSteps, step - 1]);
        }
      }
    };

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          gap: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="tz-stepper horizontal">
            <div
              className={`tz-step clickable ${completedSteps.includes(1) ? "completed" : ""} ${activeStep === 1 ? "active" : ""}`}
              onClick={() => handleStepClick(1)}
            >
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {completedSteps.includes(1) ? <span className="material-symbols-outlined">check</span> : "1"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Select Plan</div>
              </div>
            </div>

            <div
              className={`tz-step clickable ${completedSteps.includes(2) ? "completed" : ""} ${activeStep === 2 ? "active" : ""} ${!completedSteps.includes(1) ? "disabled" : ""}`}
              onClick={() => handleStepClick(2)}
            >
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {completedSteps.includes(2) ? <span className="material-symbols-outlined">check</span> : "2"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Enter Details</div>
              </div>
            </div>

            <div
              className={`tz-step clickable ${completedSteps.includes(3) ? "completed" : ""} ${activeStep === 3 ? "active" : ""} ${!completedSteps.includes(2) ? "disabled" : ""}`}
              onClick={() => handleStepClick(3)}
            >
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {completedSteps.includes(3) ? <span className="material-symbols-outlined">check</span> : "3"}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Payment</div>
              </div>
            </div>

            <div
              className={`tz-step clickable ${completedSteps.includes(4) ? "completed" : ""} ${activeStep === 4 ? "active" : ""} ${!completedSteps.includes(3) ? "disabled" : ""}`}
              onClick={() => handleStepClick(4)}
            >
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {completedSteps.includes(4) ? <span className="material-symbols-outlined">check</span> : "4"}
                </div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Confirm</div>
              </div>
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", fontFamily: "Inter", fontSize: "13pt" }}>
          Click on any step to navigate (only enabled steps are clickable)
        </p>
      </div>
    );
  },
  "Icon Stepper": () => {
    const [activeStep, setActiveStep] = useState(2);
    const colorType = useColorSelect();

    useEffect(() => {
      document.body.className = `tz-${colorType}-color`;
    }, [colorType]);

    return (
      <div
        className="tz-center-element"
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          gap: "32px",
        }}
      >
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <div className="tz-stepper horizontal">
            <div className={`tz-step ${activeStep > 0 ? "completed" : ""} ${activeStep === 1 ? "active" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 1 ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span className="material-symbols-outlined tz-step-icon">shopping_cart</span>
                  )}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Cart</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 1 ? "completed" : ""} ${activeStep === 2 ? "active" : ""} ${activeStep < 2 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 2 ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span className="material-symbols-outlined tz-step-icon">local_shipping</span>
                  )}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Shipping</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 2 ? "completed" : ""} ${activeStep === 3 ? "active" : ""} ${activeStep < 3 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 3 ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span className="material-symbols-outlined tz-step-icon">payment</span>
                  )}
                </div>
                <div className="tz-step-connector"></div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Payment</div>
              </div>
            </div>

            <div className={`tz-step ${activeStep > 3 ? "completed" : ""} ${activeStep === 4 ? "active" : ""} ${activeStep < 4 ? "disabled" : ""}`}>
              <div className="tz-step-indicator">
                <div className="tz-step-circle">
                  {activeStep > 4 ? (
                    <span className="material-symbols-outlined">check</span>
                  ) : (
                    <span className="material-symbols-outlined tz-step-icon">task_alt</span>
                  )}
                </div>
              </div>
              <div className="tz-step-content">
                <div className="tz-step-label">Done</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          <button
            className="tz-button"
            onClick={() => setActiveStep(Math.max(1, activeStep - 1))}
            disabled={activeStep === 1}
          >
            Previous
          </button>
          <button
            className="tz-button"
            onClick={() => setActiveStep(Math.min(4, activeStep + 1))}
            disabled={activeStep === 4}
          >
            Next
          </button>
        </div>
      </div>
    );
  },
};

export const sendContactForm = async (data) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    hedaer: {
      "Content-type": "appilication/json",
      Accept: "application/json",
    },
  });
};

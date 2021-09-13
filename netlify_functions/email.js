exports.handler = async function (event, context) {
  // your server-side functionality
  var API_KEY = process.env.MG_API_KEY;
  var DOMAIN = process.env.MG_DOMAIN_NAME;
  var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

  console.log("mailgun:", mailgun);

  const body = JSON.parse(event.body);

  const data = {
    from: "info@motorcycle-hire.co.nz",
    to: "nzbike@motorcycle-hire.co.nz",
    subject: body.subject || "Customer enquiry",
    text: JSON.stringify(body.form, null, "\t"),
  };

  return mailgun
    .messages()
    .send(data)
    .then(() => ({
      statusCode: 200,
      body: "Your message was sent successfully! We'll be in touch.",
    }))
    .catch((error) => ({
      statusCode: 422,
      body: `Error: ${error}`,
    }));
};

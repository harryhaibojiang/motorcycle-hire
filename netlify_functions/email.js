exports.handler = async function (event, context) {
  // your server-side functionality
  var API_KEY = process.env.MG_API_KEY;
  var DOMAIN = process.env.MG_DOMAIN_NAME;
  var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

  const body = JSON.parse(event.body);

  const data = {
    from: body.from,
    to: "harryhaibojiang@gmail.com",
    subject: body.subject,
    text: JSON.stringify(body.form, null, "\t"),
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });

  return {
    statusCode: 200,
    body: event.body,
  };
};

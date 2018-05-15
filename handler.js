'use strict';

var hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

var hello2 = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Sveikas, TJ turbut visa tai zino, taciau as paziurejau toki \"Serverless\" tools'a kuris dirba su"
              + " AWS lambda servisu. Pasiskaiciau, paziurejau youtube manuala, idomu :) Zemiau jei idomu keletas linku"
            ,
            links: [
                {
                    name: "trumpas youtube manualas pagal kuri dariau",
                    link: "https://www.youtube.com/watch?v=lUTGk64jppM&list=PLzvRQMJ9HDiT5b4OsmIBiMbsPjfp4kfg3"
                },
                {
                    name: "AWS Cloud formation - kaip suprantu cia viskas kas yra sudeployinta po AWS accountu",
                    link: "https://eu-west-2.console.aws.amazon.com/cloudformation/home?region=eu-west-2#/stacks?filter=active"
                },
                {
                    name: "Lambda console - cia visos sudeployintos funkcijos",
                    link: "https://eu-west-2.console.aws.amazon.com/lambda/home?region=eu-west-2#/functions"
                },
            ]
        })
    };

    callback(null, response);
};

module.exports = {
    hello,
    hello2
};
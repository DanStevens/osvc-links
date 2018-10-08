export default function getConfig() {
  return {
    groups: [
      {
        key: "generalUrls",
        label: "General URLs",
        links: [
          {
            key: "baseUri",
            label: "Base URI",
            hrefFunc: () => "https://example-en--pro.custhelp.com/",
          },
          {
            key: "cpRoot",
            label: "Customer Portal root",
            hrefFunc: () => "https://example-en--pro.custhelp.com/app/",
          }
        ]
      },
      {
        key: "soapUrls",
        label: "SOAP URLs",
        subGroups: [
          {
            key: "soapUrls_legacy",
            label: "Legacy SOAP URLs",
            links: [
              {
                key: "legacyConnectApi",
                label: "Connect web service endpoint",
                hrefFunc: () => "https://example-en--pro.custhelp.com/cgi-bin/example_en.cfg/services/soap?wsdl=typed"
              },
              {
                key: "legacyConnectApi1_2",
                label: "Connect web service endpoint (version 1.2)",
                hrefFunc: () => "https://example-en--pro.custhelp.com/cgi-bin/example_en.cfg/services/soap?wsdl=typed"
              }
            ]
          },
          {
            key: "connectApi",
            label: "August 2017+ SOAP URLs"
            
          }
        ]
      }
    ]
  };
}
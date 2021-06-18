export const environment = {
    production: false,
    apiBaseUrl: "https://cduqbottest.azurewebsites.net/api/Request/",
    selfUrl: "https://cduqbottest-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "9f248767-8e1a-42f3-836f-c092ab95ff70",
        clientId: "8b2aecd3-8642-4a6d-86e8-e6727384dc2a",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};

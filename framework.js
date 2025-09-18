window.Framework = {
    config: {
        // Name of your framework integration - replace with meaningful name
        name: 'breesedev',
        
        // OAuth Client IDs for different regions
        clientIds: {
          "usw2.pure.cloud": "9f4ef35c-6cf3-4d6c-8abe-1cca6f15fa3a"
        },
        settings: {
            embedWebRTCByDefault: true,
            hideWebRTCPopUpOption: false,
            enableCallLogs: true,
            hideCallLogSubject: false,
            hideCallLogContact: false,
            hideCallLogRelation: false,
            enableTransferContext: true,
            dedicatedLoginWindow: false,
            embeddedInteractionWindow: true,
            enableConfigurableCallerId: false,
            enableServerSideLogging: false,
            enableCallHistory: false,
            defaultOutboundSMSCountryCode: "+1",
            searchTargets: ["people", "queues", "frameworkContacts", "externalContacts"],
            callControls: ["pickup", "transfer", "mute", "disconnect"],
            theme: {
                primary: "#62367A",
                text: "#DAD5DD",
                notification: {
                    success: {
                        primary: "#CCE5FF",
                        text: "#004085"
                    },
                    error: {
                        primary: "#f8D7DA",
                        text: "#721C24"
                    }
                }
            },
            sso: {
                provider: "",
                orgName: ""
            },
            display: {
                interactionDetails: {
                    call: [
                        "framework.DisplayAddress",
                        "call.Ani",
                        "call.ConversationId"
                    ]
                }
            }
        },
        helpLinks: {
            InteractionList: "https://help.mypurecloud.com/articles/about-interaction-list/",
            CallLog: "https://help.mypurecloud.com/articles/about-call-logs/",
            Settings: "https://help.mypurecloud.com/articles/about-settings/"
        },
        customInteractionAttributes: ["example_URLPop", "example_SearchValue"],
        getUserLanguage: function(callback) {
            callback("en-US");
        }
    },
    initialSetup: function () {
    },
    screenPop: function (searchString, interaction) {
        // Use your CRM vendor's API to perform screen pop.
    },
    processCallLog: function (callLog, interaction, eventName, onSuccess, onFailure)  {
       // Use your CRM vendor's API to provide interaction log information.
       onSuccess({
           id: externalCallLog.id
       });
    },
    openCallLog: function (callLog) {
    },
    contactSearch: function (searchValue, onSuccess, onFailure) {
    }
};
    initialSetup: function() {
        console.log('Genesys Embeddable Framework

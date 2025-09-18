window.Framework = {
    config: {
        // Name of your framework integration - replace with meaningful name
        name: 'breesedev',
        
        // OAuth Client IDs for different regions
        clientIds: {
          "usw2.pure.cloud": "9f4ef35c-6cf3-4d6c-8abe-1cca6f15fa3a"
        },
        
        // Optional settings to customize client behavior
        settings: {
            embedWebRTCByDefault: true,
            hideWebRTCPopUpOption: false,
            enableCallLogs: true,
            hideCallLogSubject: false,
            hideCallLogContact: false,
            hideCallLogRelation: false,
            enableTransferContext: true,
            dedicatedLoginWindow: true,
            embeddedInteractionWindow: true,
            enableConfigurableCallerId: false,
            enableServerSideLogging: false,
            enableCallHistory: false,
            defaultOutboundSMSCountryCode: "+1",
            searchTargets: ["people", "queues", "frameworkContacts", "externalContacts"],
            callControls: ["pickup", "transfer",  "disconnect"],
        },
        
        // Optional help links
        helpLinks: {
            // Add custom help documentation links if needed
        },
        
        // Custom interaction attributes for call metadata
        customInteractionAttributes: [
            // Example: { name: 'Customer ID', type: 'text' }
        ]
    },
    
    // Get user's preferred language
    getUserLanguage: function(callback) {
        // Return user's language preference or default to English
        callback('en-US');
    },
    
    // Initial setup when framework loads
    initialSetup: function() {
        console.log('Genesys Embeddable Framework

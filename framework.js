window.Framework = {
    config: {
        // Name of your framework integration - replace with meaningful name
        name: 'testEF',
        
        // OAuth Client IDs for different regions
        clientIds: {
          "usw2.pure.cloud": "9f4ef35c-6cf3-4d6c-8abe-1cca6f15fa3a"
        },
        
        // Optional settings to customize client behavior
        settings: {
            embedWebRTCByDefault: true,         // Embed WebRTC softphone
            hideWebRTCPopUpOption: false,       // Show/hide WebRTC popup option
            enableCallLogs: true,               // Enable call logging features
            hideCallLogSubject: false,          // Show/hide call log subject field
            hideCallLogContact: false,          // Show/hide call log contact field
            hideCallLogRelation: false,         // Show/hide call log relation field
            enableNotifications: true           // Enable browser notifications
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

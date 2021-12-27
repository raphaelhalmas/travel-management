sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'travelmanagement/test/integration/pages/MainListReport' ,
        'travelmanagement/test/integration/pages/MainObjectPage',
        'travelmanagement/test/integration/OpaJourney'
    ],
    function(JourneyRunner, MainListReport, MainObjectPage, Journey) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('travelmanagement') + '/index.html'
        });

        
        JourneyRunner.run(
            {
                pages: { onTheMainPage: MainListReport, onTheDetailPage: MainObjectPage }
            },
            Journey.run
        );
        
    }
);
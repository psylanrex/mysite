(function($) {
    "use strict"; // Start of use strict

    $(document).ready(function() {
        $("#radius-health > .timeline-panel-heading").click(function() {
            $("#radius-health > .timeline-panel-body").toggle("slow");
        });

        $("#my-kitchen > .timeline-panel-heading").click(function() {
            $("#my-kitchen > .timeline-panel-body").toggle("slow");
        });

        $("#vertigo-rehab > .timeline-panel-heading").click(function() {
            $("#vertigo-rehab > .timeline-panel-body").toggle("slow");
        });
        $("#appjam > .timeline-panel-heading").click(function() {
            $("#appjam > .timeline-panel-body").toggle("slow");
        });
    });

})(jQuery); // End of use strict
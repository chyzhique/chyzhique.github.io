        // Event listeners for clickable words
        document.getElementById("clickable-word1").addEventListener("click", function() {
            showPopup("popup1");
        });

        document.getElementById("clickable-word2").addEventListener("click", function() {
            showPopup("popup2");
        });

        document.getElementById("clickable-word3").addEventListener("click", function() {
            showPopup("popup3");
        });

        document.getElementById("clickable-word4").addEventListener("click", function() {
            showPopup("popup4");
        });

        document.getElementById("clickable-word5").addEventListener("click", function() {
            showPopup("popup5");
        });

        document.getElementById("clickable-word6").addEventListener("click", function() {
            showPopup("popup6");
        });

        document.getElementById("clickable-word7").addEventListener("click", function() {
            showPopup("popup7");
        });

        document.getElementById("clickable-word8").addEventListener("click", function() {
            showPopup("popup8");
        });

        document.getElementById("clickable-word9").addEventListener("click", function() {
            showPopup("popup9");
        });

        document.getElementById("clickable-word10").addEventListener("click", function() {
            showPopup("popup10");
        });

        document.getElementById("clickable-word11").addEventListener("click", function() {
            showPopup("popup11");
        });

        document.getElementById("clickable-word12").addEventListener("click", function() {
            showPopup("popup12");
        });

        document.getElementById("clickable-word13").addEventListener("click", function() {
            showPopup("popup13");
        });

        document.getElementById("clickable-word14").addEventListener("click", function() {
            showPopup("popup14");
        });

        document.getElementById("clickable-word15").addEventListener("click", function() {
            showPopup("popup15");
        });

        document.getElementById("clickable-word16").addEventListener("click", function() {
            showPopup("popup16");
        });

        document.getElementById("clickable-word17").addEventListener("click", function() {
            showPopup("popup17");
        });

        document.getElementById("clickable-word18").addEventListener("click", function() {
            showPopup("popup18");
        });

        document.getElementById("clickable-word19").addEventListener("click", function() {
            showPopup("popup19");
        });

        document.getElementById("clickable-word20").addEventListener("click", function() {
            showPopup("popup20");
        });

        document.getElementById("clickable-word21").addEventListener("click", function() {
            showPopup("popup21");
        });

        document.getElementById("clickable-word22").addEventListener("click", function() {
            showPopup("popup22");
        });

        document.getElementById("clickable-word23").addEventListener("click", function() {
            showPopup("popup23");
        });

        document.getElementById("clickable-word24").addEventListener("click", function() {
            showPopup("popup24");
        });

        // Function to show a popup by ID
        function showPopup(popupId) {
            const popup = document.getElementById(popupId);
            popup.classList.add("show-popup");
        }

        // Function to close a popup by ID
        function closePopup(popupId) {
            const popup = document.getElementById(popupId);
            popup.classList.remove("show-popup");
        }

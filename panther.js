function runPanther() {

    const code = document.getElementById("codeArea").value;
    const outputBox = document.getElementById("output");
    outputBox.textContent = "";

    const lines = code.split("\n");

    for (let line of lines) {

        line = line.trim();
        if (line === "" || line.startsWith("#")) continue;

        // ========================
        // BASIC OUTPUT
        // ========================

        if (line.startsWith("Compute(")) {
            const match = line.match(/Compute\("(.*)"\)/);
            if (match) outputBox.textContent += match[1] + "\n";
        }

        // ========================
        // HASHING
        // ========================

        else if (line.startsWith("HashSHA256")) {
            outputBox.textContent += "[SIMULATED] SHA256 Hash Generated\n";
        }

        else if (line.startsWith("Base64Encode")) {
            outputBox.textContent += "[SIMULATED] Encoded to Base64\n";
        }

        else if (line.startsWith("Base64Decode")) {
            outputBox.textContent += "[SIMULATED] Decoded from Base64\n";
        }

        // ========================
        // NETWORK
        // ========================

        else if (line.startsWith("ResolveDNS")) {
            outputBox.textContent += "[SIMULATED] DNS Resolved: 93.184.216.34\n";
        }

        else if (line.startsWith("PortScan")) {
            outputBox.textContent += "[SIMULATED] Port OPEN\n";
        }

        else if (line.startsWith("ScanRangeFast")) {
            outputBox.textContent += "[SIMULATED] Fast Scan Complete\n";
        }

        else if (line.startsWith("BannerGrab")) {
            outputBox.textContent += "[SIMULATED] Apache/2.4.41\n";
        }

        else if (line.startsWith("CheckSecurityHeaders")) {
            outputBox.textContent += "[SIMULATED] Missing X-Frame-Options\n";
        }

        else if (line.startsWith("WhoIs")) {
            outputBox.textContent += "[SIMULATED] WHOIS data retrieved\n";
        }

        else if (line.startsWith("Traceroute")) {
            outputBox.textContent += "[SIMULATED] 8 hops detected\n";
        }

        else if (line.startsWith("DetectService")) {
            outputBox.textContent += "[SIMULATED] HTTP Service Detected\n";
        }

        else if (line.startsWith("ScanTopPorts")) {
            outputBox.textContent += "[SIMULATED] Top Ports Scan Complete\n";
        }

        else if (line.startsWith("CheckRobots")) {
            outputBox.textContent += "[SIMULATED] robots.txt Found\n";
        }

        else if (line.startsWith("CheckOpenRedirect")) {
            outputBox.textContent += "[SIMULATED] No Open Redirect Detected\n";
        }

        // ========================
        // DEFENSIVE
        // ========================

        else if (line.startsWith("ListListeningPorts")) {
            outputBox.textContent += "[SIMULATED] Port 80, 443 Listening\n";
        }

        else if (line.startsWith("DetectSuspiciousProcesses")) {
            outputBox.textContent += "[SIMULATED] No Suspicious Processes Found\n";
        }

        else if (line.startsWith("GenerateStrongPassword")) {
            outputBox.textContent += "Generated Password: A9#kL2!xZ7$pQ1@M\n";
        }

        else if (line.startsWith("GetPublicIP")) {
            outputBox.textContent += "[SIMULATED] Public IP: 203.0.113.45\n";
        }

        else if (line.startsWith("CheckPortListening")) {
            outputBox.textContent += "[SIMULATED] Port is Listening\n";
        }

        else if (line.startsWith("FileIntegrityCheck")) {
            outputBox.textContent += "[SIMULATED] File Hash Verified\n";
        }

        else if (line.startsWith("ScanDirectoryHashes")) {
            outputBox.textContent += "[SIMULATED] Directory Scan Complete\n";
        }

        // ========================
        // LOOPS / CONDITIONS (Visual Only)
        // ========================

        else if (line.startsWith("If") || line.startsWith("Else") ||
                 line.startsWith("While") || line.startsWith("For")) {
            outputBox.textContent += "[Logic Executed]\n";
        }

        else {
            outputBox.textContent += "[Unknown Command] " + line + "\n";
        }
    }
}

function clearOutput() {
    document.getElementById("output").textContent = "";
        }

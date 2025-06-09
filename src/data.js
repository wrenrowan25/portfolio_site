import placeholder1 from "./images/placeholder1.png";
import placeholder2 from "./images/placeholder2.png";
import placeholder3 from "./images/placeholder3.png";
import placeholdervideo from "./videos/placeholder.mp4";

export const projects = [
  // ...other projects,
  {
    id: 1,
    category: "security",
    title: "CompTIA Security+ – Determining Security Vulnerabilities",
    description:
      "A comprehensive lab focused on identifying and mitigating common security vulnerabilities.",
    images: [placeholder1, placeholder2, placeholder3],
    imageDescriptions: [
      "Screenshot 1: Lab setup and initial system overview",
      "Screenshot 2: Vulnerability scanning results on PLABDC01",
      "Screenshot 3: Patch management demonstration and reporting"
    ],
    tags: [
      "Cybersecurity",
      "CompTIA Security+",
      "Vulnerability Assessment",
      "Risk Management",
      "Penetration Testing"
    ],
    devicesUsed: [
      "PLABDC01: Windows Server 2019 (Domain Controller)",
      "PLABWIN10: Windows 10 (Domain Member Workstation)",
      "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
    ],
    overview:
      "This lab examined common security vulnerabilities and concerns that can lead to breaches, focusing on both inherent system flaws and external risks. Topics included the differences between cloud-based and on-premises vulnerabilities, zero-day threats, weak configurations (e.g., default settings, open permissions, unsecured accounts, weak encryption, and unsecure protocols), and legacy platform issues. Additional exercises addressed third-party risks, improper patch management, and the diverse impacts of security attacks on organizations.",
    keyLearningOutcomes: [
      "Security Concerns and Vulnerabilities:\n  • Understand how open ports, misconfigurations, and legacy systems create vulnerabilities.\n  • Differentiate between cloud-based and on-premises infrastructures regarding patching and physical access risks.\n  • Recognize the challenges of zero-day vulnerabilities that remain unpatched until exploited.",
      "Third-Party Risks:\n  • Identify how vendor management, supply chain weaknesses, outsourced code development, and third-party data storage can introduce additional risks to an organization.",
      "Improper or Weak Patch Management:\n  • Analyze the importance of regular patching and updates for firmware, operating systems, and applications.\n  • Use tools like Microsoft Baseline Security Analyzer (MBSA) to scan for missing updates and identify vulnerabilities.",
      "Impact of Security Attacks:\n  • Evaluate potential consequences such as data loss, data breaches, exfiltration, identity theft, financial losses, reputational damage, and loss of availability."
    ],
    exercises: [
      "Exercise 1 – Security Concerns and Vulnerabilities:\n  • Explored common vulnerabilities including weak configurations and zero-day threats.\n  • Reviewed differences between cloud-based and on-premises infrastructures, highlighting issues such as update cycles and physical control.",
      "Exercise 2 – Third-Party Risks:\n  • Discussed risks associated with vendor management, supply chain vulnerabilities, outsourced code development, and challenges in securing third-party data storage.",
      "Exercise 3 – Improper or Weak Patch Management:\n  • Utilized Microsoft Baseline Security Analyzer on PLABDC01 to scan for missing patches.\n  • Identified issues such as non-running update services and download errors, underscoring the need for proactive patch management.",
      "Exercise 4 – Impacts:\n  • Analyzed the multifaceted impacts of security attacks, including data loss, breaches, exfiltration, identity theft, financial setbacks, reputation damage, and service availability disruption."
    ],
    impact:
      "Risk Awareness:\n  The lab reinforced that vulnerabilities often stem from both technical flaws and inadequate management practices. Recognizing these issues is critical for preventing breaches.\n\nProactive Mitigation:\n  Understanding the importance of regular patching, secure configuration, and third-party risk management enables organizations to better protect their assets and comply with regulatory requirements.\n\nHolistic Security Approach:\n  By evaluating the impacts of security breaches—from data loss to reputational harm—the lab emphasized the need for a comprehensive security strategy that covers technical defenses and risk management practices.",
    conclusion:
      "This lab provided a comprehensive look at the various vulnerabilities and risks that can compromise network security. By examining both internal issues (such as weak patch management and misconfigurations) and external risks (including third-party exposures), I have deepened my understanding of how to identify and mitigate security threats. These insights are critical for developing effective security policies and protecting organizational assets in real-world environments.",
    video: placeholdervideo,
    github: "https://github.com/example"
  },
  {
    id: 2,
    category: "security",
    title: "CompTIA Security+ – Gathering Intelligence on Threat Actors and Vectors",
    description:
      "A hands-on lab exploring modern threat intelligence techniques, threat actors, attack vectors, and intelligence sources used for cybersecurity defense.",
    images: [placeholder1, placeholder2, placeholder3],
    imageDescriptions: [
      "Screenshot 1: Live threat map displaying real-time global attack trends",
      "Screenshot 2: CVSS calculator used to assess vulnerability severity",
      "Screenshot 3: MITRE ATT&CK framework analysis of adversary tactics and techniques"
    ],
    tags: [
      "Cybersecurity",
      "CompTIA Security+",
      "Threat Intelligence",
      "MITRE ATT&CK",
      "Vulnerability Assessment"
    ],
    devicesUsed: [
      "PLABDC01: Windows Server 2019 (Domain Controller)",
      "PLABDM01: Windows Server 2019 (Domain Member)",
      "PLABWIN10: Windows 10 (Workstation)",
      "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
    ],
    overview:
      "In this lab, I explored the landscape of threat intelligence by examining various threat actors, threat vectors, and intelligence sources. The hands-on exercises covered topics from identifying the attributes of different threat actors (such as insiders, nation-states, hacktivists, and criminal syndicates) to leveraging modern tools like threat maps and vulnerability databases. Additionally, I gained practical experience using the Common Vulnerability Scoring System (CVSS) and familiarized myself with the MITRE ATT&CK framework for adversary tactics.",
    keyLearningOutcomes: [
      "Threat Actors & Attributes:\n  • Differentiate between internal and external threat actors, including insider threats, APTs, hacktivists, and organized crime.\n  • Understand the motivations and methods used by various actors.",
      "Threat Vectors:\n  • Analyze common attack vectors such as direct access, wireless vulnerabilities, email phishing, supply chain compromises, social media exploitation, removable media risks, and cloud security issues.",
      "Intelligence Sources:\n  • Distinguish between Open Source Intelligence (OSINT) and closed/proprietary sources.\n  • Evaluate and utilize various threat intelligence sources including vulnerability databases, dark web resources, public/private information sharing centers, and threat feeds.\n  • Use research resources like vendor websites, conferences, and industry groups.",
      "Practical Tools:\n  • Operate live threat maps (e.g., Checkpoint, Fortinet) to visualize and interpret global attack trends.\n  • Apply the CVSS calculator to assess the severity of vulnerabilities.\n  • Navigate the MITRE ATT&CK framework to review adversary tactics, techniques, and procedures (TTPs)."
    ],
    exercises: [
      "Exercise 1 – Actors and Threats:\n  • Explored the characteristics of threat actors and their associated risks.\n  • Analyzed insider threats, nation-state attacks, hacktivism, and script kiddies.",
      "Exercise 2 – Threat Vectors:\n  • Identified methods of attack such as exploiting unpatched vulnerabilities, DDoS, phishing, and domain hijacking.\n  • Examined the impact of direct access, wireless, and supply chain vulnerabilities.",
      "Exercise 3 – Threat Intelligence Sources:\n  • Compared open (OSINT) and closed intelligence.\n  • Reviewed tools and resources including vulnerability databases (NIST, MITRE, CERT), dark web insights, and automated indicator sharing systems.",
      "Exercise 4 – Research Sources:\n  • Investigated additional research channels such as vendor websites, threat feeds, academic journals, and industry conferences.",
      "Exercise 5 – Threat Map:\n  • Utilized a live threat map to monitor real-time attack flows, identifying key trends like top targeted countries and industries.",
      "Exercise 6 – Vulnerability Databases & CVSS:\n  • Demonstrated the use of the CVSS calculator to quantify vulnerability risks.\n  • Explored MITRE ATT&CK to understand and map adversary tactics."
    ],
    impact:
      "Proactive Defense:\n  The lab reinforced the importance of integrating multiple intelligence sources to develop a robust cybersecurity defense.\n\nReal-World Application:\n  Hands-on experience with threat maps and vulnerability scoring directly translates to skills required for incident response and proactive threat hunting.\n\nStrategic Analysis:\n  Familiarity with the MITRE ATT&CK framework and CVSS enhances my ability to prioritize and mitigate risks effectively.",
    conclusion:
      "This lab provided comprehensive, hands-on exposure to modern threat intelligence techniques. My ability to synthesize diverse data sources into actionable insights, as demonstrated through these exercises, makes me well-prepared for roles in cybersecurity and threat analysis.",
    video: placeholdervideo,
    github: "https://github.com/example"
},
{
  id: 3,
  category: "security",
  title: "CompTIA Security+ – Identifying Different Application Exploits",
  description:
    "A hands-on lab exploring common web application vulnerabilities, including XSS, SQL injection, information leakage, and advanced exploitation techniques.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Exploiting a reflected XSS vulnerability to capture session cookies",
    "Screenshot 2: Bypassing authentication using an SQL injection attack",
    "Screenshot 3: Error message disclosure revealing sensitive server information"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Web Exploits",
    "XSS",
    "SQL Injection",
    "Privilege Escalation"
  ],
  devicesUsed: [
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
  ],
  overview:
    "This lab focused on exploring common web application vulnerabilities and exploitation techniques. It covered several types of attacks—including Cross-Site Scripting (XSS), SQL Injection, Information Leakage, Buffer Overflow, Directory Traversal, and advanced exploitation methods (e.g., Pass the Hash, API attacks, and SSL stripping)—to demonstrate how attackers can manipulate web applications to access sensitive information or escalate privileges.",
  keyLearningOutcomes: [
    "Cross-Site Scripting (XSS):\n  • Understand the differences between reflected, stored, and DOM-based XSS attacks.\n  • Exploit a reflected XSS vulnerability to capture session cookies.",
    "SQL Injection:\n  • Identify error-based SQL injection vulnerabilities that reveal sensitive database details.\n  • Bypass authentication by injecting malicious SQL fragments.",
    "Information Leakage & Error Handling:\n  • Recognize how improper handling of exceptions can disclose internal configuration details.",
    "Buffer Overflow & Resource Exhaustion:\n  • Detect vulnerabilities from insufficient input length checks that can lead to buffer overflows.",
    "Directory Traversal:\n  • Understand how path manipulation can expose otherwise restricted files on the webserver.",
    "Privilege Escalation:\n  • Learn the concepts of horizontal and vertical privilege escalation (practical outcome removed due to external changes).",
    "Advanced Exploits:\n  • Familiarize with driver manipulation, replay attacks, pass the hash, API attacks, and SSL stripping (demonstrated conceptually)."
  ],
  exercises: [
    "Exercise 1 – Cross-Site Scripting (XSS):\n  • Logged into a demo application and exploited a reflected XSS vulnerability by injecting JavaScript into the search bar to display session cookie data.",
    "Exercise 2 – SQL Injection:\n  • Exploited an error-based SQL injection vulnerability on a banking demo login page to bypass authentication and gain access.",
    "Exercise 3 – Information Leakage:\n  • Triggered an exception by entering invalid date ranges in a transaction lookup, thereby exposing detailed error messages and server information.",
    "Exercise 4 – Buffer Overflow:\n  • Submitted excessive input in a feedback form to test for buffer overflow vulnerabilities, confirming that the application does not enforce proper input length checks.",
    "Exercise 5 – Directory Traversal:\n  • Explored the concept of path traversal (practical outcome removed) to understand how attackers can list and access restricted files.",
    "Exercise 6 – Privilege Escalation:\n  • Discussed vertical privilege escalation techniques; practical demonstration outcome was removed due to external website changes.",
    "Exercise 7 – Driver Manipulation and Replay Attacks:\n  • Reviewed concepts related to driver manipulation (shimming) and replay attacks for session hijacking.",
    "Exercise 8 – Combined Advanced Attacks:\n  • Studied a variety of advanced exploitation techniques—including pass the hash, API attacks, cross-site request forgery (CSRF), pointer dereference, and SSL stripping—to appreciate how attackers may chain vulnerabilities to compromise systems."
  ],
  impact:
    "Enhanced Vulnerability Identification:\n  This lab deepened my understanding of how subtle application flaws—whether in error handling, input validation, or configuration—can lead to significant security breaches.\n\nPractical Exploitation Skills:\n  By exploiting XSS and SQL injection vulnerabilities, I demonstrated hands-on proficiency in using real attack vectors to retrieve sensitive data (e.g., session cookies, database details).\n\nDefensive Strategy Insight:\n  Awareness of advanced techniques (e.g., replay attacks, pass the hash, CSRF) helps in designing robust countermeasures, emphasizing the need for proper input sanitization, secure error handling, and effective session management.",
  conclusion:
    "This lab provided a comprehensive overview of common application exploits and their potential impacts. The hands-on exercises enhanced my ability to identify and exploit vulnerabilities, reinforcing the importance of secure coding practices and proactive vulnerability management. These skills are essential for performing effective security assessments and developing robust defense strategies against real-world attacks.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 4,
  category: "security",
  title: "CompTIA Security+ – Identifying Different Cyber Attacks",
  description:
    "A hands-on lab exploring cyber attack methodologies, including malware creation, password attacks, payload generation, and physical attack vectors.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Fork bomb execution demonstrating system resource exhaustion",
    "Screenshot 2: Hydra dictionary attack successfully recovering credentials",
    "Screenshot 3: Hash cracking results from John the Ripper and Cain & Abel"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Penetration Testing",
    "Password Cracking",
    "Malware Analysis",
    "Physical Security"
  ],
  devicesUsed: [
    "PLABDC01: Windows Server 2019 (Domain Controller)",
    "PLABWIN10: Windows 10 (Domain Member Workstation)",
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
  ],
  overview:
    "This lab provided practical exposure to various cyber attack methods—ranging from malware creation and exploitation to password attacks (both online and offline) and even physical attack vectors. Through multiple exercises, I gained hands-on experience with payload generation, dictionary attacks, and offline hash cracking, as well as an understanding of emerging physical threats and cryptographic attack concepts.",
  keyLearningOutcomes: [
    "Malware & Fork Bomb Creation:\n  • Identified different types of malware (virus, worm, trojan, ransomware, botnet, spyware, etc.).\n  • Developed a fork bomb using a batch file to simulate a self-replicating virus, illustrating how system resources can be exhausted.",
    "Standalone Payloads with Msfvenom:\n  • Learned to generate custom payloads (using windows/meterpreter/reverse_tcp) on Kali Linux.\n  • Deployed payloads via a simple HTTP server, demonstrating reverse connection techniques.",
    "Online Password Attacks:\n  • Employed Hydra to perform dictionary attacks against FTP and web services, using custom-created wordlists.\n  • Understood password spraying techniques and the risks of weak or plaintext credentials.",
    "Offline Password Attacks:\n  • Utilized John the Ripper to crack Linux passwords by combining /etc/passwd and /etc/shadow files.\n  • Used ncrack to target FTP services and Cain & Abel for brute-forcing Windows hashes, reinforcing the importance of securing credential storage.",
    "Physical and Other Attack Vectors:\n  • Reviewed real-world physical attacks such as malicious USB devices, flash drive attacks, card skimming, and supply-chain vulnerabilities.\n  • Explored advanced topics like adversarial AI, cryptographic (birthday, collision, downgrade) attacks, and the differences between cloud-based and on-premise vulnerabilities."
  ],
  exercises: [
    "Exercise 1 – Malware:\n  • Discussed malware classifications and their propagation methods.\n  • Created a fork bomb (a simple virus) to demonstrate resource exhaustion.",
    "Exercise 2 – Creating Standalone Payloads with Msfvenom:\n  • Disabled Windows Firewall and Defender Real-Time Protection on the target host.\n  • Generated and hosted a custom payload on Kali Linux, and then used Metasploit’s multi/handler to capture the reverse TCP session.",
    "Exercise 3 – Performing Online Password Attacks:\n  • Created and customized wordlists on Kali Linux.\n  • Conducted dictionary attacks using Hydra against FTP and web services to recover credentials.",
    "Exercise 4 – Performing Offline Password Attacks:\n  • Combined Linux password files using the unshadow command and cracked hashes with John the Ripper.\n  • Used Cain & Abel to recover and brute-force Windows hash values.",
    "Exercise 5 – Explaining Physical and Other Attacks:\n  • Reviewed emerging threats such as malicious USB cables, flash drive attacks, card cloning, and supply-chain compromises.\n  • Compared cloud-based versus on-premise attack surfaces and discussed cryptographic vulnerabilities."
  ],
  impact:
    "Defensive Insights:\n  This lab reinforced the importance of robust endpoint and network security controls—demonstrating how vulnerabilities in malware handling, password management, and physical security can be exploited.\n\nReal-World Application:\n  By simulating both logical (software-based) and physical attacks, I can better assess risk and prioritize remediation strategies in real-world environments.\n\nTechnical Proficiency:\n  The exercises provided practical experience with industry-standard tools such as Msfvenom, Hydra, John the Ripper, ncrack, Cain & Abel, and basic scripting for malware simulation, all of which are essential for penetration testing and threat analysis roles.",
  conclusion:
    "This lab deepened my understanding of the diverse methods attackers use—from exploiting software vulnerabilities to leveraging physical devices—and the techniques defenders must employ to mitigate these risks. The hands-on experience with payload creation, password attacks, and hash recovery techniques demonstrates my readiness to contribute effectively to cybersecurity operations and penetration testing initiatives.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 5,
  category: "security",
  title: "CompTIA Security+ – Identifying Indicators of a Network Attack",
  description:
    "A hands-on lab examining network attack techniques, including wireless threats, DNS exploits, denial-of-service attacks, ARP poisoning, and malicious script execution.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Capturing SYN flood traffic using Wireshark",
    "Screenshot 2: Conducting an ARP poisoning attack with Ettercap",
    "Screenshot 3: Using domain reputation tools to verify DNS integrity"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Network Attacks",
    "Wireless Security",
    "ARP Poisoning",
    "Denial-of-Service"
  ],
  devicesUsed: [
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)",
    "PLABDC01: Windows Server 2019 (Domain Controller)",
    "PLABWIN10: Windows 10 (Workstation)"
  ],
  overview:
    "This lab explored various indicators and methods of network attacks, with a focus on how attackers exploit vulnerabilities in wireless networks, DNS, and general network infrastructure. In addition, the lab examined techniques for launching and detecting denial-of-service attacks, ARP poisoning, and the execution of malicious scripts. The hands-on exercises provided practical exposure to tools and attack simulations, emphasizing the importance of monitoring, detection, and mitigation strategies.",
  keyLearningOutcomes: [
    "Wireless Network Threats:\n  • Understand attacks such as Evil Twin, Rogue Access Points, Bluetooth vulnerabilities (bluejacking, bluesnarfing), jamming, RFID, NFC, and IV attacks.",
    "DNS Exploits:\n  • Recognize DNS-based attacks including domain hijacking, poisoning, spoofing, and URL redirection.\n  • Learn to verify domain reputation using reputation lookup tools.",
    "General Network Attacks:\n  • Perform MAC flooding using Yersinia to overwhelm network switches.\n  • Launch SYN, ICMP flood, and Ping of Death attacks to observe resource exhaustion and network disruption.\n  • Understand the importance of disabling local firewall controls in controlled test scenarios.",
    "ARP Poisoning:\n  • Use Ettercap to conduct an ARP poisoning (spoofing) attack, thereby intercepting network traffic between hosts.",
    "Malicious Code/Script Execution:\n  • Review common scripting platforms (PowerShell, Python, Bash, VBA/macros) that attackers leverage to execute fileless or embedded malware."
  ],
  exercises: [
    "Exercise 1 – Wireless Threats:\n  • Reviewed wireless attack vectors (Evil Twin, rogue APs, jamming) and the associated risks with Bluetooth, RFID, and NFC technologies.",
    "Exercise 2 – DNS Exploits:\n  • Explored DNS attacks and used a domain reputation tool to assess the health of a domain (e.g., google.com).",
    "Exercise 3 – Network Attacks:\n  • Conducted MAC flooding with Yersinia, executed SYN and ICMP flood attacks using hping3, and simulated Ping of Death attacks to understand DoS and DDoS impacts.",
    "Exercise 4 – Malicious Code/Script Execution:\n  • Discussed how short scripts and code (e.g., simple JavaScript alerts) can be exploited to cause damage or steal data, emphasizing the role of PowerShell, Python, Bash, and VBA in modern attacks.",
    "Exercise 5 – ARP Poisoning:\n  • Demonstrated an ARP poisoning attack using Ettercap to intercept traffic and verified changes in the ARP cache, illustrating a classic man-in-the-middle scenario.",
    "Exercise 6 – Advanced Exploits:\n  • Studied additional techniques (pass the hash, API attacks, pointer dereference, SSL stripping) to understand how attackers can chain vulnerabilities to compromise systems—practical outcomes for some tasks were omitted due to external changes."
  ],
  impact:
    "Threat Awareness:\n  This lab highlighted the diverse attack vectors used in network breaches, reinforcing the need for comprehensive monitoring and defense strategies.\n\nPractical Skills:\n  Hands-on exercises with tools such as Yersinia, hping3, Ettercap, and reputation lookups improved my ability to simulate attacks and identify vulnerabilities in real-time.\n\nMitigation Strategies:\n  Understanding how attacks like ARP poisoning, DNS spoofing, and flood attacks work informs the development of effective countermeasures and security policies.",
  conclusion:
    "This lab provided a comprehensive overview of the indicators and techniques used in network attacks. By simulating various attack scenarios—from wireless threats to DNS exploits and DoS attacks—I have enhanced my practical understanding of network security vulnerabilities and developed insights critical for designing robust defensive strategies.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 6,
  category: "security",
  title: "CompTIA Security+ – Incident Response Tools: Configuring System Logging",
  description:
    "A hands-on lab focused on configuring and analyzing system logs using syslog, log rotation, and journalctl for effective incident response and forensic investigations.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Viewing syslog configuration with cat /etc/rsyslog.conf",
    "Screenshot 2: Filtering critical system logs using journalctl -p crit",
    "Screenshot 3: Executing log rotation commands to manage system logs"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Incident Response",
    "System Logging",
    "Linux Forensics"
  ],
  devicesUsed: [
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
  ],
  overview:
    "This lab focuses on configuring and reviewing system logging mechanisms on a Linux system. By examining the syslog daemon (rsyslogd and klogd), logrotate configurations, and the systemd journal (journalctl), the exercise demonstrates how to collect, rotate, and analyze logs for incident response and forensic investigations.",
  keyLearningOutcomes: [
    "Syslog Daemon Configuration:\n  • Understand the structure of the /etc/rsyslog.conf file, including modules, global directives, rules, and templates.\n  • Verify that logging processes (rsyslogd and klogd) are running correctly.",
    "Logrotate Management:\n  • Review log rotation configurations in /etc/logrotate.conf and the daily logrotate script in /etc/cron.daily/logrotate.\n  • Examine package-specific log rotation files under /etc/logrotate.d/.",
    "Custom Logging and Journal Management:\n  • Use the logger command to add custom log entries.\n  • Utilize journalctl to review system logs, including filtering by priority (e.g., critical events), viewing boot logs, and retrieving logs by timestamp."
  ],
  exercises: [
    "Exercise 1 – View Syslog Daemon Configuration:\n  • Logged into PLABKALI as root and opened a terminal.\n  • Viewed the syslog configuration with cat /etc/rsyslog.conf and filtered for module load directives.\n  • Verified that both rsyslogd and klogd processes are running using ps ax | egrep -i '(syslogd|klogd)'.",
    "Exercise 2 – View Logrotate Configuration:\n  • Listed log files in /var/log and examined /etc/logrotate.conf to understand how logs are rotated.\n  • Viewed additional package-specific configurations (e.g., for Samba) in /etc/logrotate.d/.\n  • Executed a manual logrotate run with the -s parameter to write status information.",
    "Exercise 3 – Working with Journalctl:\n  • Used journalctl to view all system logs.\n  • Applied filters (e.g., journalctl -p crit, journalctl --since=2020-05-05) to display specific events.\n  • Retrieved boot event logs with journalctl -b and listed previous boot sessions with journalctl --list-boots.",
    "Exercise 4 – Custom Log Entries:\n  • Employed the logger command to send custom messages (e.g., 'Error Message', 'System reboot') into the appropriate log files."
  ],
  impact:
    "Enhanced Forensic Readiness:\n  Effective logging is critical for incident detection, analysis, and forensic investigations. This lab demonstrates how to configure and manage logs to ensure that security events are properly recorded.\n\nOperational Visibility:\n  By understanding how to review and filter logs, an administrator can quickly pinpoint issues and respond to security incidents, which is essential for maintaining system integrity.\n\nCompliance and Audit Support:\n  Proper log management supports regulatory compliance and aids in maintaining a documented chain of evidence in the event of an incident.",
  conclusion:
    "This lab provided a hands-on exploration of system logging on a Linux environment. By configuring the syslog daemon, managing log rotation, and leveraging journalctl for detailed log analysis, I have developed key skills necessary for effective incident response and security monitoring. These practices are essential for detecting anomalies, conducting forensic analysis, and ensuring robust security operations.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 7,
  category: "networking",
  title: "CompTIA Network+ N10-008 – Internet Protocol Addressing Solutions",
  description:
    "A hands-on lab focused on configuring IP addressing schemes, subnetting, and comparing IPv4 and IPv6 solutions for modern network communication.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Viewing IP configurations using PowerShell (ipconfig /all)",
    "Screenshot 2: Configuring a static private IP address on an Ethernet adapter",
    "Screenshot 3: Using an IPv4 Subnet Cheat Sheet to determine network and broadcast addresses"
  ],
  tags: [
    "Networking",
    "CompTIA Network+",
    "IPv4 Subnetting",
    "IPv6 Addressing",
    "CIDR Notation",
    "IP Configuration"
  ],
  devicesUsed: [
    "PFSENSE: Virtual Firewall",
    "PLABDC01: Windows Server 2019 (Domain Controller)",
    "PLABDM01: Windows Server 2019 (Domain Member)",
    "PLABWIN10: Windows 10 (Workstation)"
  ],
  overview:
    "This lab focused on configuring and understanding IP addressing schemes to enable effective network communication. It covered private IP addressing (using both static and dynamic methods), compared IPv4 and IPv6 addressing formats, demonstrated IPv4 subnetting (both classful and classless via CIDR), and introduced key IPv6 concepts.",
  keyLearningOutcomes: [
    "Private IP Addressing:\n  • Explained the use of RFC1918 private IP ranges (Class A, B, and C).\n  • Configured a network adapter with a static private IP (e.g., 10.0.0.2/8) and reviewed APIPA addresses.",
    "IPv4 vs. IPv6 Addressing Solutions:\n  • Compared IPv4 (32-bit) and IPv6 (128-bit) addressing schemes with real-world examples.\n  • Explained protocols such as NAT, PAT, and link-local addressing for APIPA.",
    "IPv4 Subnetting Solutions:\n  • Reviewed classful addressing (Classes A–E) and private IP ranges.\n  • Applied Classless Inter-Domain Routing (CIDR) notation (e.g., 192.168.0.0/24) using an IPv4 Subnet Cheat Sheet to determine network and broadcast addresses.",
    "IPv6 Concepts:\n  • Introduced IPv6-specific features such as tunneling protocols (6to4, ISATAP), dual-stack configurations, and automatic address configuration using EUI-64.\n  • Discussed the replacement of broadcast with anycast in IPv6."
  ],
  exercises: [
    "Exercise 1 – IP Addressing Schemes:\n  • Used Windows PowerShell and network adapter settings to view current IP configurations.\n  • Configured a static private Class A IP address on an Ethernet adapter and observed APIPA behavior on an unconfigured NIC.",
    "Exercise 2 – IPv4 & IPv6 Addressing Solutions:\n  • Compared IPv4 and IPv6 public addresses and discussed the generation of IPv6 addresses using EUI-64.\n  • Demonstrated the use of loopback addresses in both protocols.",
    "Exercise 3 – IPv4 Subnetting Solutions:\n  • Opened a subnet cheat sheet to convert decimal to binary and verify subnet masks and CIDR notation.\n  • Identified network and broadcast addresses for a Class C subnet (e.g., 192.168.0.0/24).",
    "Exercise 4 – IPv6 Concepts:\n  • Reviewed various protocols that enable IPv4 and IPv6 interoperability (tunneling methods).\n  • Discussed the benefits of dual-stack devices for seamless communication in mixed IP environments."
  ],
  impact:
    "Enhanced Network Design Skills:\n  The lab provided practical experience in IP configuration and subnetting, essential for designing scalable and efficient networks.\n\nReal-World Application:\n  Configuring static IPs and understanding address allocation strategies are crucial for network troubleshooting and optimization.\n\nPreparation for Modern Networks:\n  By comparing IPv4 and IPv6 and applying CIDR, I have developed the skills needed for network transitions and future-proofing IT infrastructure.",
  conclusion:
    "This lab strengthened my understanding of IP addressing, subnetting, and modern IPv6 concepts, equipping me with practical skills for network configuration, design, and troubleshooting. These competencies are critical for managing both legacy and next-generation network environments.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 8,
  category: "security",
  title: "CompTIA Security+ – Network Security Assessment Tools",
  description:
    "A hands-on lab exploring network security assessment tools, including reconnaissance, information gathering, file manipulation, scripting, packet analysis, forensics, and exploitation frameworks.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Nmap scan results displaying active hosts and open ports",
    "Screenshot 2: Wireshark capture of network traffic packets",
    "Screenshot 3: John the Ripper password cracking output"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Network Assessment",
    "Penetration Testing",
    "Forensics",
    "Packet Analysis"
  ],
  devicesUsed: [
    "PLABWIN10: Windows 10 (Domain Member Workstation)",
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
  ],
  overview:
    "This lab provided a comprehensive hands-on exploration of various tools and techniques used for network security assessments. The exercises covered network reconnaissance and discovery, information gathering, file manipulation, scripting in both Linux and Windows environments, packet capture and replay, basic forensics, and the use of exploitation frameworks and password crackers. The goal was to enhance the ability to gather actionable intelligence about network vulnerabilities and to simulate typical assessment scenarios.",
  keyLearningOutcomes: [
    "Network Reconnaissance and Discovery:\n  • Use Linux commands (ifconfig, nmap, dig) to identify active hosts, open ports, and gather DNS information.",
    "Information Gathering:\n  • Employ tools like arp, dnsenum, and arping to collect data on network devices and configurations.",
    "File Manipulation:\n  • Utilize common Linux commands (cat, head, tail, grep, chmod) for reviewing and altering file attributes to verify system integrity.",
    "Shell and Script Environments:\n  • Demonstrate proficiency in both Linux (Bash scripting via vi) and Windows (PowerShell scripting via Notepad) to automate routine tasks.",
    "Packet Capture and Replay:\n  • Capture network traffic using Wireshark and simulate traffic replay with tcpreplay to analyze network behavior.",
    "Forensics:\n  • Understand basic forensic concepts and tools (dd, memdump, FTK Imager, Autopsy) for evidence acquisition and analysis.",
    "Exploitation Frameworks & Password Crackers:\n  • Apply tools like John the Ripper (and others) for password cracking, and discuss data sanitization techniques to securely erase sensitive information."
  ],
  exercises: [
    "Exercise 1 – Network Reconnaissance and Discovery:\n  • Executed ifconfig and nmap commands on Kali Linux to enumerate devices and services on the 192.168.0.0/24 subnet.\n  • Used dig to retrieve DNS details of a target domain.",
    "Exercise 2 – Information Gathering:\n  • Ran arp and dnsenum commands on PLABWIN10 and PLABKALI to extract network and DNS data, verifying host identities and connectivity.",
    "Exercise 3 – File Manipulation:\n  • Demonstrated the use of head, tail, cat, grep, and chmod commands to display file content, filter data, and change file permissions.",
    "Exercise 4 – Shell and Script Environments:\n  • Established an SSH session using PuTTY to access PLABKALI.\n  • Created and executed a simple Bash script on Kali Linux and a PowerShell script on PLABWIN10 to automate basic tasks.",
    "Exercise 5 – Packet Capture and Replay:\n  • Launched Wireshark on PLABKALI to capture live traffic and verified captured ICMP/SYN packets generated from PLABWIN10.",
    "Exercise 6 – Forensics:\n  • Reviewed forensic methods (e.g., disk imaging with dd, memory dumps, and use of FTK Imager) for evidence collection and analysis.",
    "Exercise 7 – Exploitation Frameworks and Password Crackers:\n  • Employed John the Ripper on PLABKALI to crack a captured password hash.\n  • Discussed various password cracking tools (Hashcat, Medusa, Hydra) and data sanitization practices to securely dispose of sensitive data."
  ],
  impact:
    "Holistic Security Assessment:\n  The lab reinforced the importance of using multiple tools and techniques to obtain a complete view of network vulnerabilities.\n\nPractical Skill Development:\n  Hands-on experience with reconnaissance, file manipulation, scripting, packet analysis, forensics, and password cracking prepares me to effectively assess and secure complex network environments.\n\nEnhanced Incident Response:\n  Familiarity with these tools allows for rapid identification and remediation of network security issues, minimizing the impact of potential breaches.",
  conclusion:
    "This lab provided a practical, in-depth look at the tools and techniques used in network security assessments. The hands-on exercises enhanced my ability to gather and analyze network information, simulate attacks, and identify vulnerabilities. These skills are critical for performing effective security evaluations and developing robust defense strategies in a real-world setting.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 9,
  category: "security",
  title: "CompTIA Security+ – Penetration Testing Techniques",
  description:
    "An introductory lab covering penetration testing fundamentals, testing methodologies, rules of engagement, and reconnaissance techniques using tools like Maltego.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Maltego configuration and execution of a footprinting machine",
    "Screenshot 2: Reconnaissance results displaying DNS and network data",
    "Screenshot 3: Overview of penetration testing phases and methodologies"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Penetration Testing",
    "Reconnaissance",
    "Vulnerability Assessment",
    "Ethical Hacking"
  ],
  devicesUsed: [
    "PLABDM01: Windows Server 2019 (Domain Member)",
    "PLABKALI: Kali Linux 2019.4 (Standalone Server)"
  ],
  overview:
    "This lab introduced the fundamentals of penetration testing, highlighting its role in uncovering and exploiting security vulnerabilities in applications, network devices, and infrastructure. It covered the entire pen testing lifecycle—from discovery and enumeration to exploitation and reporting—and explored different testing methodologies (blackbox, whitebox, and graybox). The lab also emphasized the importance of rules of engagement and practical reconnaissance techniques using tools like Maltego.",
  keyLearningOutcomes: [
    "Penetration Testing Fundamentals:\n  • Understand the purpose of pen testing beyond vulnerability assessments.\n  • Recognize the core phases: Discovery, Enumeration, Vulnerability Mapping, Exploitation, and Reporting.",
    "Testing Methodologies:\n  • Blackbox Testing: Conducted without prior system knowledge (zero-knowledge) to simulate external attacks.\n  • Whitebox Testing: Performed with full disclosure, enabling targeted analysis of internal controls.\n  • Graybox Testing: A hybrid approach with partial system knowledge, balancing realism and thoroughness.",
    "Rules of Engagement:\n  • Learn the importance of pre-test agreements that define scope, contact details, sensitive data handling, and testing schedules.",
    "Advanced Testing Techniques:\n  • Overview of lateral movement, privilege escalation (horizontal and vertical), persistence, cleanup, pivoting, and the use of bug bounty programs.",
    "Reconnaissance Approaches:\n  • Differentiate between active (direct interaction using tools like Maltego) and passive reconnaissance (information gathering without detection)."
  ],
  exercises: [
    "Exercise 1 – Penetration Testing Overview:\n  • Defined pen testing and reviewed the process used to discover, exploit, and report vulnerabilities.\n  • Compared the three common testing types (blackbox, whitebox, graybox) and discussed their pros and cons.",
    "Exercise 2 – Rules of Engagement:\n  • Discussed key elements of a rules of engagement document, ensuring that testing remains within agreed boundaries.",
    "Exercise 3 – Testing Techniques:\n  • Explored various techniques (lateral movement, privilege escalation, persistence, pivoting) that help simulate real-world attacks.\n  • Emphasized the importance of cleanup to remove test artifacts post-assessment.",
    "Exercise 4 – Reconnaissance Exercise – Active Assessment:\n  • Performed an active reconnaissance assessment using Maltego on PLABDM01.\n  • Configured Maltego, executed a footprinting machine (Footprint L1) against a target domain (e.g., test.vulnweb.com), and reviewed the DNS and network data to identify potential vulnerabilities."
  ],
  impact:
    "Enhanced Security Analysis:\n  Gained a thorough understanding of how to measure an organization’s resistance to attacks and identify exploitable vulnerabilities.\n\nPractical Skill Development:\n  Hands-on experience with reconnaissance tools (e.g., Maltego) demonstrated the ability to collect critical intelligence, a foundational skill for real-world penetration testing.\n\nStrategic Planning:\n  Understanding and applying rules of engagement ensures that penetration testing is conducted safely, legally, and effectively.",
  conclusion:
    "This lab provided a comprehensive introduction to penetration testing techniques and methodologies. By learning about different testing types, establishing rules of engagement, and executing active reconnaissance, I have built a solid foundation in security assessment that prepares me for advanced penetration testing and real-world cyber defense initiatives.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
{
  id: 31,
  category: "security",
  title: "Reconnaissance Lab – CompTIA Security+",
  description:
    "A hands-on lab exploring reconnaissance techniques, including DNS reconnaissance, web-based intelligence gathering, host discovery, port scanning, and system fingerprinting for ethical hacking and penetration testing.",
  images: [placeholder1, placeholder2, placeholder3],
  imageDescriptions: [
    "Screenshot 1: Performing DNS enumeration with nslookup",
    "Screenshot 2: Running an Nmap scan to identify active hosts and open ports",
    "Screenshot 3: Extracting OSINT data using theHarvester and Recon-ng"
  ],
  tags: [
    "Cybersecurity",
    "CompTIA Security+",
    "Reconnaissance",
    "Penetration Testing",
    "OSINT",
    "Network Scanning"
  ],
  devicesUsed: [
    "Lab network (192.168.0.0/24) including Windows and Kali Linux systems"
  ],
  overview:
    "In this lab, I applied reconnaissance techniques—both active and passive—to gather critical information about a target domain (practicelabs.com) and network assets. This exercise reinforced my understanding of footprinting, host discovery, port scanning, and system fingerprinting, all of which are essential skills in ethical hacking and penetration testing.",
  keyLearningOutcomes: [
    "DNS Reconnaissance:\n  • Utilized nslookup to retrieve A, SOA, NS, and MX records.\n  • Demonstrated the ability to query specific DNS records and debug caching details.",
    "Web-Based Intelligence Gathering:\n  • Employed Recon-ng and theHarvester to collect subdomains, hostnames, and email addresses.\n  • Successfully installed and configured reconnaissance modules to extract OSINT.",
    "Host Discovery & Port Scanning:\n  • Executed various Nmap scans (ping scan, ARP scan, traceroute, and full port scans) to identify live hosts and open services.\n  • Analyzed different scan types (TCP, UDP, and SYN scans) to determine port states and service vulnerabilities.",
    "System Fingerprinting:\n  • Conducted active fingerprinting using Nmap (with OS detection flags) and passive fingerprinting using p0f.\n  • Accurately identified operating system types, versions, and network service banners."
  ],
  exercises: [
    "Exercise 1 – DNS Reconnaissance:\n  • Used nslookup to query various DNS records, including A, SOA, NS, and MX records.\n  • Verified caching behaviors and debugging techniques for DNS resolution.",
    "Exercise 2 – Web-Based Intelligence Gathering:\n  • Gathered OSINT data using theHarvester and Recon-ng.\n  • Extracted subdomains, email addresses, and metadata to analyze target infrastructure.",
    "Exercise 3 – Host Discovery & Port Scanning:\n  • Conducted Nmap scans (ping scan, ARP scan, traceroute, full port scan) to enumerate live hosts.\n  • Evaluated TCP, UDP, and SYN scan results to determine open services and security risks.",
    "Exercise 4 – System Fingerprinting:\n  • Used active fingerprinting via Nmap’s OS detection feature.\n  • Performed passive fingerprinting with p0f to analyze network traffic and service banners."
  ],
  impact:
    "Enhanced Practical Skills:\n  This lab improved my ability to conduct comprehensive reconnaissance, identifying potential security risks in a network.\n\nSecurity Posture Awareness:\n  Understanding the role of reconnaissance in cybersecurity helps in both offensive (penetration testing) and defensive (threat hunting) operations.\n\nIndustry-Standard Tool Proficiency:\n  Mastering reconnaissance tools like Nmap, nslookup, theHarvester, and Recon-ng equips me with vital skills for cybersecurity assessments.",
  conclusion:
    "This lab reinforced my ability to execute and analyze reconnaissance operations, highlighting the importance of footprinting, host discovery, and OSINT in ethical hacking. These skills are essential for penetration testing and cybersecurity assessments, ensuring a thorough understanding of network security postures.",
  video: placeholdervideo,
  github: "https://github.com/example"
},
  {
    id: 22,
    category: "web",
    title: "React Portfolio Website",
    description:
      "A modern, responsive portfolio site built entirely in React with dynamic routing, modular components, and theme toggling for a seamless user experience.",
    images: [placeholder1, placeholder2, placeholder3],
    tags: [
      "React.js",
      "Responsive Design",
      "React Router",
      "CSS Variables",
      "Portfolio"
    ],
    details:
      "This portfolio website is developed using React.js and leverages React Router for dynamic, client-side navigation between multiple sections (such as the introductory screen, portfolio gallery, and detailed project views). The project employs a modular component-based architecture with reusable components including a Navbar, ProjectCard, SearchBar, and an interactive image carousel in the expanded project view.\n\nKey features include:\n• **Dynamic Routing:** Seamless navigation using React Router.\n• **Responsive Layout:** Designed with Flexbox and media queries to ensure a consistent experience on all devices.\n• **Theme Toggling:** Utilizes CSS variables for light and dark modes, allowing users to switch themes with a toggle button.\n• **Search & Filter:** A robust search bar filters projects based on associated technology tags.\n• **Interactive Image Carousel:** In-depth project views feature an image carousel with overlaid descriptive text for each screenshot.\n\nThe code adheres to best practices in component design and state management, making the application both scalable and maintainable.",
    video: placeholdervideo,
    github: "https://github.com/yourusername/react-portfolio"
  },
  {
    id: 23,
    category: "web",
    title: "DBH Sport Psychology Consulting",
    description:
      "A professional, responsive website built for a sports psychology consulting firm using HTML, CSS, and JavaScript.",
    images: [placeholder1, placeholder2, placeholder3],
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive",
      "GoDaddy",
      "SSL",
      "Security",
      "Client Work"
    ],
    details:
      "For this project, I developed a fully responsive website for DBH Sport Psychology Consulting using vanilla HTML, CSS, and JavaScript. In addition to crafting a clean, modern design that effectively communicates the client’s services, I assisted with the technical setup by:\n\n• Configuring domain hosting on GoDaddy.\n• Generating and applying SSL certificates to ensure secure, encrypted communication.\n\nThe result is a secure, professional website that not only meets the client’s visual and functional requirements but also provides a trustworthy online presence.",
    // Since this is client work, no public video is provided.
    video: placeholdervideo,  // Optional – replace with null if not needed.
    // Using the live site URL here as a reference (or GitHub if available)
    github: "https://www.dbhsportpsychologyconsulting.com/"
  }
];

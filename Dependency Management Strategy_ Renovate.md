Here is the comprehensive summary of your new dependency management workflow. You can save this as DEPENDENCY\_STRATEGY.md in your repository documentation or simply share it with your team.

# ---

**Dependency Automation & Maintenance Strategy**

## **1\. Executive Summary**

We have transitioned from a high-maintenance, manual dependency update process (Dependabot spam) to an automated, "agent-based" workflow using **Renovate**.

Instead of reviewing dozens of individual Pull Requests weekly, we now utilize a centralized **Dependency Dashboard** and automated grouping rules. This shift is designed to prioritize developer velocity ("vibe coding") without sacrificing security or stability.

## **2\. What We Implemented & Why**

| Feature | Implementation | Reasoning |
| :---- | :---- | :---- |
| **The "Agent"** | Switched to **Renovate** (GitHub App). | Dependabot lacked the advanced grouping and "dashboard" features required to reduce alert fatigue. |
| **Noise Reduction** | **Grouped Updates** (All minor/patch updates in one PR). | 90% of updates are safe (linters, minor patches). Reviewing them individually was a waste of time. |
| **Automation** | **Auto-Merge** enabled for passing tests. | If the "Safe Group" passes CI (tests), no human intervention is needed. We trust our tests. |
| **Safety Net** | **Auto-Bisect** on failure. | If a group fails, the agent automatically "un-groups" them to isolate the specific library that caused the crash. |
| **Scheduling** | **"Monday Morning"** schedule. | Prevents context switching during the work week. Updates happen when we are fresh, not Friday at 5 PM. |

## ---

**3\. The New Workflow (Maintenance Guide)**

### **A. The "Monday Morning" Check**

Most weeks, you will do nothing. The agent will run, group updates, run tests, and auto-merge them. However, if you see a notification, here is the protocol:

**1\. Locate the Dashboard**

* Go to your repository's **Issues** tab.  
* Find the pinned issue titled: **"Dependency Dashboard"**.  
* *This is your control center. Do not close this issue.*

**2\. Handling "Pending" Updates**

* The dashboard lists updates waiting for approval (usually Major version upgrades, e.g., v4.0.0 → v5.0.0).  
* **Action:** Click the checkbox next to the update to trigger the PR creation when you are ready to deal with breaking changes.

**3\. Handling Failures (The "Click-Ops" Fix)**

* If the "Weekly Group" PR fails CI, Renovate will list the failed package in the Dashboard.  
* **Action:** Do not debug the massive group. Go to the Dashboard and click the checkbox to **"unschedule"** or **"update individually"** the suspect package.  
* Renovate will isolate that package into its own PR so you can fix it separately.

### **B. Configuration Changes (renovate.json)**

If you need to change behavior (e.g., ignore a specific package that keeps breaking), modify the renovate.json file in the root directory.

**Example: Ignoring a specific broken package**

JSON

{  
  "packageRules": \[  
    {  
      "matchPackageNames": \["react-native-breaking-lib"\],  
      "enabled": false  
    }  
  \]  
}

## **4\. Summary of Benefits**

* **Zero Noise:** You are no longer notified for every single patch.  
* **Zero Friction:** Safe updates happen while you sleep.  
* **High Control:** You have a dashboard to manage the risky stuff on your own terms.

**Next Step:** Enjoy your coding. The agent has the watch.
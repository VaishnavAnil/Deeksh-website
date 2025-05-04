// AdminPanel.js
import React from "react";
import NavigationBar from "./NavigationBar";
import ContentArea from "./ContentArea";

function AdminPanel() {
  const [currentSection, setCurrentSection] = React.useState("orderManagement");

  return (
    <div>
      <NavigationBar
        currentSection={currentSection}
        onSectionChange={(section) => setCurrentSection(section)}
      />
      <ContentArea currentSection={currentSection} />
    </div>
  );
}

export default AdminPanel;

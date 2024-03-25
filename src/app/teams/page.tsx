import JoinTeam from "@/components/joining-page";
import ScrollIndicator from "@/components/scrollindicator";
import Button from "@/components/button";

export default function Teams() {
  return (
    <main className="min-h-screen">
      <JoinTeam
        teamName="Management"
        order="1"
        titles={["EVENTS", "OUTREACH", "FINANCE"]}
      />
      <JoinTeam
        teamName="Tech"
        order="2"
        titles={["APP", "WEB", "AI/ML", "R&D", "DEVOPS"]}
      />
      <JoinTeam
        teamName="Design"
        order="1"
        titles={["UI/UX", "GRAPHICS", "VIDEO"]}
      />
      <div className=" flex justify-center items-center mb-36">
      <Button text="Go to Dashboard" />

      </div>
      <ScrollIndicator />
    </main>
  );
}

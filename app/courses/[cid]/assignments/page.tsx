import AssignmentItem from "./AssignmentItem";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total</h3>{" "}<button>+</button>{" "}
      <ul id="wd-assignment-list">
        <AssignmentItem
          cid={cid}
          aid="1"
          title="A1 - HTML"
          details="Due Sep 27 at 11:59pm|125 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="2"
          title="A2 - CSS + TAILWIND"
          details="Due Oct 11 at 11:59pm|125 pts"
        />
        <AssignmentItem
          cid={cid}
          aid="3"
          title="A3 - JAVASCRIPT"
          details="Due Oct 25 at 11:59pm|125 pts"
        />
      </ul>
    </div>
  );
}

export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th>
            <th align="center">Topic</th>
            <th align="center">Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td>
            <td align="center">HTML</td>
            <td align="center">2/3/21</td>
            <td align="right">85</td>
          </tr>
          <tr>
            <td>Q2</td>
            <td align="center">CSS</td>
            <td align="center">2/10/21</td>
            <td align="right">90</td>
          </tr>
          <tr>
            <td>Q3</td>
            <td align="center">JavaScript</td>
            <td align="center">2/17/21</td>
            <td align="right">95</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td>
            <td align="right">90</td>
          </tr>
        </tfoot>
      </table>

      <h4>Schedule</h4>
      <table id="wd-your-table" border={1} width="100%">
        <thead>
          <tr>
            <th>Event</th>
            <th align="center">Date</th>
            <th align="center">Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chase appointment</td>
            <td align="center">09/29/27</td>
            <td align="center">10:00 AM</td>
            <td align="left">Boylston St</td>
          </tr>
          <tr>
            <td>Massachusetts id appointment</td>
            <td align="center">09/30/27</td>
            <td align="center">11:30AM</td>
            <td align="left">Government Center</td>
          </tr>
          <tr>
            <td>Computer Vision A1</td>
            <td align="center">10/02/27</td>
            <td align="center">6:00 PM</td>
            <td align="left">Canvas</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

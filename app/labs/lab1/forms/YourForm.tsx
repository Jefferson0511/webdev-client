export default function YourForm() {
  return (
    <form id="wd-your-form">
      <h5>Student Profile</h5>
      <label htmlFor="wd-your-form-first-name">First name:</label>
      <input
        type="text"
        defaultValue="Jefferson David"
        id="wd-your-form-first-name"
      />
      <br />
      <label htmlFor="wd-your-form-last-name">Last name:</label>
      <input type="text" defaultValue="Kingston" id="wd-your-form-last-name" />
      <br />
      <label htmlFor="wd-your-form-student-id">Student ID:</label>
      <input
        type="password"
        defaultValue="002564950"
        id="wd-your-form-student-id"
      />
      <br />
      <label htmlFor="wd-your-form-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-form-bio"
        cols={30}
        rows={5}
        defaultValue="Hello, I am interested in this course as i expect to learn a lot from it in terms of developing clean and neat code."
      />
      <br />
      <label>Current Class:</label>
      <br />
      <input type="radio" name="current-class" id="wd-radio-freshman" />
      <label htmlFor="wd-radio-freshman">Freshman</label>
      <br />
      <input type="radio" name="current-class" id="wd-radio-sophomore" />
      <label htmlFor="wd-radio-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="current-class" id="wd-radio-junior" />
      <label htmlFor="wd-radio-junior">Junior</label>
      <br />
      <input type="radio" name="current-class" id="wd-radio-senior" />
      <label htmlFor="wd-radio-senior">Senior</label>
      <br />
      <input type="radio" name="current-class" id="wd-radio-graduate" />
      <label htmlFor="wd-radio-graduate">Graduate</label>
      <br />
      <br />
      <label>Campus:</label>
      <br />
      <input type="radio" name="campus" id="wd-radio-boston" />
      <label htmlFor="wd-radio-boston">Boston</label>
      <br />
      <input type="radio" name="campus" id="wd-radio-seattle" />
      <label htmlFor="wd-radio-seattle">Seattle</label>
      <br />
      <input type="radio" name="campus" id="wd-radio-london" />
      <label htmlFor="wd-radio-london">London</label>
      <br />
      <br />
      <label>Interests:</label>
      <br />
      <input type="checkbox" name="Music" id="wd-checkbox-music" />
      <label htmlFor="wd-checkbox-music">Music</label>
      <br />
      <input type="checkbox" name="Sports" id="wd-checkbox-sports" />
      <label htmlFor="wd-checkbox-sports">Sports</label>
      <br />
      <input type="checkbox" name="Reading" id="wd-checkbox-reading" />
      <label htmlFor="wd-checkbox-reading">Reading</label>
      <br />
      <input type="checkbox" name="Gaming" id="wd-checkbox-gaming" />
      <label htmlFor="wd-checkbox-gaming">Gaming</label>
      <br />
      <h4 id="wd-dropdowns">Dropdowns</h4>
      <h5>Select one</h5>
      <label htmlFor="wd-select-one-college">Select your college</label>
      <br />
      <select id="wd-select-one-college" defaultValue="CPS">
        <option value="KHOURY">Khoury College of Computer Science</option>
        <option value="COE">College of Engineering</option>
        <option value="BOUVE">Bouvé College of Health Sciences</option>
        <option value="CPS">College of Professional Studies</option>
      </select>
      <h5>Select many</h5>
      <label htmlFor="wd-select-many-specialization">Specializations: </label>
      <br />
      <select
        multiple
        id="wd-select-many-specialization"
        defaultValue={["AI", "CS"]}
      >
        <option value="AI">Artificial Intelligence</option>
        <option value="ML">Machine Learning</option>
        <option value="CS">Computer Science</option>
        <option value="SE">Software Engineering</option>
      </select>
      <br />
      <h4>Other HTML field types</h4>
      <label htmlFor="wd-text-fields-email">Email: </label>
      <input
        type="email"
        placeholder="jdoe@somewhere.com"
        id="wd-text-fields-email"
      />
      <br />
      <label htmlFor="wd-text-number">Graduation Year: </label>
      <input
        type="number"
        defaultValue="2026"
        placeholder="1000"
        min="1900"
        max="2029"
        id="wd-text-number"
      />
      <br />
      <label htmlFor="wd-text-fields-excitement">
        How excited are you about this course?{" "}
      </label>
      <input
        type="range"
        defaultValue="9"
        min="0"
        max="10"
        id="wd-text-fields-excitement"
      />
      <br />
      <label htmlFor="wd-text-fields-dob">Date of birth: </label>
      <input
        type="date"
        defaultValue="2003-11-05"
        min="1900-01-01"
        max="2010-12-31"
        id="wd-text-fields-dob"
      />
      <br />
      <br />
      <button id="wd-your-form-save" type="submit">
        Save
      </button>{" "}
      <button id="wd-your-form-cancel" type="button">
        Cancel
      </button>

      
    </form>
  );
}


let participantCount = 1;

const addBtn = document.getElementById('add');
const participantsFieldset = document.querySelector('.participants');

function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date <span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
      <p>Grade</p>
      <select id="grade${count}" name="grade${count}">
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

addBtn.addEventListener('click', () => {
  participantCount++;

  addBtn.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});

const form = document.getElementById('registrationForm');
const summary = document.getElementById('summary');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.style.display = 'none';

  summary.textContent = 'Successfully submitted';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fees = [...document.querySelectorAll('[id^="fee"]')];
  let totalFees = 0;
  fees.forEach(feeInput => {
    totalFees += parseFloat(feeInput.value) || 0;
  });

  const adultName = document.getElementById('adult_name').value || 'Adult';

  form.style.display = 'none';

  summary.innerHTML = `
    <h2>Thank you ${adultName} for registering.</h2>
    <p>You have registered ${participantCount} participant${participantCount > 1 ? 's' : ''} and owe $${totalFees.toFixed(2)} in Fees.</p>
  `;
});



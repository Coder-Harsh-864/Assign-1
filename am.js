// Form Selection
const form = document.querySelector('form');

// Form Submit Event
form.addEventListener('submit', (event) => {
  event.preventDefault();  // Prevent form from refreshing the page

  // Capture Form Data
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const address = document.getElementById('address').value.trim();
  const other = document.getElementById('other').value.trim();

  // Validation Check
  if (name === '' || email === '' || phone === '' || password === '' || address === '') {
    alert("Please fill all required fields!");
    return;
  }

  // Display Data (for testing)
  console.log("Form Submitted Successfully:");
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`Password: ${password}`);  // Be cautious with sensitive data
  console.log(`Address: ${address}`);
  console.log(`Other Info: ${other || 'N/A'}`);

  // Reset the form after submission
  form.reset();
  alert("Form Submitted Successfully! Thank you.");
});

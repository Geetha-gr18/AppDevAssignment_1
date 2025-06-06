// managerepair.js

function addRepair() {
    const model = document.getElementById('model').value;
    const type = document.getElementById('type').value;
    const cost = document.getElementById('cost').value;
    const date = document.getElementById('date').value;
  
    if (!model || !type || !cost || !date) return;
  
    const li = document.createElement('li');
    li.innerHTML = `<strong>${model}</strong> | ${type} | $${cost} | ${date} 
      <span class="actions">
        <button onclick="editRepair(this)">Edit</button>
        <button onclick="deleteRepair(this)">Delete</button>
      </span>`;
  
    document.getElementById('repairList').appendChild(li);
    document.getElementById('repairForm').reset();
  }
  
  function deleteRepair(button) {
    const li = button.parentElement.parentElement;
    li.remove();
  }
  
  function editRepair(button) {
    const li = button.parentElement.parentElement;
    const parts = li.innerText.split('|');
  
    document.getElementById('model').value = parts[0].trim();
    document.getElementById('type').value = parts[1].trim();
    document.getElementById('cost').value = parts[2].replace('$','').trim();
    document.getElementById('date').value = parts[3].trim();
  
    li.remove();
  }
  
let members=[]
 document.getElementById('duration').addEventListener('input', function() {
    if(members.length>=0){

        const table = document.getElementById('teamMembersTable');
        table.classList.remove('hidden');
        const role = document.getElementById('role').value;
        const level = document.getElementById('level').value;
        const region = document.getElementById('region').value;
        const numberOfPeople = document.getElementById('numberOfPeople').value;
        const duration = document.getElementById('duration').value;
        
        if (role && level && region && duration) {
            const membersList = document.getElementById('membersList');
            const newRow = document.createElement('tr');
        
            // You may need to customize cost calculation based on inputs
            const cost = calculateCost(role, level, region, numberOfPeople, duration);
        
            newRow.innerHTML = `
                <td>${role}</td>
                <td>${level}</td>
                <td>${region}</td>
                <td>${numberOfPeople}</td>
                <td>${duration}</td>
                <td>${cost} €</td>
            `;
            members.push(newRow)
            membersList.appendChild(newRow);
            updatePriceIndicator();
            
        } else {
            alert("Please fill in all fields.");
        }
    }

});

document.getElementById('removeMemberBtn').addEventListener('click', function() {
    const membersList = document.getElementById('membersList');
    
        if (membersList.lastChild) {
            membersList.removeChild(membersList.lastChild);
            members.pop(); // Correctly remove the last member from the array
            if(members.length==0){
                const memberTable = document.getElementById('teamMembersTable');
                memberTable.style.display = 'none';
            }
            updatePriceIndicator();
        }
    
});

function calculateCost(role, level, region, numberOfPeople, duration) {
    // Implement your cost calculation logic here.
    return Math.floor(Math.random() * (30000 - 15000) + 15000); // Placeholder
}

function updatePriceIndicator() {
    const membersList = document.getElementById('membersList').children;
    let totalCost = 0;

    for (const row of membersList) {
        const cost = parseFloat(row.cells[5].innerText);
        totalCost += cost;
    }
    
    document.getElementById('priceIndicator').innerText = `Price indication: ${totalCost} €`;
}
document.getElementById('addMemberBtn').addEventListener('click',function(){
    const role = document.getElementById('role').value;
    const level = document.getElementById('level').value;
    const region = document.getElementById('region').value;
    const numberOfPeople = document.getElementById('numberOfPeople').value;
    const duration = document.getElementById('duration').value;
    if (role && level && region && duration) {
        const membersList = document.getElementById('membersList');
        const newRow = document.createElement('tr');
    
        // You may need to customize cost calculation based on inputs
        const cost = calculateCost(role, level, region, numberOfPeople, duration);
    
        newRow.innerHTML = `
            <td>${role}</td>
            <td>${level}</td>
            <td>${region}</td>
            <td>${numberOfPeople}</td>
            <td>${duration}</td>
            <td>${cost} €</td>
        `;
        members.push(newRow)
        membersList.appendChild(newRow);
        updatePriceIndicator();
        
    } else {
        alert("Please fill in all fields.");
    }

})
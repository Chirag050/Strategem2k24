document.getElementById('createTeamsBtn').addEventListener('click', () => {
    const teamCount = document.getElementById('teamCount').value;

    fetch('/create-teams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ numOfTeams: teamCount })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

document.getElementById('addPropertyBtn').addEventListener('click', () => {
    const teamCode = parseInt(document.getElementById('teamCodes').value);
    const propertyCode = parseInt(document.getElementById('propertyCode').value);
    const ore = parseInt(document.getElementById('ore').value);
    const type = document.getElementById('type').value;
    const property = document.getElementById('property').value;

    fetch('/append-property', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teamCode, propertyCode, propertyName: property, type, ore })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});

function swapTeamResources() {
    const teamCode1 = parseInt(document.getElementById('teamCode1').value);
    const army1 = parseInt(document.getElementById('army1').value);
    const food1 = parseInt(document.getElementById('food1').value);
    const ore1 = parseInt(document.getElementById('ore1').value);
    const property1 = document.getElementById('property1').value;
    const type1 = document.getElementById('type1').value;
    const propertyCode1 = parseInt(document.getElementById('propertyCode1').value);

    const teamCode2 = parseInt(document.getElementById('teamCode2').value);
    const army2 = parseInt(document.getElementById('army2').value);
    const food2 = parseInt(document.getElementById('food2').value);
    const ore2 = parseInt(document.getElementById('ore2').value);
    const property2 = document.getElementById('property2').value;
    const type2 = document.getElementById('type2').value;
    const propertyCode2 = parseInt(document.getElementById('propertyCode2').value);
    const rent = parseInt(document.getElementById('rent').value);

    fetch('/deleteTeamResources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            teamCode: teamCode1, army: army1, food: food1, ore: ore1, property: property1, type: type1, propertyCode: propertyCode1, rent: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(`Deleted data for team 1: ${data.message}`))
    .catch(error => console.error('Error deleting team 1 data:', error));

    fetch('/deleteTeamResources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            teamCode: teamCode2, army: army2, food: food2, ore: ore2, property: property2, type: type2, propertyCode: propertyCode2, rent
        })
    })
    .then(response => response.json())
    .then(data => console.log(`Deleted data for team 2: ${data.message}`))
    .catch(error => console.error('Error deleting team 2 data:', error));

    fetch('/addTeamResources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            teamCode: teamCode1, army: army2, food: food2, ore: ore2, property: property2, type: type2, propertyCode: propertyCode2, rent
        })
    })
    .then(response => response.json())
    .then(data => console.log(`Updated team 1: ${data.message}`))
    .catch(error => console.error('Error updating team 1:', error));

    fetch('/addTeamResources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            teamCode: teamCode2, army: army1, food: food1, ore: ore1, property: property1, type: type1, propertyCode: propertyCode1, rent: 1
        })
    })
    .then(response => response.json())
    .then(data => console.log(`Updated team 2: ${data.message}`))
    .catch(error => console.error('Error updating team 2:', error));
}

function updateTeamResources() {
    const teamCode = parseInt(document.getElementById('teamCodeInput').value);

    fetch('/update-team-resources', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ teamCode })
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
}


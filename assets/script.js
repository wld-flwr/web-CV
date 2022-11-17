Parse.serverURL = 'https://parseapi.back4app.com';
Parse.initialize(
  'GIPKqEr50IWJHFyPBFdcY5vMzUhAed03pOqXurJg', // This is your Application ID
  '0BHux8iz09g4Dvfz4sAjR95taXpRyPrsYnLiK6rT' // This is your Javascript key
);

const SoftSkill = Parse.Object.extend("SoftSkill");

const listSS = document.getElementById('sft-sklls');

const readSoftSkill = async () => {

    const querySS = new Parse.Query(SoftSkill);
    try {

        const resultsSS = await querySS.find();
        listSS.innerHTML = "";

        for (const skills of resultsSS) {

            const skill = skills.get("name")
            listSS.innerHTML += '<li>' + skill + '';

        }

    } catch (error) {
        console.error("Error while fetching itens", error);
    }
}

readSoftSkill();

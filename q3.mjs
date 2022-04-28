import fetch from "node-fetch";

async function getUser(userID) {
    try {
        const response = await fetch(`http://fg-69c8cbcd.herokuapp.com/user/${userID}`);
        const json = await response.json();
        console.log(json);
        return json;
    } catch(err) {
        console.log(err);
    }
}

async function canConnect(user, targetID, checked) {
    if(user.id === targetID) {
        return true;
    }

    checked.push(user.id);

    for(let friendID of user.friends) {
        let canUserConnect = false;
        if(friendID === targetID) {
            canUserConnect = true;
        } else if(checked.includes(friendID)) {
            canUserConnect = false;
        } else {
            let friend = await getUser(friendID);
            canUserConnect = await canConnect(friend, targetID, checked);
        }

        if(canUserConnect) {
            return true;
        }
    }

    return false;
}

async function main(input) {
    console.log(input);

    let start = Number(input[0]);
    let targetID = Number(input[1]);

    let startUser = await getUser(start);
    let canStartUserConnect = await canConnect(startUser, targetID, []);

    let result = canStartUserConnect ? "connect" : "not connnect";

    console.log(result);
}

main(process.argv.slice(2));
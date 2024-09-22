function sendNotification(email) {
    const atIndex = email.indexOf('@');

    if (atIndex === -1) {
        return "Invalid Email";
    }

    const username = email.substring(0, atIndex);
    const domain = email.substring(atIndex + 1);
    const notificationMessage = `${username} sent you an email from ${domain}`;
    
    return notificationMessage;
}

const email = "fahim234.hotmail.com";
const message = sendNotification(email);
console.log(message);
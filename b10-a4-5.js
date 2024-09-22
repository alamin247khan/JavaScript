function waitingTime(waitingTimes, serialNumber) {
  const totalInterviews = waitingTimes.length;
  const interviewsBeforeIsrat = serialNumber - 1;
  const remainingInterviews = interviewsBeforeIsrat - totalInterviews;

  if (remainingInterviews <= 0) {
    return 0;
  }

  const averageInterviewTime = waitingTimes.reduce((total, time) => total + time, 0) / totalInterviews;
  const waitingTime = remainingInterviews * averageInterviewTime;
  
  const hours = Math.floor(waitingTime / 60);
  const remainingMinutes =Math.round(waitingTime % 60);
  return `${hours} ঘণ্টা এবং ${remainingMinutes} মিনিট`;
}

const waitingTimes = [11, 50, 10, 10, 10];
const serialNumber = 10;

const waitingTimeForIsrat = waitingTime(waitingTimes, serialNumber);

console.log("ইসরাতের আরো", waitingTimeForIsrat, "মিনিট অপেক্ষা করতে হবে।");
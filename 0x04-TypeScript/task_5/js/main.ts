// Define interfaces MajorCredits and MinorCredits
interface MajorCredits {
	credits: number;
	brand: "MajorCredits"; // Brand property to uniquely identify MajorCredits
  }

  interface MinorCredits {
	credits: number;
	brand: "MinorCredits"; // Brand property to uniquely identify MinorCredits
  }

  // Define sumMajorCredits function
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: "MajorCredits"
	};
  }

  // Define sumMinorCredits function
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
	  credits: subject1.credits + subject2.credits,
	  brand: "MinorCredits"
	};
  }

  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, brand: "MajorCredits" };
  const majorSubject2: MajorCredits = { credits: 4, brand: "MajorCredits" };

  const minorSubject1: MinorCredits = { credits: 2, brand: "MinorCredits" };
  const minorSubject2: MinorCredits = { credits: 1, brand: "MinorCredits" };

  const sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

  console.log("Sum of Major Credits:", sumOfMajorCredits);
  console.log("Sum of Minor Credits:", sumOfMinorCredits);

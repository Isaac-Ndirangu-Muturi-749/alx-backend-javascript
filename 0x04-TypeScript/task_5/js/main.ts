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

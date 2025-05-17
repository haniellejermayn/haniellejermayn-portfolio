const education = [
  {
    years: "2023 - Present",
    school: "De La Salle University -",
    campus: "Manila",
    degree: "BS Computer Science Major in Software Technology",
    cgpa: "3.928/4.000 (Summa Cum Laude Standing)",
    awards: "Consistent 1st Director's Lister (5 Terms)"
  },
  {
    years: "2017 - 2023",
    school: "Philippine Science High School -",
    campus: "Main Campus",
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    cgpa: "",
    awards: "High Honors, Research Profiency Award"
  }
];

const Education = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8 text-accent-light">Education</h2>
      {education.map((item, index) => {
        const { years, school, campus, degree, cgpa, awards } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* Bullets */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[200px] bg-white/10"></div>
            </div>
            {/* Text */}
            <div className="max-w-[500px] mb-8">
              <p className="mb-3 text-lg text-white/50">{years}</p>
              <h4 className="h4">{school}</h4>
              <h4 className="h4 mb-2">{campus}</h4>
              <p className="mb-2 text-white/60">{degree}</p>
              {cgpa && (
                <p className="">
                  <span className="font-semibold">CGPA:</span> {cgpa}
                </p>
              )}
              <p className="">
                <span className="font-semibold">Awards:</span> {awards}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;

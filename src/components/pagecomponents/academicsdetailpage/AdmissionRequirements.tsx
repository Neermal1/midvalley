// AdmissionRequirements.js
export default function AdmissionRequirements({ eligibility_criteria }: any) {
  return (
    <section className="component-px component-py flex items-center justify-center">
      <div className="">
        <div className="bg-white border-2  rounded-3xl overflow-hidden shadow">
          <div
            className="p-8"
            dangerouslySetInnerHTML={{
              __html: eligibility_criteria,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="mt-10 ml-105 xl:w-7/12 lg:w-4/5 w-11/12 mb-10">
      {/* <BreadcrumbComponent /> */}
      {/* <div className="mt-5 w-52 border-t-[3px] hr"/> */}
      {/* // 
      <p className="mt-3">My name is Thomaz Peres, I am a Software Engineer professionally since <strong>october/2020</strong>.
      Within all those years, I have developed and architected different high performance and scalable applications. I’m a <strong>full-stack developer</strong>
      with a strong focus on the back-end. I have experience with <strong>.NET Framework/Core, SQL, Docker, Kubernetes, Redis, Azure, Unit/Performance/Automation Tests
      and Scrum/Kanban</strong>. Also, used TypeScript, JavaScript, HTML, CSS, React, Angular, Tailwind and MixPanel.</p> */}
      <p className="text-xl font-semibold mt-5">Hello!</p>
      <p className="mt-3">My name is Thomaz Peres, I am a Software Engineer professionally since october/2020.</p>
      <br/>
        <p>Within all those years, I've developed and architected different high performance and scalable applications.
        I’m a <a className="underline decoration-red-500">full-stack developer</a> with focus on <a className="underline decoration-red-500">the back-end</a>. I have experience with <strong>
          .NET Framework/Core, SQL, CosmosDb, Events Architecture, Docker, Kubernetes, Redis, Azure, Unit/Performance/Automation Tests and Scrum/Kanban</strong>.
        Also, used TypeScript, JavaScript, HTML, CSS, React, Angular, Tailwind and MixPanel.</p>
    </div>
  );
}
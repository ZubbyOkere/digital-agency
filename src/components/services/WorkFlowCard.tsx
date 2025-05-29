interface WorkflowCardProps {
  title: string;
  description: string;
}

export default function WorkflowCard({
  title,
  description,
}: WorkflowCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-[#1E3A8A] mb-2">{title}</h3>
      <p className="text-[#1F2937] text-base">{description}</p>
    </div>
  );
}

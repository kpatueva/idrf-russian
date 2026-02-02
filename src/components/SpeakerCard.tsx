interface SpeakerCardProps {
  photo: string;
  name: string;
  position: string;
  company: string;
  logo?: string;
  logoSize?: string;
}

export default function SpeakerCard({ photo, name, position, company, logo, logoSize = "h-8" }: SpeakerCardProps) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 hover:border-[#FECE33] transition-all hover:shadow-xl w-80 flex-shrink-0">
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-100">
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-black text-black mb-2">{name}</h3>
        <p className="text-gray-700 text-sm font-semibold mb-3">{position}</p>
        <div className="flex items-center justify-center h-16">
          {logo ? (
            <img src={logo} alt={company} className={`${logoSize} object-contain`} />
          ) : (
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-black font-bold text-sm">{company}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

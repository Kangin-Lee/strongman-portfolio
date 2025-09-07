// 구분선 컴포넌트

export default function DividingLine({ title }) {
  return (
    <div className="flex gap-4 items-center md:max-w-[768px] mx-auto mt-12 mb-8">
      <div className="w-full h-[1px] bg-gradient-to-l from-foreground/15"></div>
      <p className="flex-shrink-0 text-xs md:text-sm text-foreground/50">
        {title}
      </p>
      <div className="w-full h-[1px] bg-gradient-to-r from-foreground/15"></div>
    </div>
  );
}

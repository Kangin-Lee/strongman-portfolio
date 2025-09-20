import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProjectModal({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로젝트 상세</DialogTitle>
          <DialogDescription>
            프로젝트에 대한 자세한 정보입니다.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

// 기술 스택 메뉴 탭 컴포넌트

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AllSkillTab from "./tabs/AllSkillTab";
import FrontSkillTab from "./tabs/FrontSkillTab";
import BackSkillTab from "./tabs/BackSkillTab";
import LibrarySkillTab from "./tabs/LibrarySkillTab";
import DesignSkillTab from "./tabs/EtcSkillTab";
import EtcSkillTab from "./tabs/EtcSkillTab";

export default function SkillStackMenuTabs() {
  return (
    <Tabs defaultValue="all" className="w-[400px]">
      <TabsList className="mb-6">
        <TabsTrigger value="all">전체</TabsTrigger>
        <TabsTrigger value="front">프론트엔드</TabsTrigger>
        <TabsTrigger value="back">백엔드</TabsTrigger>
        <TabsTrigger value="library">라이브러리</TabsTrigger>
        <TabsTrigger value="etc">기타</TabsTrigger>
      </TabsList>

      {/* 전체 탭 */}
      <TabsContent value="all">
        <AllSkillTab />
      </TabsContent>

      {/* 프론트 탭 */}
      <TabsContent value="front">
        <FrontSkillTab />
      </TabsContent>

      {/* 백엔드 탭 */}
      <TabsContent value="back">
        <BackSkillTab />
      </TabsContent>

      {/* 라이브러리 탭 */}
      <TabsContent value="library">
        <LibrarySkillTab />
      </TabsContent>

      {/* 기타 탭 */}
      <TabsContent value="etc">
        <EtcSkillTab />
      </TabsContent>
    </Tabs>
  );
}

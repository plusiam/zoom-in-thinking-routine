# 🔍 Zoom In Thinking Routine

단계적 이미지 공개를 통한 관찰력과 사고력 향상 학습 도구

[![GitHub Pages](https://img.shields.io/badge/Demo-Live-success)](https://plusiam.github.io/zoom-in-thinking-routine/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📚 소개

**Zoom In 사고루틴**은 Harvard Project Zero의 Visible Thinking Routine을 웹 기반으로 구현한 교육 도구입니다. 이미지를 단계적으로 공개하면서 학생들의 관찰력, 추론 능력, 호기심을 자극합니다.

### 주요 특징

- 🔒 **완벽한 개인정보 보호**: 서버 전송 없이 브라우저에서만 작동
- 📱 **반응형 디자인**: 모든 기기에서 사용 가능
- 💾 **결과 다운로드**: 학습 결과를 이미지로 저장
- 🎨 **직관적 UI**: 학생과 교사 모두 쉽게 사용
- ⚡ **오프라인 지원**: 인터넷 없이도 작동

## 🚀 시작하기

### 온라인으로 사용하기

1. [https://plusiam.github.io/zoom-in-thinking-routine/](https://plusiam.github.io/zoom-in-thinking-routine/) 접속
2. 이미지 선택 또는 샘플 이미지 사용
3. 4단계에 걸쳐 관찰, 추론, 질문 작성
4. 결과 이미지 다운로드

### 로컬에서 실행하기

```bash
# 저장소 클론
git clone https://github.com/plusiam/zoom-in-thinking-routine.git

# 디렉토리 이동
cd zoom-in-thinking-routine

# 로컬 서버 실행 (Python 3)
python -m http.server 8000

# 또는 Node.js 사용
npx http-server
```

브라우저에서 `http://localhost:8000` 접속

## 📖 사용 방법

### 학생용 가이드

1. **이미지 선택**
   - 자신의 이미지 업로드 또는
   - 제공된 샘플 이미지 선택

2. **단계별 활동**
   - **관찰 (See)**: 보이는 것을 구체적으로 기록
   - **추론 (Think)**: 관찰을 바탕으로 추측
   - **질문 (Wonder)**: 궁금한 점 기록

3. **결과 저장**
   - 활동 완료 후 결과 이미지 다운로드
   - 선생님께 제출

### 교사용 가이드

#### 기본 사용

1. 수업 전 이미지 준비
2. 학생들에게 링크 공유
3. 활동 진행 모니터링
4. 제출된 결과 검토 및 피드백

#### 고급 기능

**타이머 모드 활성화**
```
https://plusiam.github.io/zoom-in-thinking-routine/?timer=true
```

**교사 모드**
```
https://plusiam.github.io/zoom-in-thinking-routine/?mode=teacher
```

## 🎯 교육 목표

### 핵심 역량 개발

- **관찰력**: 세부사항 발견 및 기록
- **추론 능력**: 부분 정보로 전체 예측
- **비판적 사고**: 가설 설정과 검증
- **호기심**: 질문 생성 능력
- **표현력**: 생각을 글로 정리

### 활용 가능 교과

- 국어: 시각 자료 읽기, 묘사하기
- 과학: 관찰과 추론, 가설 설정
- 사회: 역사적 사료 분석
- 미술: 작품 감상과 비평
- 통합 교과: 주제 중심 탐구

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **디자인**: Responsive Design, Modern CSS
- **저장**: LocalStorage, Canvas API
- **배포**: GitHub Pages
- **호환성**: Chrome, Firefox, Safari, Edge

## 📁 프로젝트 구조

```
zoom-in-thinking-routine/
├── index.html          # 메인 애플리케이션
├── README.md          # 프로젝트 문서
├── LICENSE            # MIT 라이선스
└── docs/              # 추가 문서 (선택)
    ├── teacher-guide.pdf
    └── student-guide.pdf
```

## 🔄 업데이트 계획

### v1.0 (현재)
- ✅ 기본 Zoom In 기능
- ✅ 이미지 업로드/샘플 제공
- ✅ 4단계 공개 시스템
- ✅ 결과 이미지 생성
- ✅ 반응형 디자인

### v2.0 (예정)
- [ ] 다양한 공개 패턴 선택
- [ ] 음성 녹음 기능
- [ ] 협업 모드 (실시간 공유)
- [ ] 학습 분석 대시보드
- [ ] PWA 완전 지원

### v3.0 (계획)
- [ ] AI 기반 피드백
- [ ] 다국어 지원
- [ ] 교사용 관리 시스템
- [ ] 학습 포트폴리오

## 🤝 기여하기

프로젝트 개선에 참여해주세요!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 기여 가이드라인

- 코드는 명확하고 읽기 쉽게 작성
- 주석은 한국어로 작성
- 새 기능은 문서화 필수
- 모바일 호환성 테스트

## 📝 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능

## 🙏 감사의 말

- Harvard Project Zero - Visible Thinking Routine 개발
- 모든 교육자 분들의 피드백과 제안
- 오픈소스 커뮤니티

## 📧 문의

- GitHub Issues: [문제 보고 및 제안](https://github.com/plusiam/zoom-in-thinking-routine/issues)
- Email: plusiam@github.com

## 🌟 사용 예시

### 수업 활용 사례

#### 초등학교 과학
- 주제: 곤충의 생김새
- 이미지: 나비의 날개 확대 사진
- 목표: 관찰을 통한 특징 발견

#### 중학교 역사
- 주제: 조선시대 생활상
- 이미지: 풍속화 일부
- 목표: 시대상 추론과 역사적 사고

#### 고등학교 미술
- 주제: 인상주의 작품 분석
- 이미지: 모네 작품 세부
- 목표: 미술 기법과 표현 의도 파악

## 🔗 관련 자료

- [Visible Thinking](http://www.visiblethinkingpz.org/)
- [Project Zero](http://www.pz.harvard.edu/)
- [사고력 교육 자료](https://thinking.education)

---

**Made with ❤️ by plusiam**

*교육의 미래를 함께 만들어갑니다*
// Service Worker for Zoom In Thinking Routine
// Version 1.0.0

const CACHE_NAME = 'zoom-in-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/teacher-guide.html',
  '/student-guide.html'
];

// Install Event - 캐시 생성
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('캐시 열기 완료');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('캐시 추가 실패:', err);
      })
  );
  // 새 버전이 설치되면 즉시 활성화
  self.skipWaiting();
});

// Activate Event - 오래된 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('오래된 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // 즉시 클라이언트 제어
  self.clients.claim();
});

// Fetch Event - 캐시 우선 전략
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 캐시에 있으면 캐시 반환
        if (response) {
          return response;
        }
        
        // 캐시에 없으면 네트워크 요청
        return fetch(event.request)
          .then(response => {
            // 유효하지 않은 응답 확인
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // 응답 복제 (캐시와 브라우저 둘 다 사용)
            const responseToCache = response.clone();
            
            // 동적으로 캐시에 추가
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          });
      })
      .catch(() => {
        // 네트워크 실패 시 오프라인 페이지 반환
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      })
  );
});

// 백그라운드 동기화
self.addEventListener('sync', event => {
  if (event.tag === 'sync-results') {
    event.waitUntil(syncResults());
  }
});

// 푸시 알림 (선택사항)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : '새로운 활동이 준비되었습니다!',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('Zoom In 사고루틴', options)
  );
});

// 알림 클릭 처리
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('/')
  );
});

// 결과 동기화 함수 (예시)
async function syncResults() {
  // 로컬스토리지의 미전송 결과를 서버로 전송
  // 현재는 서버가 없으므로 구현하지 않음
  console.log('결과 동기화 시도');
}
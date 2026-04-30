-- 1️⃣ users_roles 테이블에 status 컬럼 추가
ALTER TABLE users_roles ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'inactive'));

-- 2️⃣ notifications 테이블 생성
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id UUID NOT NULL,
  user_id UUID NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50) DEFAULT 'pending_approval', -- pending_approval, role_changed
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (admin_id) REFERENCES users_roles(user_id),
  FOREIGN KEY (user_id) REFERENCES users_roles(user_id)
);

-- 3️⃣ 인덱스 생성 (빠른 조회)
CREATE INDEX IF NOT EXISTS idx_notifications_admin ON notifications(admin_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON notifications(is_read);

-- 4️⃣ RLS 비활성화
ALTER TABLE notifications DISABLE ROW LEVEL SECURITY;

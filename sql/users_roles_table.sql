-- users_roles 테이블 생성
CREATE TABLE IF NOT EXISTS users_roles (
  user_id UUID PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'sales' CHECK (role IN ('sales', 'management', 'admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 인덱스 생성 (빠른 조회)
CREATE INDEX IF NOT EXISTS idx_users_roles_email ON users_roles(email);
CREATE INDEX IF NOT EXISTS idx_users_roles_role ON users_roles(role);

-- Row Level Security 비활성화 (또는 정책 설정)
ALTER TABLE users_roles DISABLE ROW LEVEL SECURITY;

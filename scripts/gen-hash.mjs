import bcrypt from 'bcryptjs';

const passwords = [
  { username: 'sj-sales', password: '0515', name: '영업팀', role: 'sales' },
  { username: 'sj-coo', password: '0515', name: '관리팀', role: 'ops' },
  { username: 'sj-ceo', password: '0312', name: '대표자', role: 'ceo' },
  { username: 'master', password: 'ektmfrl0515!@', name: '마스터', role: 'ceo' },
];

for (const p of passwords) {
  const hash = await bcrypt.hash(p.password, 10);
  console.log(`('${p.username}', '${hash}', '${p.name}', '${p.role}')`);
}

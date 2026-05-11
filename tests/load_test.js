import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp-up to 20 users over 30s
    { duration: '1m', target: 20 },  // Stay at 20 users for 1m
    { duration: '10s', target: 0 },  // Ramp-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must be below 500ms
  },
};

const BASE_URL = 'http://localhost:3000/api';

export default function () {
  // 1. Test Login
  const loginRes = http.post(`${BASE_URL}/auth/login`, JSON.stringify({
    identitas: 'superadmin',
    kata_sandi: 'Admin@123',
    captcha: '12345'
  }), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(loginRes, {
    'login status is 200': (r) => r.status === 200,
  });

  // 2. Test Get Pegawai List
  const pegawaiRes = http.get(`${BASE_URL}/pegawai`, {
    headers: { 'Authorization': `Bearer ${loginRes.json().data?.token}` },
  });

  check(pegawaiRes, {
    'get pegawai status is 200': (r) => r.status === 200,
  });

  // 3. Test Dashboard Stats
  const statsRes = http.get(`${BASE_URL}/stats/dashboard`, {
    headers: { 'Authorization': `Bearer ${loginRes.json().data?.token}` },
  });

  check(statsRes, {
    'dashboard stats status is 200': (r) => r.status === 200,
  });

  sleep(1);
}

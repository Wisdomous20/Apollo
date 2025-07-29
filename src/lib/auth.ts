import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET_KEY || 'your-secret-key';
const JWT_REFRESH_SECRET = process.env.NEXT_PUBLIC_JWT_REFRESH_SECRET || 'your-refresh-secret';

export interface JWTPayload {
  userId: string;
  email: string;
  userType: 'PATIENT' | 'DOCTOR';
}

export function generateTokens(payload: JWTPayload) {
  const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, {
    expiresIn: '7d',
  });

  return { accessToken, refreshToken };
}

export function verifyAccessToken(token: string): JWTPayload | null {
  try {
    const verifiedPayload = jwt.verify(token, JWT_SECRET) as JWTPayload;
    return verifiedPayload;
  } catch (error) {
    console.error("error verifying: ", error)
    return null;
  }
}

export function verifyRefreshToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as JWTPayload;
  } catch {
    return null;
  }
}

// Helper function to get user from token
export function getUserFromToken(token: string): JWTPayload | null {
  try {
    // Remove 'Bearer ' prefix if present
    const cleanToken = token.startsWith('Bearer ') ? token.slice(7) : token;
    const verifiedToken = verifyAccessToken(cleanToken);
    return verifiedToken;
  } catch {
    return null;
  }
}

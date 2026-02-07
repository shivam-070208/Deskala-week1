enum SameSite {
    Lax = "lax",
    Strict = "strict",
    None = "none"
}
export const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as SameSite,
};

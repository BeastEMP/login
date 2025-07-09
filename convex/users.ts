import { query, mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";
import { v } from "convex/values";

export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    const user = await ctx.db.get(userId);
    return user;
  },
});

export const updateProfile = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }
    
    await ctx.db.patch(userId, {
      name: args.name,
    });
    
    return { success: true };
  },
});

export const getUserStats = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }
    
    const user = await ctx.db.get(userId);
    if (!user) {
      return null;
    }
    
    // Return some user statistics
    return {
      joinDate: user._creationTime,
      email: user.email,
      name: user.name,
      lastLogin: Date.now(), // In a real app, you'd track this
    };
  },
});

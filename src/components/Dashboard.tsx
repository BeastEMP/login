import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import { toast } from "sonner";

export function Dashboard() {
  const userStats = useQuery(api.users.getUserStats);
  const updateProfile = useMutation(api.users.updateProfile);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  if (!userStats) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    try {
      await updateProfile({ name: name.trim() });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
      setName("");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <p className="text-gray-600 mb-6">Welcome to your secure dashboard!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-900">Email</h3>
            <p className="text-blue-700">{userStats.email || "Not provided"}</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900">Name</h3>
            <p className="text-green-700">{userStats.name || "Not set"}</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-900">Member Since</h3>
            <p className="text-purple-700">
              {new Date(userStats.joinDate).toLocaleDateString()}
            </p>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-900">Last Login</h3>
            <p className="text-orange-700">
              {new Date(userStats.lastLogin).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Update Profile</h3>
          
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Edit Profile
            </button>
          ) : (
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={userStats.name || "Enter your name"}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
              
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setName("");
                  }}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4">Secured Content</h3>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900">🔒 Private Information</h4>
            <p className="text-gray-600 text-sm mt-1">
              This content is only visible to authenticated users.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900">📊 User Analytics</h4>
            <p className="text-gray-600 text-sm mt-1">
              Your personal data and statistics are protected.
            </p>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-900">⚙️ Account Settings</h4>
            <p className="text-gray-600 text-sm mt-1">
              Manage your account preferences and security settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

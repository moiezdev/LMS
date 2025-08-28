import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Change user role
export const changeUserRole = async (req, res) => {
  const { id } = req.params;          // get id from URL param
  const { newRole } = req.body;

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = newRole;
    await user.save();

    res.status(200).json({ message: 'User role updated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role', error });
  }
};

// Deactivate user
export const deactivateUser = async (req, res) => {
  const { id } = req.params;         // get id from URL param

  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.active = false;
    await user.save();

    res.status(200).json({ message: 'User deactivated', user });
  } catch (error) {
    res.status(500).json({ message: 'Error deactivating user', error });
  }
};

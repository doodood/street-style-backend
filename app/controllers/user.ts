const UserController = exports;

UserController.getAll = (req,res) => {
    return res.status(200).json({ message: 'Hello World !'});
}
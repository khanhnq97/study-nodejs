import express, { json } from 'express';
const app = express();
const PORT = 3001;

// Middleware để phân tích cú pháp JSON
app.use(json());

// Một mảng đơn giản để lưu trữ dữ liệu sách
let books = [
    { id: 1, title: '1984', author: 'George Orwell' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

// GET /books - Lấy danh sách sách
app.get('/books', (req, res) => {
    res.json(books);
});

// GET /books/:id - Lấy thông tin chi tiết của một cuốn sách
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// POST /books - Thêm một cuốn sách mới
app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = {
        id: books.length + 1, // Tạo ID mới đơn giản
        title,
        author,
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

// PUT /books/:id - Cập nhật thông tin một cuốn sách
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === bookId);

    if (book) {
        const { title, author } = req.body;
        book.title = title || book.title;
        book.author = author || book.author;
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

// DELETE /books/:id - Xóa một cuốn sách
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id, 10);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.status(204).send(); // Thành công, nhưng không có nội dung để trả về
    } else {
        res.status(404).send('Book not found');
    }
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
layui.use(['element', 'form', 'table', 'layer'], function () {
    let element = layui.element,
        form = layui.form,
        table = layui.table,
        layer = layui.layer;
    table.render({
        elem: '#bookList',
        cols: [[
            {type: 'checkbox'},
            {filed: 'ISBN', title: 'ISBN', sort: true},
            {field: 'title', title: "书名", sort: true},
            {field: 'author', title: '作者'},
            {field: 'publishing_house', title: '出版社'},
            {field: 'publishing_time', title: '出版时间'},
            {field: 'upper_time', title: '上架时间'},
            {title: '操作', toolbar: '#toolbar', align: 'center'}
        ]],
        page: true,
        data: json.data,
        id: 'bookTable'
    });
    table.on('tool(bookList)', function (obj) {

    });
});
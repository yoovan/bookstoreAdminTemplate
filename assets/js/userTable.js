layui.use(['element', 'table', 'layer', 'form'], function () {
    let element = layui.element;
    let table = layui.table;
    let layer = layui.layer;
    let $ = layui.jquery;
    let form = layui.form;
    table.render({
        elem: '#userList',
        // url: 'https://www.layui.com/demo/table/user/',
        page: true,
        // height: 550,
        id: 'tableList',
        cols: [[
            {type: 'checkbox', fixed: 'left'}
            , {field: 'id', title: 'ID', sort: true, fixed: 'left'}
            , {field: 'username', title: '用户名', sort: true}
            , {field: 'sex', title: '性别', sort: true}
            , {field: 'phone', title: '手机号码'}
            , {field: 'created_at', title: '注册时间',sort: true}
            , {title: '操作', fixed: 'right', align: 'center', toolbar: '#toolbar'}
        ]],
        data: json.data
    });
    table.on('tool(test)', function (obj) { //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的DOM对象

        if (layEvent === 'view') { //查看
            console.log("data: " + data.toString());
            layer.open({
                type: 1,
                title: '编辑',
                content: $('#testDemo'),
                area: ['900px', '500px']
            });
            form.val("editForm", {
                username: data.username,
                phone: data.phone
            });
            $("input[name=sex][value='男']").attr("checked", data.sex == "男" ? true : false);
            $("input[name=sex][value='女']").attr("checked", data.sex == "女" ? true : false);
            form.render("radio");
        } else if (layEvent === 'delete') { //删除
            layer.confirm('真的删除行么', function (index) {
                obj.del();
                layer.close(index);
            });
        } else if (layEvent === 'edit') { //编辑
            console.log("data: " + data.username);
            layer.open({
                type: 1,
                title: '编辑',
                content: $('#testDemo'),
                area: ['900px', '500px']
            });
        }
    });x``
});

/**
 * Created by Arterli on 2016/10/10.
 */
$(function () {
    //载入编辑器
    var editor = new wangEditor('detail');
    editor.create();
    //tags
    $('#keywords').tagsInput({
        width:'auto',
        height:'43px',
        defaultText:'add a tag',
    });
    //下啦组件改造
    var question_select = $(".question_select");
     var ul = $(".question_select .dropdown-menu")
    var li = $(".question_select .dropdown-menu>li");
    $(document).on("click",".question_select .dropdown-menu>li",function () {
        var v = $(this).attr("data-value");
        var n = $(this).text();
        $(this).parent().prev("button").find("span.name").text(n);
        $(this).parent().prev("button").prev("input").val(v);
        var isajax = $(this).parents().is("#group");
        //alert(isajax);
        //alert(v)
        if(!isajax){
            $.ajax({
                url:"/mod/question/ajax/getgroups/cid/"+v,
                success:function (res) {
                    if(res){
                        $("#group").removeClass("hide");
                    }else {
                        $("#group").addClass("hide");
                        $("#group").find("input").val(0)
                    }
                }
            })
        }

    })
});
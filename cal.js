function clr()
{
    document.getElementbyid("result").value = ""
}
function addtext(event)
{
    if(event.key == '0'|| event.key == '1'|| 
        event.key == '2'|| event.key == '3'|| 
        event.key == '4'|| event.key == '5'|| 
        event.key == '6'|| event.key == '7'|| 
        event.key == '8'|| event.key == '9'|| 
        event.key == '+'|| event.key == '-'|| 
        event.key == '*'|| event.key == '/')
        {
            document.getElementbyid("result").value += event.key  
        }
}
function clr()
{    document.getElementById("result").value = " ";  }
function addtext(val)
{
    if (val == '0'|| val == '1'||
        val == '2'|| val == '3'||
        val == '4'|| val == '5'||
        val == '6'|| val == '7'||
        val == '8'|| val == '9'||
        val == '+'|| val == '-'||
        val == '*'|| val == '/')
    {
        document.getElementById("result").value += val
    }
}
function solve()
{
    let x = document.getElementById("result").value ;
    prompt(math.evaluate(x));
    let y = math.evaluate(x);
    document.getElementById("result").value = y;
}
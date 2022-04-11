namespace shop.ViewModels
{
    public class ResultModel
    {
        public int status { get; set; }
        public object Response { get; set; }
        public string Message { get; set; }

        public static ResultModel ResultOK()
        {
            return new ResultModel() { status = 1, Message = "Успешно выполнено" };
        }
        public static ResultModel ResultOK(object response)
        {
            return new ResultModel() { status = 1, Message = "Успешно выполнено", Response = response };
        }
        public static ResultModel ResultError(string message = "Ошибка")
        {
            return new ResultModel() { status = 0, Message = message };
        }
    }
}

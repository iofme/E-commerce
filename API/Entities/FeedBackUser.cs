using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class FeedBackUser
{
    public int Id { get; set; }
    public double? Star { get; set; }
    public string? FeedBack { get; set; }
    public string? UserName { get; set; }
    public DateTime Created { get; set; } = DateTime.UtcNow;
}

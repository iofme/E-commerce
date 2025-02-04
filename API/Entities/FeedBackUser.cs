using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class FeedBackUser
{
    public int Id { get; set; }
    public int Star { get; set; }
    public string? FeedBack { get; set; }
}

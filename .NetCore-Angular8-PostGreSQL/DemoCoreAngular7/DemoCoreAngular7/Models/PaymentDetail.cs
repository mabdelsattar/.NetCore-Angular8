using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DemoCoreAngular7.Models
{
    public class PaymentDetail
    {
        [Key]
        public int PMId { get; set; }
        [Required]
        public string CardOwnerName { get; set; }
        [Required]
        public string CardNumber { get; set; }
        [Required]
        public string ExpirationDate { get; set; }
        [Required]
        public string CVVNumber { get; set; }
    }
}

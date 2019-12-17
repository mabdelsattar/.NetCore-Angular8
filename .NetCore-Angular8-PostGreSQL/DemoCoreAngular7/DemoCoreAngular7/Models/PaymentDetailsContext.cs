using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DemoCoreAngular7.Models
{
    public class PaymentDetailsContext:DbContext
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext> options):base(options)
        { 
        
        }
        public DbSet<PaymentDetail> PaymentDetails { get; set; } 
    }
}

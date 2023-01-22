using Microsoft.EntityFrameworkCore;
namespace PantryApplication_BE.Services.FriendService
{
    public class FriendService : IFriendService
    {
        private readonly DataContext context;

        public FriendService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<FriendListItemDTO>> GetFriendsByUserID(int id)
        {
            var friendQuery = await (from u in this.context.Users
                                         join uf in this.context.FriendUsers on u.Id equals uf.UserId
                                         join f in this.context.Friends on uf.FriendId equals f.Id
                                         where u.Id == id
                                         select new FriendListItemDTO
                                         {
                                             FriendName = u.FirstName,
                                         }).ToListAsync();


            return friendQuery;
        }
    }
}


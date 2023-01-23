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
                                             FriendName = f.FriendName,
                                             FriendId = f.FriendId,
                                             IsFriend = f.IsFriend,
                                         }).ToListAsync();


            return friendQuery;
        }

        public async Task<List<FriendListItemDTO>> AddFriend(AddFriendDTO request)
        {
            var fromFriend = await this.context.Users
            .Where(c => c.FirstName == request.FromFriendName)
            .FirstOrDefaultAsync();

            var toFriend = await this.context.Users
                .Where(c => c.FirstName == request.ToFriendName)
                .FirstOrDefaultAsync();

            Friend newFriend = new Friend
            {
                FriendName = toFriend.FirstName,
                UserId = fromFriend.Id,
                FriendId = toFriend.Id,
                IsFriend = true
            };

            this.context.Friends.Add(newFriend);
            await this.context.SaveChangesAsync();

            await AddToFriendInviteTable(newFriend.Id, fromFriend.Id);

            return await GetFriendsByUserID(fromFriend.Id);

        }

        public async Task<FriendUser> AddToFriendInviteTable(int friendId, int userId)
        {
            FriendUser newFriendUser = new FriendUser
            {
                FriendId = friendId,
                UserId = userId
            };

            this.context.FriendUsers.Add(newFriendUser);
            await this.context.SaveChangesAsync();

            return newFriendUser;

        }
    }
}


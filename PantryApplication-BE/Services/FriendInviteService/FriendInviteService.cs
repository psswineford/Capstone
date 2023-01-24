using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace PantryApplication_BE.Services.FriendInviteService
{
    public class FriendInviteService : IFriendInviteService
    {
        private readonly DataContext context;

        public FriendInviteService(DataContext context)
        {
            this.context = context;
        }

        public async Task<List<FriendInviteDTO>> GetFriendInvites(int id)
        {
            /*return await this.context.FriendInvites.Where(c => c.ToUserId == id).ToListAsync(); */

            var inviteQuery = await (from f in this.context.FriendInvites
                                     join u in this.context.Users on f.FromFriendId equals u.Id
                                     where f.ToUserId == id
                                     select new FriendInviteDTO
                                     {
                                         InviteID = f.Id,
                                         FromFriendId = f.FromFriendId,
                                         FromFriendName = u.FirstName,
                                         ToUserId = f.ToUserId,
                                         SentInvite = f.SentInvite
                                     }).ToListAsync();
            return inviteQuery;
        }

        public async Task<List<FriendInviteDTO>> AddFriendRequest(AddFriendDTO request)
        {
            var fromFriend = await this.context.Users
                .Where(c => c.FirstName == request.FromFriendName)
                .FirstOrDefaultAsync();

            var toFriend = await this.context.Users
                .Where(c => c.FirstName == request.ToFriendName)
                .FirstOrDefaultAsync();

            FriendInvite friendInvite = new FriendInvite
            {
                FromFriendId = fromFriend.Id,
                ToUserId = toFriend.Id,
                SentInvite = true
            };

            this.context.FriendInvites.Add(friendInvite);
            await this.context.SaveChangesAsync();

            return await GetFriendInvites(fromFriend.Id);
        }

        public async Task<List<FriendInviteDTO>> DeleteFriendRequest(int userId)
        {
            var toDelete = await this.context.FriendInvites
                .Where(c => c.ToUserId == userId)
                .FirstOrDefaultAsync();

            this.context.FriendInvites.Remove(toDelete);
            await this.context.SaveChangesAsync();

            return await GetFriendInvites(userId);
        }
    }
}

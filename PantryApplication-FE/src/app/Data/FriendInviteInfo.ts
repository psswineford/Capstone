export class FriendInviteInfo {
    constructor(

      public inviteId: number,
      public fromFriendId: number,
      public fromFriendName: string,
      public toUserId: number,
      public sentInvite: true,
         
    ){}
}


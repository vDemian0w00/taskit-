use anchor_lang::prelude::*;

pub mod constant;
pub mod states;

use crate::{ constant::*, states::* };

declare_id!("HGYXkDLGBVuy2v4EyxV6k6E7SkN2Wp54sk8QriM94sAF");

#[program]
pub mod taskit {
    use super::*;

    pub fn init_user(
        ctx: Context<InitUser>,
        name: String,
        email: String,
        password: String
    ) -> Result<()> {
        let user_account = &mut ctx.accounts.user_account;
        let authority = &mut ctx.accounts.authority;

        user_account.name = name;
        user_account.email = email;
    }
}

#[derive(Accounts)]
#[instruction()]
pub struct InitUser<'info> {
    #[account(
        init,
        seeds = [USER_SEED, authority.key().as_ref()],
        bump,
        payer = authority,
        space = 2312 + 8
    )]
    pub user_account: Account<'info, UserAccount>,

    #[account(mut)]
    pub authority: Signer<'info>,

    pub system_program: Program<'info, System>,
}
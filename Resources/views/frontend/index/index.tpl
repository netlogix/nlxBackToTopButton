{extends file="parent:frontend/index/index.tpl"}

{* Footer *}
{block name="frontend_index_footer"}
    <div class="icon-box" id="button--back-to-top">
        <i class="icon icon--arrow-up"></i>
    </div>
    {$smarty.block.parent}
{/block}
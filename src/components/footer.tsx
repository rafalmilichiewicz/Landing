function getCopyrightYear(startYear: number): string {
    const currentYear = new Date().getFullYear();
    return startYear === currentYear ? `${currentYear}` : `${startYear}–${currentYear}`;
}

export function Footer() {
    return (
        <footer class="footer sm:footer-horizontal footer-center bg- text-base-content p-8">
            <aside>
                <p>Copyright © {getCopyrightYear(2025)}<br/>Rafał Milichiewicz</p>
            </aside>
        </footer>
    );
}

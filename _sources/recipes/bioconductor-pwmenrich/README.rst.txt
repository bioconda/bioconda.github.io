:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pwmenrich'
.. highlight: bash

bioconductor-pwmenrich
======================

.. conda:recipe:: bioconductor-pwmenrich
   :replaces_section_title:
   :noindex:

   PWM enrichment analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PWMEnrich.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-pwmenrich <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pwmenrich/meta.yaml>`_
   :links: biotools: :biotools:`pwmenrich`, doi: :doi:`10.1038/nmeth.3252`

   A toolkit of high\-level functions for DNA motif scanning and enrichment analysis built upon Biostrings. The main functionality is PWM enrichment analysis of already known PWMs \(e.g. from databases such as MotifDb\)\, but the package also implements high\-level functions for PWM scanning and visualisation. The package does not perform \"de novo\" motif discovery\, but is instead focused on using motifs that are either experimentally derived or computationally constructed by other tools.


.. conda:package:: bioconductor-pwmenrich

   |downloads_bioconductor-pwmenrich| |docker_bioconductor-pwmenrich|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.36.0-0</code>,  <code>4.34.0-0</code>,  <code>4.30.0-0</code>,  <code>4.28.1-0</code>,  <code>4.26.0-1</code>,  <code>4.26.0-0</code>,  <code>4.23.0-0</code>,  <code>4.22.0-0</code>,  <code>4.20.0-1</code>,  </span></summary>
      

      ``4.36.0-0``,  ``4.34.0-0``,  ``4.30.0-0``,  ``4.28.1-0``,  ``4.26.0-1``,  ``4.26.0-0``,  ``4.23.0-0``,  ``4.22.0-0``,  ``4.20.0-1``,  ``4.18.0-0``,  ``4.16.0-0``,  ``4.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-seqlogo: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-evd: 
   :depends r-gdata: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pwmenrich

   and update with::

      conda update bioconductor-pwmenrich

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pwmenrich:<tag>

   (see `bioconductor-pwmenrich/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pwmenrich| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pwmenrich.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pwmenrich
   :alt:   (downloads)
.. |docker_bioconductor-pwmenrich| image:: https://quay.io/repository/biocontainers/bioconductor-pwmenrich/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pwmenrich
.. _`bioconductor-pwmenrich/tags`: https://quay.io/repository/biocontainers/bioconductor-pwmenrich?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pwmenrich";
        var versions = ["4.36.0","4.34.0","4.30.0","4.28.1","4.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pwmenrich/README.html
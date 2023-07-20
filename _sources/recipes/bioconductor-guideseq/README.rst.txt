:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guideseq'
.. highlight: bash

bioconductor-guideseq
=====================

.. conda:recipe:: bioconductor-guideseq
   :replaces_section_title:
   :noindex:

   GUIDE\-seq and PEtag\-seq analysis pipeline

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GUIDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-guideseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq/meta.yaml>`_
   :links: biotools: :biotools:`guideseq`, doi: :doi:`10.1186/s12864-017-3746-y`

   The package implements GUIDE\-seq and PEtag\-seq analysis workflow including functions for filtering UMI and reads with low coverage\, obtaining unique insertion sites \(proxy of cleavage sites\)\, estimating the locations of the insertion sites\, aka\, peaks\, merging estimated insertion sites from plus and minus strand\, and performing off target search of the extended regions around insertion sites with mismatches and indels.


.. conda:package:: bioconductor-guideseq

   |downloads_bioconductor-guideseq| |docker_bioconductor-guideseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-chippeakanno: ``>=3.34.0,<3.35.0``
   :depends bioconductor-crisprseek: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-multtest: ``>=2.56.0,<2.57.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hash: 
   :depends r-matrixstats: 
   :depends r-openxlsx: 
   :depends r-patchwork: 
   :depends r-purrr: 
   :depends r-rio: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-guideseq

   and update with::

      conda update bioconductor-guideseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-guideseq:<tag>

   (see `bioconductor-guideseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-guideseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guideseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-guideseq
   :alt:   (downloads)
.. |docker_bioconductor-guideseq| image:: https://quay.io/repository/biocontainers/bioconductor-guideseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guideseq
.. _`bioconductor-guideseq/tags`: https://quay.io/repository/biocontainers/bioconductor-guideseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-guideseq";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guideseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guideseq/README.html
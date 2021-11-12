:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mungesumstats'
.. highlight: bash

bioconductor-mungesumstats
==========================

.. conda:recipe:: bioconductor-mungesumstats
   :replaces_section_title:
   :noindex:

   Standardise summary statistics from GWAS

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/MungeSumstats.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mungesumstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mungesumstats/meta.yaml>`_

   The \*MungeSumstats\* package is designed to facilitate the standardisation of GWAS summary statistics. It reformats inputted summary statisitics to include SNP\, CHR\, BP and can look up these values if any are missing. It also removes duplicates across SNPs.


.. conda:package:: bioconductor-mungesumstats

   |downloads_bioconductor-mungesumstats| |docker_bioconductor-mungesumstats|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-googleauthr: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mungesumstats

   and update with::

      conda update bioconductor-mungesumstats

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mungesumstats:<tag>

   (see `bioconductor-mungesumstats/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mungesumstats| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mungesumstats.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mungesumstats
   :alt:   (downloads)
.. |docker_bioconductor-mungesumstats| image:: https://quay.io/repository/biocontainers/bioconductor-mungesumstats/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mungesumstats
.. _`bioconductor-mungesumstats/tags`: https://quay.io/repository/biocontainers/bioconductor-mungesumstats?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mungesumstats";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mungesumstats/README.html
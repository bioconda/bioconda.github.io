:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tfea.chip'
.. highlight: bash

bioconductor-tfea.chip
======================

.. conda:recipe:: bioconductor-tfea.chip
   :replaces_section_title:

   Analyze Transcription Factor Enrichment

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TFEA.ChIP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-tfea.chip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tfea.chip/meta.yaml>`_

   Package to analize transcription factor enrichment in a gene set using data from ChIP\-Seq experiments.


.. conda:package:: bioconductor-tfea.chip

   |downloads_bioconductor-tfea.chip| |docker_bioconductor-tfea.chip|

   :versions: 1.8.0-0, 1.6.0-0, 1.4.2-0, 1.2.1-0
   
   :depends bioconductor-biomart: >=2.44.0,<2.45.0
   :depends bioconductor-genomicfeatures: >=1.40.0,<1.41.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-org.hs.eg.db: >=3.11.0,<3.12.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-dplyr: 
   :depends r-r.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tfea.chip

   and update with::

      conda update bioconductor-tfea.chip

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tfea.chip:<tag>

   (see `bioconductor-tfea.chip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tfea.chip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tfea.chip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tfea.chip
   :alt:   (downloads)
.. |docker_bioconductor-tfea.chip| image:: https://quay.io/repository/biocontainers/bioconductor-tfea.chip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tfea.chip
.. _`bioconductor-tfea.chip/tags`: https://quay.io/repository/biocontainers/bioconductor-tfea.chip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tfea.chip/README.html
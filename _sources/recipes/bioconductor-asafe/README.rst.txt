:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-asafe'
.. highlight: bash

bioconductor-asafe
==================

.. conda:recipe:: bioconductor-asafe
   :replaces_section_title:

   Ancestry Specific Allele Frequency Estimation

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/ASAFE.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-asafe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asafe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-asafe/meta.yaml>`_
   :links: biotools: :biotools:`asafe`, doi: :doi:`10.1093/bioinformatics/btw220`

   Given admixed individuals\' bi\-allelic SNP genotypes and ancestry pairs \(where each ancestry can take one of three values\) for multiple SNPs\, perform an EM algorithm to deal with the fact that SNP genotypes are unphased with respect to ancestry pairs\, in order to estimate ancestry\-specific allele frequencies for all SNPs.


.. conda:package:: bioconductor-asafe

   |downloads_bioconductor-asafe| |docker_bioconductor-asafe|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.10.0-0, 1.8.0-0, 1.6.0-0, 1.4.0-0, 1.2.0-0
   
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-asafe

   and update with::

      conda update bioconductor-asafe

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-asafe:<tag>

   (see `bioconductor-asafe/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-asafe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-asafe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-asafe
   :alt:   (downloads)
.. |docker_bioconductor-asafe| image:: https://quay.io/repository/biocontainers/bioconductor-asafe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-asafe
.. _`bioconductor-asafe/tags`: https://quay.io/repository/biocontainers/bioconductor-asafe?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-asafe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-asafe/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-repitools'
.. highlight: bash

bioconductor-repitools
======================

.. conda:recipe:: bioconductor-repitools
   :replaces_section_title:

   Tools for the analysis of enrichment\-based epigenomic data.  Features include summarization and visualization of epigenomic data across promoters according to gene expression context\, finding regions of differential methylation\/binding\, BayMeth for quantifying methylation etc.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/Repitools.html
   :license: LGPL (>= 2)
   :recipe: /`bioconductor-repitools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-repitools/meta.yaml>`_
   :links: biotools: :biotools:`repitools`

   


.. conda:package:: bioconductor-repitools

   |downloads_bioconductor-repitools| |docker_bioconductor-repitools|

   :versions: 1.32.0-0, 1.30.0-1, 1.28.0-0, 1.26.0-0, 1.24.0-0, 1.22.0-0, 1.20.0-0
   
   :depends bioconductor-biocgenerics: >=0.32.0,<0.33.0
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-bsgenome: >=1.54.0,<1.55.0
   :depends bioconductor-dnacopy: >=1.60.0,<1.61.0
   :depends bioconductor-edger: >=3.28.0,<3.29.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicalignments: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-ringo: >=1.50.0,<1.51.0
   :depends bioconductor-rsamtools: >=2.2.0,<2.3.0
   :depends bioconductor-rtracklayer: >=1.46.0,<1.47.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends r-aroma.affymetrix: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-cluster: 
   :depends r-gplots: 
   :depends r-gsmoothr: 
   :depends r-mass: 
   :depends r-rsolnp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-repitools

   and update with::

      conda update bioconductor-repitools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-repitools:<tag>

   (see `bioconductor-repitools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-repitools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-repitools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-repitools
   :alt:   (downloads)
.. |docker_bioconductor-repitools| image:: https://quay.io/repository/biocontainers/bioconductor-repitools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-repitools
.. _`bioconductor-repitools/tags`: https://quay.io/repository/biocontainers/bioconductor-repitools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-repitools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-repitools/README.html
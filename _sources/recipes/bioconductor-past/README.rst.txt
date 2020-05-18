:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-past'
.. highlight: bash

bioconductor-past
=================

.. conda:recipe:: bioconductor-past
   :replaces_section_title:

   Pathway Association Study Tool \(PAST\)

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/PAST.html
   :license: GPL (>=3) + file LICENSE
   :recipe: /`bioconductor-past <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-past>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-past/meta.yaml>`_

   PAST takes GWAS output and assigns SNPs to genes\, uses those genes to find pathways associated with the genes\, and plots pathways based on significance. Implements methods for reading GWAS input data\, finding genes associated with SNPs\, calculating enrichment score and significance of pathways\, and plotting pathways.


.. conda:package:: bioconductor-past

   |downloads_bioconductor-past| |docker_bioconductor-past|

   :versions: 1.4.1-0, 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends bioconductor-rtracklayer: >=1.48.0,<1.49.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-iterators: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-past

   and update with::

      conda update bioconductor-past

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-past:<tag>

   (see `bioconductor-past/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-past| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-past.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-past
   :alt:   (downloads)
.. |docker_bioconductor-past| image:: https://quay.io/repository/biocontainers/bioconductor-past/status
   :target: https://quay.io/repository/biocontainers/bioconductor-past
.. _`bioconductor-past/tags`: https://quay.io/repository/biocontainers/bioconductor-past?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-past/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-past/README.html
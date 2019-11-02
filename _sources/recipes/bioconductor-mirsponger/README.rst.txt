:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirsponger'
.. highlight: bash

bioconductor-mirsponger
=======================

.. conda:recipe:: bioconductor-mirsponger
   :replaces_section_title:

   This package provides several functions to study miRNA sponge \(also called ceRNA or miRNA decoy\)\, including popular methods for identifying miRNA sponge interactions\, and the integrative method to integrate miRNA sponge interactions from different methods\, as well as the functions to validate miRNA sponge interactions\, and infer miRNA sponge modules\, conduct enrichment analysis of modules\, and conduct survival analysis of modules.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/miRspongeR.html
   :license: GPL-3
   :recipe: /`bioconductor-mirsponger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirsponger/meta.yaml>`_

   


.. conda:package:: bioconductor-mirsponger

   |downloads_bioconductor-mirsponger| |docker_bioconductor-mirsponger|

   :versions: 1.12.0-0, 1.10.1-0
   
   :depends bioconductor-clusterprofiler: >=3.14.0,<3.15.0
   :depends bioconductor-dose: >=3.12.0,<3.13.0
   :depends bioconductor-org.hs.eg.db: >=3.10.0,<3.11.0
   :depends bioconductor-reactomepa: >=1.30.0,<1.31.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-corpcor: 
   :depends r-igraph: 
   :depends r-linkcomm: 
   :depends r-mcl: 
   :depends r-rcpp: 
   :depends r-survival: 
   :depends r-varhandle: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirsponger

   and update with::

      conda update bioconductor-mirsponger

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirsponger:<tag>

   (see `bioconductor-mirsponger/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirsponger| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirsponger.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirsponger
   :alt:   (downloads)
.. |docker_bioconductor-mirsponger| image:: https://quay.io/repository/biocontainers/bioconductor-mirsponger/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirsponger
.. _`bioconductor-mirsponger/tags`: https://quay.io/repository/biocontainers/bioconductor-mirsponger?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirsponger/README.html
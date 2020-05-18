:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-setools'
.. highlight: bash

bioconductor-setools
====================

.. conda:recipe:: bioconductor-setools
   :replaces_section_title:

   SEtools\: tools for working with SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/SEtools.html
   :license: GPL
   :recipe: /`bioconductor-setools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-setools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-setools/meta.yaml>`_

   This includes a set of tools for working with the SummarizedExperiment class\, including merging\, melting\, aggregation and plotting functions.


.. conda:package:: bioconductor-setools

   |downloads_bioconductor-setools| |docker_bioconductor-setools|

   :versions: 1.2.0-0, 1.0.0-0
   
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-complexheatmap: >=2.4.0,<2.5.0
   :depends bioconductor-edger: >=3.30.0,<3.31.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends bioconductor-summarizedexperiment: >=1.18.0,<1.19.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-circlize: 
   :depends r-data.table: 
   :depends r-openxlsx: 
   :depends r-pheatmap: 
   :depends r-randomcolor: 
   :depends r-seriation: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-setools

   and update with::

      conda update bioconductor-setools

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-setools:<tag>

   (see `bioconductor-setools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-setools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-setools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-setools
   :alt:   (downloads)
.. |docker_bioconductor-setools| image:: https://quay.io/repository/biocontainers/bioconductor-setools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-setools
.. _`bioconductor-setools/tags`: https://quay.io/repository/biocontainers/bioconductor-setools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-setools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-setools/README.html
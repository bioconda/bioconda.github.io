:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scarray'
.. highlight: bash

bioconductor-scarray
====================

.. conda:recipe:: bioconductor-scarray
   :replaces_section_title:
   :noindex:

   Large\-scale single\-cell RNA\-seq data manipulation with GDS files

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SCArray.html
   :license: GPL-3
   :recipe: /`bioconductor-scarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scarray/meta.yaml>`_

   Provides large\-scale single\-cell RNA\-seq data manipulation using Genomic Data Structure \(GDS\) files. It combines dense and sparse matrices stored in GDS files and the Bioconductor infrastructure framework \(SingleCellExperiment and DelayedArray\) to provide out\-of\-memory data storage and large\-scale manipulation using the R programming language.


.. conda:package:: bioconductor-scarray

   |downloads_bioconductor-scarray| |docker_bioconductor-scarray|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-gdsfmt: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scarray

   and update with::

      conda update bioconductor-scarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scarray:<tag>

   (see `bioconductor-scarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scarray
   :alt:   (downloads)
.. |docker_bioconductor-scarray| image:: https://quay.io/repository/biocontainers/bioconductor-scarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scarray
.. _`bioconductor-scarray/tags`: https://quay.io/repository/biocontainers/bioconductor-scarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scarray/README.html
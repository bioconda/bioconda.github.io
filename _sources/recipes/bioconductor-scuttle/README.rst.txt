:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scuttle'
.. highlight: bash

bioconductor-scuttle
====================

.. conda:recipe:: bioconductor-scuttle
   :replaces_section_title:
   :noindex:

   Single\-Cell RNA\-Seq Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/scuttle.html
   :license: GPL-3
   :recipe: /`bioconductor-scuttle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scuttle/meta.yaml>`_

   Provides basic utility functions for performing single\-cell analyses\, focusing on simple normalization\, quality control and data transformations. Also provides some helper functions to assist development of other packages.


.. conda:package:: bioconductor-scuttle

   |downloads_bioconductor-scuttle| |docker_bioconductor-scuttle|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.4-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-beachmat: ``>=2.8.0,<2.9.0``
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-delayedarray: ``>=0.18.0,<0.19.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.14.0,<1.15.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-matrix: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scuttle

   and update with::

      conda update bioconductor-scuttle

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scuttle:<tag>

   (see `bioconductor-scuttle/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scuttle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scuttle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scuttle
   :alt:   (downloads)
.. |docker_bioconductor-scuttle| image:: https://quay.io/repository/biocontainers/bioconductor-scuttle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scuttle
.. _`bioconductor-scuttle/tags`: https://quay.io/repository/biocontainers/bioconductor-scuttle?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scuttle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scuttle/README.html
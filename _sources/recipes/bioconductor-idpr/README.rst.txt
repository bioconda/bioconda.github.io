:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idpr'
.. highlight: bash

bioconductor-idpr
=================

.. conda:recipe:: bioconductor-idpr
   :replaces_section_title:
   :noindex:

   Profiling and Analyzing Intrinsically Disordered Proteins in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/idpr.html
   :license: LGPL-3
   :recipe: /`bioconductor-idpr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idpr/meta.yaml>`_

   ‘idpr’ aims to integrate tools for the computational analysis of intrinsically disordered proteins \(IDPs\) within R. This package is used to identify known characteristics of IDPs for a sequence of interest with easily reported and dynamic results. Additionally\, this package includes tools for IDP\-based sequence analysis to be used in conjunction with other R packages.


.. conda:package:: bioconductor-idpr

   |downloads_bioconductor-idpr| |docker_bioconductor-idpr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.007-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=0.8.5``
   :depends r-ggplot2: ``>=3.3.0``
   :depends r-jsonlite: ``>=1.6.1``
   :depends r-magrittr: ``>=1.5``
   :depends r-plyr: ``>=1.8.6``
   :depends r-rlang: ``>=0.4.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-idpr

   and update with::

      conda update bioconductor-idpr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idpr:<tag>

   (see `bioconductor-idpr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idpr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idpr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idpr
   :alt:   (downloads)
.. |docker_bioconductor-idpr| image:: https://quay.io/repository/biocontainers/bioconductor-idpr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idpr
.. _`bioconductor-idpr/tags`: https://quay.io/repository/biocontainers/bioconductor-idpr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idpr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idpr/README.html
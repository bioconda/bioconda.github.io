:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringdiff'
.. highlight: bash

bioconductor-nanostringdiff
===========================

.. conda:recipe:: bioconductor-nanostringdiff
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis of NanoString nCounter Data

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/NanoStringDiff.html
   :license: GPL
   :recipe: /`bioconductor-nanostringdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff/meta.yaml>`_

   This Package utilizes a generalized linear model\(GLM\) of the negative binomial family to characterize count data and allows for multi\-factor design. NanoStrongDiff incorporate size factors\, calculated from positive controls and housekeeping controls\, and background level\, obtained from negative controls\, in the model framework so that all the normalization information provided by NanoString nCounter Analyzer is fully utilized.


.. conda:package:: bioconductor-nanostringdiff

   |downloads_bioconductor-nanostringdiff| |docker_bioconductor-nanostringdiff|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends liblapack: ``>=3.8.0,<3.9.0a0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-matrixstats: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nanostringdiff

   and update with::

      conda update bioconductor-nanostringdiff

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanostringdiff:<tag>

   (see `bioconductor-nanostringdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanostringdiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringdiff
   :alt:   (downloads)
.. |docker_bioconductor-nanostringdiff| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff
.. _`bioconductor-nanostringdiff/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html
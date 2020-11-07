:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scp'
.. highlight: bash

bioconductor-scp
================

.. conda:recipe:: bioconductor-scp
   :replaces_section_title:
   :noindex:

   Mass Spectrometry\-Based Single\-Cell Proteomics Data Analysis

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/scp.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scp/meta.yaml>`_

   Utility functions for manipulating\, processing\, and analyzing mass spectrometry\-based single\-cell proteomics \(SCP\) data. The package is an extension to the \'QFeatures\' package designed for SCP applications.


.. conda:package:: bioconductor-scp

   |downloads_bioconductor-scp| |docker_bioconductor-scp|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-qfeatures: ``>=1.0.0,<1.1.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-singlecellexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scp

   and update with::

      conda update bioconductor-scp

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scp:<tag>

   (see `bioconductor-scp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scp
   :alt:   (downloads)
.. |docker_bioconductor-scp| image:: https://quay.io/repository/biocontainers/bioconductor-scp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scp
.. _`bioconductor-scp/tags`: https://quay.io/repository/biocontainers/bioconductor-scp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scp/README.html
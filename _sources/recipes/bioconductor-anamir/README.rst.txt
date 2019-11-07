:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anamir'
.. highlight: bash

bioconductor-anamir
===================

.. conda:recipe:: bioconductor-anamir
   :replaces_section_title:

   An integrated analysis package of miRNA and mRNA expression data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/anamiR.html
   :license: GPL-2
   :recipe: /`bioconductor-anamir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anamir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anamir/meta.yaml>`_

   This package is intended to identify potential interactions of miRNA\-target gene interactions from miRNA and mRNA expression data. It contains functions for statistical test\, databases of miRNA\-target gene interaction and functional analysis.


.. conda:package:: bioconductor-anamir

   |downloads_bioconductor-anamir| |docker_bioconductor-anamir|

   :versions: 1.13.0-0, 1.10.0-0
   
   :depends bioconductor-deseq2: >=1.26.0,<1.27.0
   :depends bioconductor-gage: >=2.36.0,<2.37.0
   :depends bioconductor-limma: >=3.42.0,<3.43.0
   :depends bioconductor-lumi: >=2.38.0,<2.39.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends bioconductor-summarizedexperiment: >=1.16.0,<1.17.0
   :depends r-agricolae: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dbi: 
   :depends r-gplots: 
   :depends r-rmysql: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-anamir

   and update with::

      conda update bioconductor-anamir

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-anamir:<tag>

   (see `bioconductor-anamir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-anamir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anamir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anamir
   :alt:   (downloads)
.. |docker_bioconductor-anamir| image:: https://quay.io/repository/biocontainers/bioconductor-anamir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anamir
.. _`bioconductor-anamir/tags`: https://quay.io/repository/biocontainers/bioconductor-anamir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anamir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anamir/README.html
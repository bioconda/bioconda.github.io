:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metaseqr'
.. highlight: bash

bioconductor-metaseqr
=====================

.. conda:recipe:: bioconductor-metaseqr
   :replaces_section_title:

   Provides an interface to several normalization and statistical testing packages for RNA\-Seq gene expression data. Additionally\, it creates several diagnostic plots\, performs meta\-analysis by combinining the results of several statistical tests and reports the results in an interactive way.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metaseqR.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-metaseqr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metaseqr/meta.yaml>`_

   


.. conda:package:: bioconductor-metaseqr

   |downloads_bioconductor-metaseqr| |docker_bioconductor-metaseqr|

   :versions: 1.22.0-0
   
   :depends bioconductor-bayseq: >=2.16.0,<2.17.0
   
   :depends bioconductor-biomart: >=2.38.0,<2.39.0
   
   :depends bioconductor-deseq: >=1.34.0,<1.35.0
   
   :depends bioconductor-edaseq: >=2.16.0,<2.17.0
   
   :depends bioconductor-edger: >=3.24.0,<3.25.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends bioconductor-noiseq: >=2.26.0,<2.27.0
   
   :depends bioconductor-qvalue: >=2.14.0,<2.15.0
   
   :depends bioconductor-vsn: >=3.50.0,<3.51.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-brew: 
   
   :depends r-corrplot: 
   
   :depends r-gplots: 
   
   :depends r-log4r: 
   
   :depends r-nbpseq: 
   
   :depends r-rjson: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metaseqr

   and update with::

      conda update bioconductor-metaseqr

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metaseqr:<tag>

   (see `bioconductor-metaseqr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metaseqr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metaseqr.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metaseqr| image:: https://quay.io/repository/biocontainers/bioconductor-metaseqr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metaseqr
.. _`bioconductor-metaseqr/tags`: https://quay.io/repository/biocontainers/bioconductor-metaseqr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metaseqr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metaseqr/README.html
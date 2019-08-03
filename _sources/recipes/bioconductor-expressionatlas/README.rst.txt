:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-expressionatlas'
.. highlight: bash

bioconductor-expressionatlas
============================

.. conda:recipe:: bioconductor-expressionatlas
   :replaces_section_title:

   This package is for searching for datasets in EMBL\-EBI Expression Atlas\, and downloading them into R for further analysis. Each Expression Atlas dataset is represented as a SimpleList object with one element per platform. Sequencing data is contained in a SummarizedExperiment object\, while microarray data is contained in an ExpressionSet or MAList object.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/ExpressionAtlas.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-expressionatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas/meta.yaml>`_

   


.. conda:package:: bioconductor-expressionatlas

   |downloads_bioconductor-expressionatlas| |docker_bioconductor-expressionatlas|

   :versions: 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-biobase: >=2.44.0,<2.45.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-httr: 
   :depends r-xml: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-expressionatlas

   and update with::

      conda update bioconductor-expressionatlas

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-expressionatlas:<tag>

   (see `bioconductor-expressionatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-expressionatlas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-expressionatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-expressionatlas
   :alt:   (downloads)
.. |docker_bioconductor-expressionatlas| image:: https://quay.io/repository/biocontainers/bioconductor-expressionatlas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-expressionatlas
.. _`bioconductor-expressionatlas/tags`: https://quay.io/repository/biocontainers/bioconductor-expressionatlas?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-expressionatlas/README.html
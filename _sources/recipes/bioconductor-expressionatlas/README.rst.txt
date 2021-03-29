:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-expressionatlas'
.. highlight: bash

bioconductor-expressionatlas
============================

.. conda:recipe:: bioconductor-expressionatlas
   :replaces_section_title:
   :noindex:

   Download datasets from EMBL\-EBI Expression Atlas

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/ExpressionAtlas.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-expressionatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-expressionatlas/meta.yaml>`_

   This package is for searching for datasets in EMBL\-EBI Expression Atlas\, and downloading them into R for further analysis. Each Expression Atlas dataset is represented as a SimpleList object with one element per platform. Sequencing data is contained in a SummarizedExperiment object\, while microarray data is contained in an ExpressionSet or MAList object.


.. conda:package:: bioconductor-expressionatlas

   |downloads_bioconductor-expressionatlas| |docker_bioconductor-expressionatlas|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-limma: ``>=3.46.0,<3.47.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
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
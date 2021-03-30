:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brgedata'
.. highlight: bash

bioconductor-brgedata
=====================

.. conda:recipe:: bioconductor-brgedata
   :replaces_section_title:
   :noindex:

   Exposures\, Gene Expression and Methylation data for ilustration purpouses

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/brgedata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-brgedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgedata/meta.yaml>`_

   This package contains several sets of omics data including Gene Expression \(ExpressionSet\)\, Methylation \(GenomicRatioSet\)\, Proteome and Exposome \(ExposomeSet\). This data is used in vignettes and exaples at MEAL\, MultiDataSet and omicRexposome.


.. conda:package:: bioconductor-brgedata

   |downloads_bioconductor-brgedata| |docker_bioconductor-brgedata|

   :versions:
      
      

      ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-summarizedexperiment: ``>=1.20.0,<1.21.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brgedata

   and update with::

      conda update bioconductor-brgedata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brgedata:<tag>

   (see `bioconductor-brgedata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brgedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brgedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brgedata
   :alt:   (downloads)
.. |docker_bioconductor-brgedata| image:: https://quay.io/repository/biocontainers/bioconductor-brgedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brgedata
.. _`bioconductor-brgedata/tags`: https://quay.io/repository/biocontainers/bioconductor-brgedata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brgedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brgedata/README.html
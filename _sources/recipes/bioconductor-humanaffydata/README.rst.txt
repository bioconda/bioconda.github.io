:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-humanaffydata'
.. highlight: bash

bioconductor-humanaffydata
==========================

.. conda:recipe:: bioconductor-humanaffydata
   :replaces_section_title:

   GEO accession GSE64985 and ArrayExpress accession E\-MTAB\-62 as ExpressionSet objects

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/HumanAffyData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-humanaffydata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-humanaffydata/meta.yaml>`_

   Re\-analysis of human gene expression data generated on the Affymetrix HG U133PlusV2 \(EH176\) and Affymetrix HG U133A \(EH177\) platforms. The original data were normalized using robust multiarray averaging \(RMA\) to obtain an integrated gene expression atlas across diverse biological sample types and conditions. The entire compendia comprisee 9395 arrays for EH176 and 5372 arrays for EH177.


.. conda:package:: bioconductor-humanaffydata

   |downloads_bioconductor-humanaffydata| |docker_bioconductor-humanaffydata|

   :versions: 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-experimenthub: >=1.12.0,<1.13.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-humanaffydata

   and update with::

      conda update bioconductor-humanaffydata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-humanaffydata:<tag>

   (see `bioconductor-humanaffydata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-humanaffydata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-humanaffydata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-humanaffydata
   :alt:   (downloads)
.. |docker_bioconductor-humanaffydata| image:: https://quay.io/repository/biocontainers/bioconductor-humanaffydata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-humanaffydata
.. _`bioconductor-humanaffydata/tags`: https://quay.io/repository/biocontainers/bioconductor-humanaffydata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-humanaffydata/README.html
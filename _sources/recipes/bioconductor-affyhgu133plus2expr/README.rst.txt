:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affyhgu133plus2expr'
.. highlight: bash

bioconductor-affyhgu133plus2expr
================================

.. conda:recipe:: bioconductor-affyhgu133plus2expr
   :replaces_section_title:

   Contains pre\-built human \(GPL570\) database of gene expression profiles. The gene expression data was downloaded from NCBI GEO and preprocessed and normalized consistently. The biological context of each sample was recorded and manually verified based on the sample description in GEO.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/Affyhgu133Plus2Expr.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-affyhgu133plus2expr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133plus2expr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affyhgu133plus2expr/meta.yaml>`_

   


.. conda:package:: bioconductor-affyhgu133plus2expr

   |downloads_bioconductor-affyhgu133plus2expr| |docker_bioconductor-affyhgu133plus2expr|

   :versions: 1.18.0-1, 1.16.0-0
   
   :depends curl: >=7.64.1,<8.0a0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affyhgu133plus2expr

   and update with::

      conda update bioconductor-affyhgu133plus2expr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-affyhgu133plus2expr:<tag>

   (see `bioconductor-affyhgu133plus2expr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affyhgu133plus2expr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affyhgu133plus2expr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-affyhgu133plus2expr
   :alt:   (downloads)
.. |docker_bioconductor-affyhgu133plus2expr| image:: https://quay.io/repository/biocontainers/bioconductor-affyhgu133plus2expr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affyhgu133plus2expr
.. _`bioconductor-affyhgu133plus2expr/tags`: https://quay.io/repository/biocontainers/bioconductor-affyhgu133plus2expr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affyhgu133plus2expr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affyhgu133plus2expr/README.html
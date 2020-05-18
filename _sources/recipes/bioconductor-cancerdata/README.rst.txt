:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cancerdata'
.. highlight: bash

bioconductor-cancerdata
=======================

.. conda:recipe:: bioconductor-cancerdata
   :replaces_section_title:

   Development and validation of diagnostic tests from high\-dimensional molecular data\: Datasets

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/cancerdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata/meta.yaml>`_

   Dataset for the R package cancerclass


.. conda:package:: bioconductor-cancerdata

   |downloads_bioconductor-cancerdata| |docker_bioconductor-cancerdata|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerdata

   and update with::

      conda update bioconductor-cancerdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cancerdata:<tag>

   (see `bioconductor-cancerdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cancerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cancerdata
   :alt:   (downloads)
.. |docker_bioconductor-cancerdata| image:: https://quay.io/repository/biocontainers/bioconductor-cancerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerdata
.. _`bioconductor-cancerdata/tags`: https://quay.io/repository/biocontainers/bioconductor-cancerdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html
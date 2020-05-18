:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-diggitdata'
.. highlight: bash

bioconductor-diggitdata
=======================

.. conda:recipe:: bioconductor-diggitdata
   :replaces_section_title:

   Example data for the diggit package

   :homepage: https://bioconductor.org/packages/3.11/data/experiment/html/diggitdata.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-diggitdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-diggitdata/meta.yaml>`_

   This package provides expression profile and CNV data for glioblastoma from TCGA\, and transcriptional and post\-translational regulatory networks assembled with the ARACNe and MINDy algorithms\, respectively.


.. conda:package:: bioconductor-diggitdata

   |downloads_bioconductor-diggitdata| |docker_bioconductor-diggitdata|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-1, 1.14.0-0
   
   :depends bioconductor-biobase: >=2.48.0,<2.49.0
   :depends bioconductor-viper: >=1.22.0,<1.23.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-diggitdata

   and update with::

      conda update bioconductor-diggitdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-diggitdata:<tag>

   (see `bioconductor-diggitdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-diggitdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-diggitdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-diggitdata
   :alt:   (downloads)
.. |docker_bioconductor-diggitdata| image:: https://quay.io/repository/biocontainers/bioconductor-diggitdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-diggitdata
.. _`bioconductor-diggitdata/tags`: https://quay.io/repository/biocontainers/bioconductor-diggitdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-diggitdata/README.html
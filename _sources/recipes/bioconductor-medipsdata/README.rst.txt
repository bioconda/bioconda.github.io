:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-medipsdata'
.. highlight: bash

bioconductor-medipsdata
=======================

.. conda:recipe:: bioconductor-medipsdata
   :replaces_section_title:

   Example data for MEDIPS and QSEA packages\, consisting of chromosome 22 MeDIP and control\/Input sample data. Additionally\, the package contains MeDIP seq data from 3 NSCLC samples and adjacent normal tissue \(chr 20\-22\). All data has been aligned to human genome hg19.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/MEDIPSData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-medipsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medipsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-medipsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-medipsdata

   |downloads_bioconductor-medipsdata| |docker_bioconductor-medipsdata|

   :versions: 1.21.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-medipsdata

   and update with::

      conda update bioconductor-medipsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-medipsdata:<tag>

   (see `bioconductor-medipsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-medipsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-medipsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-medipsdata
   :alt:   (downloads)
.. |docker_bioconductor-medipsdata| image:: https://quay.io/repository/biocontainers/bioconductor-medipsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-medipsdata
.. _`bioconductor-medipsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-medipsdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-medipsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-medipsdata/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-normalize450k'
.. highlight: bash

bioconductor-normalize450k
==========================

.. conda:recipe:: bioconductor-normalize450k
   :replaces_section_title:

   Precise measurements are important for epigenome\-wide studies investigating DNA methylation in whole blood samples\, where effect sizes are expected to be small in magnitude. The 450K platform is often affected by batch effects and proper preprocessing is recommended. This package provides functions to read and normalize 450K \'.idat\' files. The normalization corrects for dye bias and biases related to signal intensity and methylation of probes using local regression. No adjustment for probe type bias is performed to avoid the trade\-off of precision for accuracy of beta\-values.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/normalize450K.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-normalize450k <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalize450k>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-normalize450k/meta.yaml>`_

   


.. conda:package:: bioconductor-normalize450k

   |downloads_bioconductor-normalize450k| |docker_bioconductor-normalize450k|

   :versions: 1.14.0-0, 1.12.0-1, 1.10.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends bioconductor-illuminaio: >=0.28.0,<0.29.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-quadprog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-normalize450k

   and update with::

      conda update bioconductor-normalize450k

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-normalize450k:<tag>

   (see `bioconductor-normalize450k/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-normalize450k| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-normalize450k.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-normalize450k
   :alt:   (downloads)
.. |docker_bioconductor-normalize450k| image:: https://quay.io/repository/biocontainers/bioconductor-normalize450k/status
   :target: https://quay.io/repository/biocontainers/bioconductor-normalize450k
.. _`bioconductor-normalize450k/tags`: https://quay.io/repository/biocontainers/bioconductor-normalize450k?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-normalize450k/README.html
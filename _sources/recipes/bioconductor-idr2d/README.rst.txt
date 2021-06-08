:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-idr2d'
.. highlight: bash

bioconductor-idr2d
==================

.. conda:recipe:: bioconductor-idr2d
   :replaces_section_title:
   :noindex:

   Irreproducible Discovery Rate for Genomic Interactions Data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/idr2d.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-idr2d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-idr2d/meta.yaml>`_

   A tool to measure reproducibility between genomic experiments that produce two\-dimensional peaks \(interactions between peaks\)\, such as ChIA\-PET\, HiChIP\, and HiC. idr2d is an extension of the original idr package\, which is intended for \(one\-dimensional\) ChIP\-seq peaks.


.. conda:package:: bioconductor-idr2d

   |downloads_bioconductor-idr2d| |docker_bioconductor-idr2d|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-futile.logger: ``>=1.4.3``
   :depends r-ggplot2: ``>=3.1.1``
   :depends r-idr: ``>=1.2``
   :depends r-magrittr: ``>=1.5``
   :depends r-reticulate: ``>=1.13``
   :depends r-scales: ``>=1.0.0``
   :depends r-stringr: ``>=1.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-idr2d

   and update with::

      conda update bioconductor-idr2d

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-idr2d:<tag>

   (see `bioconductor-idr2d/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-idr2d| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-idr2d.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-idr2d
   :alt:   (downloads)
.. |docker_bioconductor-idr2d| image:: https://quay.io/repository/biocontainers/bioconductor-idr2d/status
   :target: https://quay.io/repository/biocontainers/bioconductor-idr2d
.. _`bioconductor-idr2d/tags`: https://quay.io/repository/biocontainers/bioconductor-idr2d?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-idr2d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-idr2d/README.html
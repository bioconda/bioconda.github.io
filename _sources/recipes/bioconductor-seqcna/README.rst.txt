:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcna'
.. highlight: bash

bioconductor-seqcna
===================

.. conda:recipe:: bioconductor-seqcna
   :replaces_section_title:

   Copy number analysis of high\-throughput sequencing cancer data

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/seqCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-seqcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcna/meta.yaml>`_

   Copy number analysis of high\-throughput sequencing cancer data with fast summarization\, extensive filtering and improved normalization


.. conda:package:: bioconductor-seqcna

   |downloads_bioconductor-seqcna| |docker_bioconductor-seqcna|

   :versions: 1.32.0-1, 1.30.0-1, 1.30.0-0
   
   :depends bioconductor-glad: >=2.50.0,<2.51.0
   :depends bioconductor-seqcna.annot: >=1.22.0,<1.23.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-adehabitatlt: >=0.3.4
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-dosnow: >=1.0.5
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqcna

   and update with::

      conda update bioconductor-seqcna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcna:<tag>

   (see `bioconductor-seqcna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcna
   :alt:   (downloads)
.. |docker_bioconductor-seqcna| image:: https://quay.io/repository/biocontainers/bioconductor-seqcna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcna
.. _`bioconductor-seqcna/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcna/README.html
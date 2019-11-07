:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-generxcluster'
.. highlight: bash

bioconductor-generxcluster
==========================

.. conda:recipe:: bioconductor-generxcluster
   :replaces_section_title:

   gRx Differential Clustering

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/geneRxCluster.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-generxcluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generxcluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-generxcluster/meta.yaml>`_
   :links: biotools: :biotools:`generxcluster`

   Detect Differential Clustering of Genomic Sites such as gene therapy integrations.  The package provides some functions for exploring genomic insertion sites originating from two different sources. Possibly\, the two sources are two different gene therapy vectors.  Vectors are preferred that target sensitive regions less frequently\, motivating the search for localized clusters of insertions and comparison of the clusters formed by integration of different vectors.  Scan statistics allow the discovery of spatial differences in clustering and calculation of False Discovery Rates \(FDRs\) providing statistical methods for comparing retroviral vectors. A scan statistic for comparing two vectors using multiple window widths to detect clustering differentials and compute FDRs is implemented here.


.. conda:package:: bioconductor-generxcluster

   |downloads_bioconductor-generxcluster| |docker_bioconductor-generxcluster|

   :versions: 1.22.0-0, 1.20.0-1, 1.18.0-1, 1.18.0-0, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends libgcc-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-generxcluster

   and update with::

      conda update bioconductor-generxcluster

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-generxcluster:<tag>

   (see `bioconductor-generxcluster/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-generxcluster| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-generxcluster.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-generxcluster
   :alt:   (downloads)
.. |docker_bioconductor-generxcluster| image:: https://quay.io/repository/biocontainers/bioconductor-generxcluster/status
   :target: https://quay.io/repository/biocontainers/bioconductor-generxcluster
.. _`bioconductor-generxcluster/tags`: https://quay.io/repository/biocontainers/bioconductor-generxcluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-generxcluster/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterprofiler'
.. highlight: bash

bioconductor-clusterprofiler
============================

.. conda:recipe:: bioconductor-clusterprofiler
   :replaces_section_title:

   statistical analysis and visualization of functional profiles for genes and gene clusters

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/clusterProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler/meta.yaml>`_
   :links: biotools: :biotools:`clusterprofiler`

   This package implements methods to analyze and visualize functional profiles \(GO and KEGG\) of gene and gene clusters.


.. conda:package:: bioconductor-clusterprofiler

   |downloads_bioconductor-clusterprofiler| |docker_bioconductor-clusterprofiler|

   :versions: 3.16.0-0, 3.14.0-0, 3.12.0-1, 3.10.1-0, 3.8.1-0, 3.6.0-0, 3.4.4-0, 3.0.5-0, 3.0.4-1, 2.4.3-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends bioconductor-dose: >=3.14.0,<3.15.0
   :depends bioconductor-enrichplot: >=1.8.0,<1.9.0
   :depends bioconductor-go.db: >=3.11.0,<3.12.0
   :depends bioconductor-gosemsim: >=2.14.0,<2.15.0
   :depends bioconductor-qvalue: >=2.20.0,<2.21.0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-rvcheck: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterprofiler

   and update with::

      conda update bioconductor-clusterprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterprofiler:<tag>

   (see `bioconductor-clusterprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterprofiler
   :alt:   (downloads)
.. |docker_bioconductor-clusterprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler
.. _`bioconductor-clusterprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html
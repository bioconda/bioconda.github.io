:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netbenchmark'
.. highlight: bash

bioconductor-netbenchmark
=========================

.. conda:recipe:: bioconductor-netbenchmark
   :replaces_section_title:

   Benchmarking of several gene network inference methods

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/netbenchmark.html
   :license: CC BY-NC-SA 4.0
   :recipe: /`bioconductor-netbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbenchmark/meta.yaml>`_

   This package implements a benchmarking of several gene network inference algorithms from gene expression data.


.. conda:package:: bioconductor-netbenchmark

   |downloads_bioconductor-netbenchmark| |docker_bioconductor-netbenchmark|

   :versions: 1.18.0-1, 1.16.0-1, 1.16.0-0, 1.14.0-0
   
   :depends bioconductor-genie3: >=1.8.0,<1.9.0
   :depends bioconductor-grndata: >=1.18.0,<1.19.0
   :depends bioconductor-minet: >=3.44.0,<3.45.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-c3net: 
   :depends r-corpcor: 
   :depends r-fdrtool: 
   :depends r-genenet: 
   :depends r-matrix: 
   :depends r-pcit: 
   :depends r-pracma: 
   :depends r-rcpp: >=0.11.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netbenchmark

   and update with::

      conda update bioconductor-netbenchmark

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-netbenchmark:<tag>

   (see `bioconductor-netbenchmark/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-netbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netbenchmark.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netbenchmark
   :alt:   (downloads)
.. |docker_bioconductor-netbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-netbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netbenchmark
.. _`bioconductor-netbenchmark/tags`: https://quay.io/repository/biocontainers/bioconductor-netbenchmark?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netbenchmark/README.html
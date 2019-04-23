:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netbenchmark'
.. highlight: bash

bioconductor-netbenchmark
=========================

.. conda:recipe:: bioconductor-netbenchmark
   :replaces_section_title:

   This package implements a benchmarking of several gene network inference algorithms from gene expression data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netbenchmark.html
   :license: CC BY-NC-SA 4.0
   :recipe: /`bioconductor-netbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netbenchmark/meta.yaml>`_

   


.. conda:package:: bioconductor-netbenchmark

   |downloads_bioconductor-netbenchmark| |docker_bioconductor-netbenchmark|

   :versions: 1.14.0-0
   
   :depends bioconductor-genie3: >=1.4.0,<1.5.0
   :depends bioconductor-grndata: >=1.14.0,<1.15.0
   :depends bioconductor-minet: >=3.40.0,<3.41.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.5.1,<3.5.2.0a0
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
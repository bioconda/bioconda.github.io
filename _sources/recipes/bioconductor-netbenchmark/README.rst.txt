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

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-genie3` >=1.4.0,<1.5.0 :conda:package:`bioconductor-grndata` >=1.14.0,<1.15.0 :conda:package:`bioconductor-minet` >=3.40.0,<3.41.0 :conda:package:`libcxx` >=4.0.1 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-c3net`  :conda:package:`r-corpcor`  :conda:package:`r-fdrtool`  :conda:package:`r-genenet`  :conda:package:`r-matrix`  :conda:package:`r-pcit`  :conda:package:`r-pracma`  :conda:package:`r-rcpp` >=0.11.0 

   :required~by: |required_by_bioconductor-netbenchmark|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netbenchmark

   and update with::

      conda update bioconductor-netbenchmark

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netbenchmark


.. |required_by_bioconductor-netbenchmark| conda:required_by:: bioconductor-netbenchmark
.. |downloads_bioconductor-netbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netbenchmark.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-netbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netbenchmark







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netbenchmark/README.html


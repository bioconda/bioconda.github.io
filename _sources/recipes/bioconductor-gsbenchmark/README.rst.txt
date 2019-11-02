:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsbenchmark'
.. highlight: bash

bioconductor-gsbenchmark
========================

.. conda:recipe:: bioconductor-gsbenchmark
   :replaces_section_title:

   Benchmarks for Machine Learning Analysis of the Gene Sets. The package contains a list of pathways and gene expression data sets used in \"Identifying Tightly Regulated and Variably Expressed Networks by Differential Rank Conservation \(DIRAC\)\" \(2010\) by Eddy et al.

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/GSBenchMark.html
   :license: GPL-2
   :recipe: /`bioconductor-gsbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsbenchmark/meta.yaml>`_

   


.. conda:package:: bioconductor-gsbenchmark

   |downloads_bioconductor-gsbenchmark| |docker_bioconductor-gsbenchmark|

   :versions: 1.5.0-0, 1.4.0-2, 1.4.0-1, 1.2.0-0
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsbenchmark

   and update with::

      conda update bioconductor-gsbenchmark

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsbenchmark:<tag>

   (see `bioconductor-gsbenchmark/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsbenchmark.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsbenchmark
   :alt:   (downloads)
.. |docker_bioconductor-gsbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark
.. _`bioconductor-gsbenchmark/tags`: https://quay.io/repository/biocontainers/bioconductor-gsbenchmark?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsbenchmark/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseabenchmarker'
.. highlight: bash

bioconductor-gseabenchmarker
============================

.. conda:recipe:: bioconductor-gseabenchmarker
   :replaces_section_title:
   :noindex:

   Reproducible GSEA Benchmarking

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GSEABenchmarkeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gseabenchmarker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseabenchmarker/meta.yaml>`_

   The GSEABenchmarkeR package implements an extendable framework for reproducible evaluation of set\- and network\-based methods for enrichment analysis of gene expression data. This includes support for the efficient execution of these methods on comprehensive real data compendia \(microarray and RNA\-seq\) using parallel computation on standard workstations and institutional computer grids. Methods can then be assessed with respect to runtime\, statistical significance\, and relevance of the results for the phenotypes investigated.


.. conda:package:: bioconductor-gseabenchmarker

   |downloads_bioconductor-gseabenchmarker| |docker_bioconductor-gseabenchmarker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.1-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-edger: ``>=4.0.0,<4.1.0``
   :depends bioconductor-enrichmentbrowser: ``>=2.32.0,<2.33.0``
   :depends bioconductor-experimenthub: ``>=2.10.0,<2.11.0``
   :depends bioconductor-keggandmetacoredzpathwaysgeo: ``>=1.22.0,<1.23.0``
   :depends bioconductor-keggdzpathwaysgeo: ``>=1.40.0,<1.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gseabenchmarker

   and update with::

      mamba update bioconductor-gseabenchmarker

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gseabenchmarker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gseabenchmarker:<tag>

   (see `bioconductor-gseabenchmarker/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gseabenchmarker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gseabenchmarker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gseabenchmarker
   :alt:   (downloads)
.. |docker_bioconductor-gseabenchmarker| image:: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker
.. _`bioconductor-gseabenchmarker/tags`: https://quay.io/repository/biocontainers/bioconductor-gseabenchmarker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gseabenchmarker";
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseabenchmarker/README.html
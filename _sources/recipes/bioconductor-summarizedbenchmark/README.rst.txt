:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-summarizedbenchmark'
.. highlight: bash

bioconductor-summarizedbenchmark
================================

.. conda:recipe:: bioconductor-summarizedbenchmark
   :replaces_section_title:
   :noindex:

   Classes and methods for performing benchmark comparisons

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SummarizedBenchmark.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-summarizedbenchmark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-summarizedbenchmark/meta.yaml>`_

   This package defines the BenchDesign and SummarizedBenchmark classes for building\, executing\, and evaluating benchmark experiments of computational methods. The SummarizedBenchmark class extends the RangedSummarizedExperiment object\, and is designed to provide infrastructure to store and compare the results of applying different methods to a shared data set. This class provides an integrated interface to store metadata such as method parameters and software versions as well as ground truths \(when these are available\) and evaluation metrics.


.. conda:package:: bioconductor-summarizedbenchmark

   |downloads_bioconductor-summarizedbenchmark| |docker_bioconductor-summarizedbenchmark|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.20.0-0</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  </span></summary>
      

      ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.2-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-crayon: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-mclust: 
   :depends r-rlang: 
   :depends r-sessioninfo: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-upsetr: 
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

      mamba install bioconductor-summarizedbenchmark

   and update with::

      mamba update bioconductor-summarizedbenchmark

  To create a new environment, run::

      mamba create --name myenvname bioconductor-summarizedbenchmark

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-summarizedbenchmark:<tag>

   (see `bioconductor-summarizedbenchmark/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-summarizedbenchmark| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-summarizedbenchmark.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-summarizedbenchmark
   :alt:   (downloads)
.. |docker_bioconductor-summarizedbenchmark| image:: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark/status
   :target: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark
.. _`bioconductor-summarizedbenchmark/tags`: https://quay.io/repository/biocontainers/bioconductor-summarizedbenchmark?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-summarizedbenchmark";
        var versions = ["2.20.0","2.18.0","2.16.0","2.12.0","2.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-summarizedbenchmark/README.html
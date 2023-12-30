:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-qplexanalyzer'
.. highlight: bash

bioconductor-qplexanalyzer
==========================

.. conda:recipe:: bioconductor-qplexanalyzer
   :replaces_section_title:
   :noindex:

   Tools for quantitative proteomics data analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/qPLEXanalyzer.html
   :license: GPL-2
   :recipe: /`bioconductor-qplexanalyzer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexanalyzer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-qplexanalyzer/meta.yaml>`_

   Tools for TMT based quantitative proteomics data analysis.


.. conda:package:: bioconductor-qplexanalyzer

   |downloads_bioconductor-qplexanalyzer| |docker_bioconductor-qplexanalyzer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.2-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-msnbase: ``>=2.28.0,<2.29.0``
   :depends bioconductor-preprocesscore: ``>=1.64.0,<1.65.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=1.0.0``
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-qplexanalyzer

   and update with::

      mamba update bioconductor-qplexanalyzer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-qplexanalyzer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-qplexanalyzer:<tag>

   (see `bioconductor-qplexanalyzer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-qplexanalyzer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-qplexanalyzer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-qplexanalyzer
   :alt:   (downloads)
.. |docker_bioconductor-qplexanalyzer| image:: https://quay.io/repository/biocontainers/bioconductor-qplexanalyzer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-qplexanalyzer
.. _`bioconductor-qplexanalyzer/tags`: https://quay.io/repository/biocontainers/bioconductor-qplexanalyzer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-qplexanalyzer";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-qplexanalyzer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-qplexanalyzer/README.html
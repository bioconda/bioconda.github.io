:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-primirtss'
.. highlight: bash

bioconductor-primirtss
======================

.. conda:recipe:: bioconductor-primirtss
   :replaces_section_title:
   :noindex:

   Prediction of pri\-miRNA Transcription Start Site

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/primirTSS.html
   :license: GPL-2
   :recipe: /`bioconductor-primirtss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-primirtss/meta.yaml>`_

   A fast\, convenient tool to identify the TSSs of miRNAs by integrating the data of H3K4me3 and Pol II as well as combining the conservation level and sequence feature\, provided within both command\-line and graphical interfaces\, which achieves a better performance than the previous non\-cell\-specific methods on miRNA TSSs.


.. conda:package:: bioconductor-primirtss

   |downloads_bioconductor-primirtss| |docker_bioconductor-primirtss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicscores: ``>=2.14.0,<2.15.0``
   :depends bioconductor-gviz: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-jaspar2018: ``>=1.1.0,<1.2.0``
   :depends bioconductor-phastcons100way.ucsc.hg38: ``>=3.7.0,<3.8.0``
   :depends bioconductor-rtracklayer: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-tfbstools: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-purrr: ``>=0.2.5``
   :depends r-r.utils: ``>=2.6.0``
   :depends r-shiny: ``>=1.0.5``
   :depends r-stringr: ``>=1.3.1``
   :depends r-tibble: ``>=1.4.2``
   :depends r-tidyr: ``>=0.8.1``
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

      mamba install bioconductor-primirtss

   and update with::

      mamba update bioconductor-primirtss

  To create a new environment, run::

      mamba create --name myenvname bioconductor-primirtss

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-primirtss:<tag>

   (see `bioconductor-primirtss/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-primirtss| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-primirtss.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-primirtss
   :alt:   (downloads)
.. |docker_bioconductor-primirtss| image:: https://quay.io/repository/biocontainers/bioconductor-primirtss/status
   :target: https://quay.io/repository/biocontainers/bioconductor-primirtss
.. _`bioconductor-primirtss/tags`: https://quay.io/repository/biocontainers/bioconductor-primirtss?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-primirtss";
        var versions = ["1.20.0","1.18.0","1.16.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-primirtss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-primirtss/README.html
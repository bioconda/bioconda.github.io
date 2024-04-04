:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-signac'
.. highlight: bash

r-signac
========

.. conda:recipe:: r-signac
   :replaces_section_title:
   :noindex:

   A framework for the analysis and exploration of single\-cell chromatin data. The \'Signac\' package contains functions for quantifying single\-cell chromatin data\, computing per\-cell quality control metrics\, dimension reduction and normalization\, visualization\, and DNA sequence motif analysis. Reference\: Stuart and Butler et al. \(2019\) \<doi\:10.1016\/j.cell.2019.05.031\>.

   :homepage: https://github.com/timoast/signac, https://satijalab.org/signac
   :license: MIT / MIT
   :recipe: /`r-signac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac/meta.yaml>`_

   


.. conda:package:: r-signac

   |downloads_r-signac| |docker_r-signac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.9.0-2</code>,  <code>1.9.0-1</code>,  <code>1.9.0-0</code>,  </span></summary>
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.29.3``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: ``>=1.0.0``
   :depends r-fastmatch: 
   :depends r-future: 
   :depends r-future.apply: 
   :depends r-ggplot2: 
   :depends r-irlba: 
   :depends r-matrix: 
   :depends r-patchwork: 
   :depends r-pbapply: 
   :depends r-rcpp: 
   :depends r-rcpproll: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-seuratobject: ``>=4.0.0``
   :depends r-stringi: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-vctrs: 
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

      mamba install r-signac

   and update with::

      mamba update r-signac

  To create a new environment, run::

      mamba create --name myenvname r-signac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-signac:<tag>

   (see `r-signac/tags`_ for valid values for ``<tag>``)


.. |downloads_r-signac| image:: https://img.shields.io/conda/dn/bioconda/r-signac.svg?style=flat
   :target: https://anaconda.org/bioconda/r-signac
   :alt:   (downloads)
.. |docker_r-signac| image:: https://quay.io/repository/biocontainers/r-signac/status
   :target: https://quay.io/repository/biocontainers/r-signac
.. _`r-signac/tags`: https://quay.io/repository/biocontainers/r-signac?tab=tags


.. raw:: html

    <script>
        var package = "r-signac";
        var versions = ["1.13.0","1.12.0","1.11.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-signac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-signac/README.html
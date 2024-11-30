:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sc3'
.. highlight: bash

bioconductor-sc3
================

.. conda:recipe:: bioconductor-sc3
   :replaces_section_title:
   :noindex:

   Single\-Cell Consensus Clustering

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SC3.html
   :license: GPL-3
   :recipe: /`bioconductor-sc3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sc3/meta.yaml>`_
   :links: biotools: :biotools:`sc3`

   A tool for unsupervised clustering and analysis of single cell RNA\-Seq data.


.. conda:package:: bioconductor-sc3

   |downloads_bioconductor-sc3| |docker_bioconductor-sc3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.3-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  <code>1.22.0-2</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.3-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.22.0-2``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.7.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-e1071: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-pheatmap: ``>=1.0.8``
   :depends r-rcpp: ``>=0.11.1``
   :depends r-rcpparmadillo: 
   :depends r-robustbase: 
   :depends r-rocr: 
   :depends r-rrcov: 
   :depends r-shiny: 
   :depends r-writexls: 
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

      mamba install bioconductor-sc3

   and update with::

      mamba update bioconductor-sc3

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sc3

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sc3:<tag>

   (see `bioconductor-sc3/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sc3| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sc3.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sc3
   :alt:   (downloads)
.. |docker_bioconductor-sc3| image:: https://quay.io/repository/biocontainers/bioconductor-sc3/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sc3
.. _`bioconductor-sc3/tags`: https://quay.io/repository/biocontainers/bioconductor-sc3?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sc3";
        var versions = ["1.30.0","1.28.3","1.26.0","1.26.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sc3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sc3/README.html
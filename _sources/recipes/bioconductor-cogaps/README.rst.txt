:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogaps'
.. highlight: bash

bioconductor-cogaps
===================

.. conda:recipe:: bioconductor-cogaps
   :replaces_section_title:
   :noindex:

   Coordinated Gene Activity in Pattern Sets

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CoGAPS.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-cogaps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogaps/meta.yaml>`_

   Coordinated Gene Activity in Pattern Sets \(CoGAPS\) implements a Bayesian MCMC matrix factorization algorithm\, GAPS\, and links it to gene set statistic methods to infer biological process activity.  It can be used to perform sparse matrix factorization on any data\, and when this data represents biomolecules\, to do gene set analysis.


.. conda:package:: bioconductor-cogaps

   |downloads_bioconductor-cogaps| |docker_bioconductor-cogaps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.22.0-0</code>,  <code>3.19.1-0</code>,  <code>3.18.0-1</code>,  <code>3.18.0-0</code>,  <code>3.14.0-2</code>,  <code>3.14.0-1</code>,  <code>3.14.0-0</code>,  <code>3.12.0-0</code>,  <code>3.10.0-1</code>,  </span></summary>
      

      ``3.22.0-0``,  ``3.19.1-0``,  ``3.18.0-1``,  ``3.18.0-0``,  ``3.14.0-2``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-0``,  ``3.10.0-1``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.1-0``,  ``3.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0a0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-rhdf5: ``>=2.46.0,<2.47.0``
   :depends bioconductor-rhdf5: ``>=2.46.1,<2.47.0a0``
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
   :depends r-bh: 
   :depends r-cluster: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-msigdbr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
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

      mamba install bioconductor-cogaps

   and update with::

      mamba update bioconductor-cogaps

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cogaps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogaps:<tag>

   (see `bioconductor-cogaps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogaps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogaps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogaps
   :alt:   (downloads)
.. |docker_bioconductor-cogaps| image:: https://quay.io/repository/biocontainers/bioconductor-cogaps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogaps
.. _`bioconductor-cogaps/tags`: https://quay.io/repository/biocontainers/bioconductor-cogaps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogaps";
        var versions = ["3.22.0","3.19.1","3.18.0","3.18.0","3.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogaps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogaps/README.html
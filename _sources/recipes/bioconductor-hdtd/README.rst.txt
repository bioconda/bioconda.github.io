:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdtd'
.. highlight: bash

bioconductor-hdtd
=================

.. conda:recipe:: bioconductor-hdtd
   :replaces_section_title:
   :noindex:

   Statistical Inference about the Mean Matrix and the Covariance Matrices in High\-Dimensional Transposable Data \(HDTD\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HDTD.html
   :license: GPL-3
   :recipe: /`bioconductor-hdtd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdtd/meta.yaml>`_

   Characterization of intra\-individual variability using physiologically relevant measurements provides important insights into fundamental biological questions ranging from cell type identity to tumor development. For each individual\, the data measurements can be written as a matrix with the different subsamples of the individual recorded in the columns and the different phenotypic units recorded in the rows. Datasets of this type are called high\-dimensional transposable data. The HDTD package provides functions for conducting statistical inference for the mean relationship between the row and column variables and for the covariance structure within and between the row and column variables.


.. conda:package:: bioconductor-hdtd

   |downloads_bioconductor-hdtd| |docker_bioconductor-hdtd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.1-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.1-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-rcpp: ``>=1.0.1``
   :depends r-rcpparmadillo: 
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

      mamba install bioconductor-hdtd

   and update with::

      mamba update bioconductor-hdtd

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hdtd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hdtd:<tag>

   (see `bioconductor-hdtd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hdtd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdtd.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdtd
   :alt:   (downloads)
.. |docker_bioconductor-hdtd| image:: https://quay.io/repository/biocontainers/bioconductor-hdtd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdtd
.. _`bioconductor-hdtd/tags`: https://quay.io/repository/biocontainers/bioconductor-hdtd?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdtd";
        var versions = ["1.40.0","1.36.0","1.34.1","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdtd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdtd/README.html
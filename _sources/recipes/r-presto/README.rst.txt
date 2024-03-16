:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-presto'
.. highlight: bash

r-presto
========

.. conda:recipe:: r-presto
   :replaces_section_title:
   :noindex:

   Scalable implementation of the Wilcoxon rank sum test and auROC statistic. Interfaces to dense and sparse matrices\, as well as genomics analysis frameworks Seurat and SingleCellExperiment.

   :homepage: https://github.com/immunogenomics/presto
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-presto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-presto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-presto/meta.yaml>`_

   


.. conda:package:: r-presto

   |downloads_r-presto| |docker_r-presto|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install r-presto

   and update with::

      mamba update r-presto

  To create a new environment, run::

      mamba create --name myenvname r-presto

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-presto:<tag>

   (see `r-presto/tags`_ for valid values for ``<tag>``)


.. |downloads_r-presto| image:: https://img.shields.io/conda/dn/bioconda/r-presto.svg?style=flat
   :target: https://anaconda.org/bioconda/r-presto
   :alt:   (downloads)
.. |docker_r-presto| image:: https://quay.io/repository/biocontainers/r-presto/status
   :target: https://quay.io/repository/biocontainers/r-presto
.. _`r-presto/tags`: https://quay.io/repository/biocontainers/r-presto?tab=tags


.. raw:: html

    <script>
        var package = "r-presto";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-presto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-presto/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-experimentsubset'
.. highlight: bash

bioconductor-experimentsubset
=============================

.. conda:recipe:: bioconductor-experimentsubset
   :replaces_section_title:
   :noindex:

   Manages subsets of data with Bioconductor Experiment objects

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ExperimentSubset.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-experimentsubset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimentsubset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimentsubset/meta.yaml>`_

   Experiment objects such as the SummarizedExperiment or SingleCellExperiment are data containers for one or more matrix\-like assays along with the associated row and column data. Often only a subset of the original data is needed for down\-stream analysis. For example\, filtering out poor quality samples will require excluding some columns before analysis. The ExperimentSubset object is a container to efficiently manage different subsets of the same data without having to make separate objects for each new subset.


.. conda:package:: bioconductor-experimentsubset

   |downloads_bioconductor-experimentsubset| |docker_bioconductor-experimentsubset|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrix: 
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

      mamba install bioconductor-experimentsubset

   and update with::

      mamba update bioconductor-experimentsubset

  To create a new environment, run::

      mamba create --name myenvname bioconductor-experimentsubset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-experimentsubset:<tag>

   (see `bioconductor-experimentsubset/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-experimentsubset| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimentsubset.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-experimentsubset
   :alt:   (downloads)
.. |docker_bioconductor-experimentsubset| image:: https://quay.io/repository/biocontainers/bioconductor-experimentsubset/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimentsubset
.. _`bioconductor-experimentsubset/tags`: https://quay.io/repository/biocontainers/bioconductor-experimentsubset?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-experimentsubset";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimentsubset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimentsubset/README.html
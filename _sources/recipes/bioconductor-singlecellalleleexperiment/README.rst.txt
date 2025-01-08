:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellalleleexperiment'
.. highlight: bash

bioconductor-singlecellalleleexperiment
=======================================

.. conda:recipe:: bioconductor-singlecellalleleexperiment
   :replaces_section_title:
   :noindex:

   S4 Class for Single Cell Data with Allele and Functional Levels for Immune Genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SingleCellAlleleExperiment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-singlecellalleleexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellalleleexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellalleleexperiment/meta.yaml>`_

   Defines a S4 class that is based on SingleCellExperiment. In addition to the usual gene layer the object can also store data for immune genes such as HLAs\, Igs and KIRs at allele and functional level. The package is part of a workflow named single\-cell ImmunoGenomic Diversity \(scIGD\)\, that firstly incorporates allele\-aware quantification data for immune genes. This new data can then be used with the here implemented data structure and functionalities for further data handling and data analysis.


.. conda:package:: bioconductor-singlecellalleleexperiment

   |downloads_bioconductor-singlecellalleleexperiment| |docker_bioconductor-singlecellalleleexperiment|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-delayedarray: ``>=0.32.0,<0.33.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-singlecellalleleexperiment

   and update with::

      mamba update bioconductor-singlecellalleleexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-singlecellalleleexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellalleleexperiment:<tag>

   (see `bioconductor-singlecellalleleexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellalleleexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellalleleexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-singlecellalleleexperiment
   :alt:   (downloads)
.. |docker_bioconductor-singlecellalleleexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellalleleexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellalleleexperiment
.. _`bioconductor-singlecellalleleexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellalleleexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-singlecellalleleexperiment";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellalleleexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellalleleexperiment/README.html
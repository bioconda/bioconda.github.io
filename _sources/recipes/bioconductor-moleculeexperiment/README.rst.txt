:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moleculeexperiment'
.. highlight: bash

bioconductor-moleculeexperiment
===============================

.. conda:recipe:: bioconductor-moleculeexperiment
   :replaces_section_title:
   :noindex:

   Prioritising a molecule\-level storage of Spatial Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MoleculeExperiment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-moleculeexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moleculeexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moleculeexperiment/meta.yaml>`_

   MoleculeExperiment contains functions to create and work with objects from the new MoleculeExperiment class. We introduce this class for analysing molecule\-based spatial transcriptomics data \(e.g.\, Xenium by 10X\, Cosmx SMI by Nanostring\, and Merscope by Vizgen\). This allows researchers to analyse spatial transcriptomics data at the molecule level\, and to have standardised data formats accross vendors.


.. conda:package:: bioconductor-moleculeexperiment

   |downloads_bioconductor-moleculeexperiment| |docker_bioconductor-moleculeexperiment|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-dplyr: ``>=1.1.1``
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-purrr: 
   :depends r-rjson: 
   :depends r-rlang: 
   :depends r-sp: 
   :depends r-terra: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-moleculeexperiment

   and update with::

      mamba update bioconductor-moleculeexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-moleculeexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moleculeexperiment:<tag>

   (see `bioconductor-moleculeexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moleculeexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moleculeexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moleculeexperiment
   :alt:   (downloads)
.. |docker_bioconductor-moleculeexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment
.. _`bioconductor-moleculeexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-moleculeexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-moleculeexperiment";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moleculeexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moleculeexperiment/README.html
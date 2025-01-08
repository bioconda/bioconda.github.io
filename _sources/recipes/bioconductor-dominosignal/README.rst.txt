:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dominosignal'
.. highlight: bash

bioconductor-dominosignal
=========================

.. conda:recipe:: bioconductor-dominosignal
   :replaces_section_title:
   :noindex:

   Cell Communication Analysis for Single Cell RNA Sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dominoSignal.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-dominosignal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominosignal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominosignal/meta.yaml>`_

   dominoSignal is a package developed to analyze cell signaling through ligand \- receptor \- transcription factor networks in scRNAseq data. It takes as input information transcriptomic data\, requiring counts\, z\-scored counts\, and cluster labels\, as well as information on transcription factor activation \(such as from SCENIC\) and a database of ligand and receptor pairings \(such as from CellPhoneDB\). This package creates an object storing ligand \- receptor \- transcription factor linkages by cluster and provides several methods for exploring\, summarizing\, and visualizing the analysis.


.. conda:package:: bioconductor-dominosignal

   |downloads_bioconductor-dominosignal| |docker_bioconductor-dominosignal|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.62.0,<2.63.0``
   :depends bioconductor-complexheatmap: ``>=2.22.0,<2.23.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-circlize: 
   :depends r-ggpubr: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-plyr: 
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

      mamba install bioconductor-dominosignal

   and update with::

      mamba update bioconductor-dominosignal

  To create a new environment, run::

      mamba create --name myenvname bioconductor-dominosignal

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-dominosignal:<tag>

   (see `bioconductor-dominosignal/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-dominosignal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dominosignal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dominosignal
   :alt:   (downloads)
.. |docker_bioconductor-dominosignal| image:: https://quay.io/repository/biocontainers/bioconductor-dominosignal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dominosignal
.. _`bioconductor-dominosignal/tags`: https://quay.io/repository/biocontainers/bioconductor-dominosignal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dominosignal";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dominosignal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dominosignal/README.html
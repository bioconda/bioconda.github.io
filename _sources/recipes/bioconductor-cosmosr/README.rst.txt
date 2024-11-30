:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmosr'
.. highlight: bash

bioconductor-cosmosr
====================

.. conda:recipe:: bioconductor-cosmosr
   :replaces_section_title:
   :noindex:

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cosmosR.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr/meta.yaml>`_

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\) is a method that integrates phosphoproteomics\, transcriptomics\, and metabolomics data sets based on prior knowledge of signaling\, metabolic\, and gene regulatory networks. It estimated the activities of transcrption factors and kinases and finds a network\-level causal reasoning. Thereby\, COSMOS provides mechanistic hypotheses for experimental observations across mulit\-omics datasets.


.. conda:package:: bioconductor-cosmosr

   |downloads_bioconductor-cosmosr| |docker_bioconductor-cosmosr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-carnival: ``>=2.12.0,<2.13.0``
   :depends bioconductor-decoupler: ``>=2.8.0,<2.9.0``
   :depends bioconductor-dorothea: ``>=1.14.0,<1.15.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-cosmosr

   and update with::

      mamba update bioconductor-cosmosr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cosmosr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmosr:<tag>

   (see `bioconductor-cosmosr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmosr
   :alt:   (downloads)
.. |docker_bioconductor-cosmosr| image:: https://quay.io/repository/biocontainers/bioconductor-cosmosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmosr
.. _`bioconductor-cosmosr/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmosr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cosmosr";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html
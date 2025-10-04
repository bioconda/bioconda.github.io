:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'regain-cli'
.. highlight: bash

regain-cli
==========

.. conda:recipe:: regain-cli
   :replaces_section_title:
   :noindex:

   Bayesian\-network pipeline for ARG\/virulence co\-occurrence analysis.

   :homepage: https://github.com/ERBringHorvath/regain_CLI
   :license: MIT
   :recipe: /`regain-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regain-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/regain-cli/meta.yaml>`_

   ReGAIN is a reproducible CLI for quantifying co\-occurrence among
   bacterial antibiotic\/heavy metal resistance and virulence genes using Bayesian network
   structure learning \(bnlearn\/gRain\) and post\-hoc metrics. It includes
   dataset curation\, visualization\, and multivariate analysis.



.. conda:package:: regain-cli

   |downloads_regain-cli| |docker_regain-cli|

   :versions:
      
      

      ``1.6.2-0``

      

   
   :depends bioconductor-graph: 
   :depends biopython: 
   :depends blast: 
   :depends ncbi-amrfinderplus: 
   :depends pandas: 
   :depends python: ``>=3.10``
   :depends r-ape: 
   :depends r-base: ``>=4.2``
   :depends r-bnlearn: 
   :depends r-cluster: 
   :depends r-compositions: 
   :depends r-doparallel: 
   :depends r-dplyr: 
   :depends r-ellipse: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggrepel: 
   :depends r-grain: 
   :depends r-igraph: 
   :depends r-optparse: 
   :depends r-pbapply: 
   :depends r-progressr: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidygraph: 
   :depends r-tidyr: 
   :depends r-vegan: 
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

      mamba install regain-cli

   and update with::

      mamba update regain-cli

  To create a new environment, run::

      mamba create --name myenvname regain-cli

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/regain-cli:<tag>

   (see `regain-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_regain-cli| image:: https://img.shields.io/conda/dn/bioconda/regain-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/regain-cli
   :alt:   (downloads)
.. |docker_regain-cli| image:: https://quay.io/repository/biocontainers/regain-cli/status
   :target: https://quay.io/repository/biocontainers/regain-cli
.. _`regain-cli/tags`: https://quay.io/repository/biocontainers/regain-cli?tab=tags


.. raw:: html

    <script>
        var package = "regain-cli";
        var versions = ["1.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/regain-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/regain-cli/README.html
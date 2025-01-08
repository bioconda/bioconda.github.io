:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-wppi'
.. highlight: bash

bioconductor-wppi
=================

.. conda:recipe:: bioconductor-wppi
   :replaces_section_title:
   :noindex:

   Weighting protein\-protein interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/wppi.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-wppi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wppi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-wppi/meta.yaml>`_

   Protein\-protein interaction data is essential for omics data analysis and modeling. Database knowledge is general\, not specific for cell type\, physiological condition or any other context determining which connections are functional and contribute to the signaling. Functional annotations such as Gene Ontology and Human Phenotype Ontology might help to evaluate the relevance of interactions. This package predicts functional relevance of protein\-protein interactions based on functional annotations such as Human Protein Ontology and Gene Ontology\, and prioritizes genes based on network topology\, functional scores and a path search algorithm.


.. conda:package:: bioconductor-wppi

   |downloads_bioconductor-wppi| |docker_bioconductor-wppi|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-omnipathr: ``>=3.10.0,<3.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-logger: 
   :depends r-magrittr: 
   :depends r-matrix: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rcurl: 
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
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

      mamba install bioconductor-wppi

   and update with::

      mamba update bioconductor-wppi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-wppi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-wppi:<tag>

   (see `bioconductor-wppi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-wppi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-wppi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-wppi
   :alt:   (downloads)
.. |docker_bioconductor-wppi| image:: https://quay.io/repository/biocontainers/bioconductor-wppi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-wppi
.. _`bioconductor-wppi/tags`: https://quay.io/repository/biocontainers/bioconductor-wppi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-wppi";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-wppi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-wppi/README.html
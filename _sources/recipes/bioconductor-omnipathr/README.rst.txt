:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omnipathr'
.. highlight: bash

bioconductor-omnipathr
======================

.. conda:recipe:: bioconductor-omnipathr
   :replaces_section_title:
   :noindex:

   OmniPath web service client and more

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OmnipathR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omnipathr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr/meta.yaml>`_

   A client for the OmniPath web service \(https\:\/\/www.omnipathdb.org\) and many other resources. It also includes functions to transform and pretty print some of the downloaded data\, functions to access a number of other resources such as BioPlex\, ConsensusPathDB\, EVEX\, Gene Ontology\, Guide to Pharmacology \(IUPHAR\/BPS\)\, Harmonizome\, HTRIdb\, Human Phenotype Ontology\, InWeb InBioMap\, KEGG Pathway\, Pathway Commons\, Ramilowski et al. 2015\, RegNetwork\, ReMap\, TF census\, TRRUST and Vinayagam et al. 2011. Furthermore\, OmnipathR features a close integration with the NicheNet method for ligand activity prediction from transcriptomics data\, and its R implementation \`nichenetr\` \(available only on github\).


.. conda:package:: bioconductor-omnipathr

   |downloads_bioconductor-omnipathr| |docker_bioconductor-omnipathr|

   :versions:
      
      

      ``3.10.1-0``,  ``3.8.0-0``,  ``3.5.25-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-checkmate: 
   :depends r-crayon: 
   :depends r-curl: 
   :depends r-digest: 
   :depends r-dplyr: ``>=1.1.0``
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-later: 
   :depends r-logger: 
   :depends r-lubridate: 
   :depends r-magrittr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rappdirs: 
   :depends r-readr: ``>=2.0.0``
   :depends r-readxl: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-rvest: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-withr: 
   :depends r-xml2: 
   :depends r-yaml: 
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

      mamba install bioconductor-omnipathr

   and update with::

      mamba update bioconductor-omnipathr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-omnipathr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-omnipathr:<tag>

   (see `bioconductor-omnipathr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-omnipathr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omnipathr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omnipathr
   :alt:   (downloads)
.. |docker_bioconductor-omnipathr| image:: https://quay.io/repository/biocontainers/bioconductor-omnipathr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omnipathr
.. _`bioconductor-omnipathr/tags`: https://quay.io/repository/biocontainers/bioconductor-omnipathr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omnipathr";
        var versions = ["3.10.1","3.8.0","3.5.25","3.2.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omnipathr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omnipathr/README.html
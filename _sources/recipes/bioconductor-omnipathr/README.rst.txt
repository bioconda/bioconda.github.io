:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omnipathr'
.. highlight: bash

bioconductor-omnipathr
======================

.. conda:recipe:: bioconductor-omnipathr
   :replaces_section_title:
   :noindex:

   OmniPath web service client and more

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/OmnipathR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-omnipathr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omnipathr/meta.yaml>`_

   A client for the OmniPath web service \(https\:\/\/www.omnipathdb.org\) and many other resources. It also includes functions to transform and pretty print some of the downloaded data\, functions to access a number of other resources such as BioPlex\, ConsensusPathDB\, EVEX\, Gene Ontology\, Guide to Pharmacology \(IUPHAR\/BPS\)\, Harmonizome\, HTRIdb\, Human Phenotype Ontology\, InWeb InBioMap\, KEGG Pathway\, Pathway Commons\, Ramilowski et al. 2015\, RegNetwork\, ReMap\, TF census\, TRRUST and Vinayagam et al. 2011. Furthermore\, OmnipathR features a close integration with the NicheNet method for ligand activity prediction from transcriptomics data\, and its R implementation \`nichenetr\` \(available only on github\).


.. conda:package:: bioconductor-omnipathr

   |downloads_bioconductor-omnipathr| |docker_bioconductor-omnipathr|

   :versions:
      
      

      ``3.0.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-checkmate: 
   :depends r-curl: 
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-later: 
   :depends r-logger: 
   :depends r-magrittr: 
   :depends r-progress: 
   :depends r-purrr: 
   :depends r-rappdirs: 
   :depends r-readr: 
   :depends r-readxl: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :depends r-xml2: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-omnipathr

   and update with::

      conda update bioconductor-omnipathr

   or use the docker container::

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
        var versions = ["3.0.0","2.0.0","2.0.0","1.2.0","1.0.0"];
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
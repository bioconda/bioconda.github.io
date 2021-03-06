:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cosmosr'
.. highlight: bash

bioconductor-cosmosr
====================

.. conda:recipe:: bioconductor-cosmosr
   :replaces_section_title:
   :noindex:

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\)

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cosmosR.html
   :license: GPL-3
   :recipe: /`bioconductor-cosmosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cosmosr/meta.yaml>`_

   COSMOS \(Causal Oriented Search of Multi\-Omic Space\) is a method that integrates phosphoproteomics\, transcriptomics\, and metabolomics data sets based on prior knowledge of signaling\, metabolic\, and gene regulatory networks. It estimated the activities of transcrption factors and kinases and finds a network\-level causal reasoning. Thereby\, COSMOS provides mechanistic hypotheses for experimental observations across mulit\-omics datasets.


.. conda:package:: bioconductor-cosmosr

   |downloads_bioconductor-cosmosr| |docker_bioconductor-cosmosr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-carnival: ``>=2.2.0,<2.3.0``
   :depends bioconductor-dorothea: ``>=1.4.0,<1.5.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-igraph: 
   :depends r-purrr: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cosmosr

   and update with::

      conda update bioconductor-cosmosr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cosmosr:<tag>

   (see `bioconductor-cosmosr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cosmosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cosmosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cosmosr
   :alt:   (downloads)
.. |docker_bioconductor-cosmosr| image:: https://quay.io/repository/biocontainers/bioconductor-cosmosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cosmosr
.. _`bioconductor-cosmosr/tags`: https://quay.io/repository/biocontainers/bioconductor-cosmosr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cosmosr/README.html
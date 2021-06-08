:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multisight'
.. highlight: bash

bioconductor-multisight
=======================

.. conda:recipe:: bioconductor-multisight
   :replaces_section_title:
   :noindex:

   Multi\-omics Classification\, Functional Enrichment and Network Inference analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/multiSight.html
   :license: CeCILL + file LICENSE
   :recipe: /`bioconductor-multisight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multisight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multisight/meta.yaml>`_

   multiSight is an R package providing an user\-friendly graphical interface to analyze your omic datasets in a multi\-omics manner based on Stouffer\'s p\-value pooling and multi\-block statistical methods. For each omic dataset you furnish\, multiSight provides classification models with feature selection you can use as biosignature\: \(i\) To forecast phenotypes \(e.g. to diagnostic tasks\, histological subtyping\)\, \(ii\) To design Pathways and gene ontology enrichments \(Over Representation Analysis\)\, \(iii\) To build Network inference linked to PubMed querying to make assumptions easier and data\-driven.


.. conda:package:: bioconductor-multisight

   |downloads_bioconductor-multisight| |docker_bioconductor-multisight|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biosigner: ``>=1.20.0,<1.21.0``
   :depends bioconductor-clusterprofiler: ``>=4.0.0,<4.1.0``
   :depends bioconductor-deseq2: ``>=1.32.0,<1.33.0``
   :depends bioconductor-enrichplot: ``>=1.12.0,<1.13.0``
   :depends bioconductor-mixomics: ``>=6.16.0,<6.17.0``
   :depends bioconductor-reactomepa: ``>=1.36.0,<1.37.0``
   :depends bioconductor-rwikipathways: ``>=1.12.0,<1.13.0``
   :depends r-anylib: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-caret: 
   :depends r-config: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-easypubmed: 
   :depends r-golem: 
   :depends r-htmltools: 
   :depends r-igraph: 
   :depends r-infotheo: 
   :depends r-metap: 
   :depends r-networkd3: 
   :depends r-ppcor: 
   :depends r-r6: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-shinydashboard: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multisight

   and update with::

      conda update bioconductor-multisight

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multisight:<tag>

   (see `bioconductor-multisight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multisight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multisight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multisight
   :alt:   (downloads)
.. |docker_bioconductor-multisight| image:: https://quay.io/repository/biocontainers/bioconductor-multisight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multisight
.. _`bioconductor-multisight/tags`: https://quay.io/repository/biocontainers/bioconductor-multisight?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multisight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multisight/README.html
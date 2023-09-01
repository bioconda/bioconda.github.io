:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multisight'
.. highlight: bash

bioconductor-multisight
=======================

.. conda:recipe:: bioconductor-multisight
   :replaces_section_title:
   :noindex:

   Multi\-omics Classification\, Functional Enrichment and Network Inference analysis

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/multiSight.html
   :license: CeCILL + file LICENSE
   :recipe: /`bioconductor-multisight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multisight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multisight/meta.yaml>`_

   multiSight is an R package providing functions to analyze your omic datasets in a multi\-omics manner based on Stouffer\'s p\-value pooling and multi\-block statistical methods. For each omic dataset you furnish\, multiSight provides classification models with feature selection you can use as biosignature\: \(i\) To forecast phenotypes \(e.g. to diagnostic tasks\, histological subtyping\)\, \(ii\) To design Pathways and gene ontology enrichments \(Over Representation Analysis\)\, \(iii\) To build Network inference linked to PubMed querying to make assumptions easier and data\-driven. Main analysis are embedded in an user\-friendly graphical interface.


.. conda:package:: bioconductor-multisight

   |downloads_bioconductor-multisight| |docker_bioconductor-multisight|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biosigner: ``>=1.28.0,<1.29.0``
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-enrichplot: ``>=1.20.0,<1.21.0``
   :depends bioconductor-mixomics: ``>=6.24.0,<6.25.0``
   :depends bioconductor-reactomepa: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rwikipathways: ``>=1.20.0,<1.21.0``
   :depends r-anylib: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-config: 
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-easypubmed: 
   :depends r-ggnewscale: 
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-multisight

   and update with::

      mamba update bioconductor-multisight

  To create a new environment, run::

      mamba create --name myenvname bioconductor-multisight

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multisight:<tag>

   (see `bioconductor-multisight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multisight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multisight.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multisight
   :alt:   (downloads)
.. |docker_bioconductor-multisight| image:: https://quay.io/repository/biocontainers/bioconductor-multisight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multisight
.. _`bioconductor-multisight/tags`: https://quay.io/repository/biocontainers/bioconductor-multisight?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multisight";
        var versions = ["1.7.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multisight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multisight/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-pathfindr'
.. highlight: bash

r-pathfindr
===========

.. conda:recipe:: r-pathfindr
   :replaces_section_title:
   :noindex:

   Enrichment analysis enables researchers to uncover mechanisms underlying a phenotype. However\, conventional methods for enrichment analysis do not take into account protein\-protein interaction information\, resulting in incomplete conclusions. pathfindR is a tool for enrichment analysis utilizing active subnetworks. The main function identifies active subnetworks in a protein\-protein interaction network using a user\-provided list of genes and associated p values. It then performs enrichment analyses on the identified subnetworks\, identifying enriched terms \(i.e. pathways or\, more broadly\, gene sets\) that possibly underlie the phenotype of interest. pathfindR also offers functionalities to cluster the enriched terms and identify representative terms in each cluster\, to score the enriched terms per sample and to visualize analysis results. The enrichment\, clustering and other methods implemented in pathfindR are described in detail in Ulgen E\, Ozisik O\, Sezerman OU. 2019. pathfindR\: An R Package for Comprehensive Identification of Enriched Pathways in Omics Data Through Active Subnetworks. Front. Genet. \<doi\:10.3389\/fgene.2019.00858\>.

   :homepage: https://egeulgen.github.io/pathfindR/, https://github.com/egeulgen/pathfindR
   :license: MIT / MIT
   :recipe: /`r-pathfindr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathfindr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-pathfindr/meta.yaml>`_

   


.. conda:package:: r-pathfindr

   |downloads_r-pathfindr| |docker_r-pathfindr|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-0``

      

   
   :depends bioconductor-annotationdbi: 
   :depends bioconductor-kegggraph: 
   :depends bioconductor-keggrest: 
   :depends bioconductor-org.hs.eg.db: 
   :depends openjdk: ``8.*``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dbi: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-fpc: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggupset: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-magick: 
   :depends r-msigdbr: 
   :depends r-pathfindr.data: ``>=2.0``
   :depends r-r.utils: 
   :depends r-rmarkdown: 
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

      mamba install r-pathfindr

   and update with::

      mamba update r-pathfindr

  To create a new environment, run::

      mamba create --name myenvname r-pathfindr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-pathfindr:<tag>

   (see `r-pathfindr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-pathfindr| image:: https://img.shields.io/conda/dn/bioconda/r-pathfindr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-pathfindr
   :alt:   (downloads)
.. |docker_r-pathfindr| image:: https://quay.io/repository/biocontainers/r-pathfindr/status
   :target: https://quay.io/repository/biocontainers/r-pathfindr
.. _`r-pathfindr/tags`: https://quay.io/repository/biocontainers/r-pathfindr?tab=tags


.. raw:: html

    <script>
        var package = "r-pathfindr";
        var versions = ["2.3.1","2.3.0","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-pathfindr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-pathfindr/README.html
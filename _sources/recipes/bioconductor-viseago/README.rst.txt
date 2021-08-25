:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-viseago'
.. highlight: bash

bioconductor-viseago
====================

.. conda:recipe:: bioconductor-viseago
   :replaces_section_title:
   :noindex:

   ViSEAGO\: a Bioconductor package for clustering biological functions using Gene Ontology and semantic similarity

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ViSEAGO.html
   :license: GPL-3
   :recipe: /`bioconductor-viseago <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viseago>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-viseago/meta.yaml>`_

   The main objective of ViSEAGO package is to carry out a data mining of biological functions and establish links between genes involved in the study. We developed ViSEAGO in R to facilitate functional Gene Ontology \(GO\) analysis of complex experimental design with multiple comparisons of interest. It allows to study large\-scale datasets together and visualize GO profiles to capture biological knowledge. The acronym stands for three major concepts of the analysis\: Visualization\, Semantic similarity and Enrichment Analysis of Gene Ontology. It provides access to the last current GO annotations\, which are retrieved from one of NCBI EntrezGene\, Ensembl or Uniprot databases for several species. Using available R packages and novel developments\, ViSEAGO extends classical functional GO analysis to focus on functional coherence by aggregating closely related biological themes while studying multiple datasets at once. It provides both a synthetic and detailed view using interactive functionalities respecting the GO graph structure and ensuring functional coherence supplied by semantic similarity. ViSEAGO has been successfully applied on several datasets from different species with a variety of biological questions. Results can be easily shared between bioinformaticians and biologists\, enhancing reporting capabilities while maintaining reproducibility.


.. conda:package:: bioconductor-viseago

   |downloads_bioconductor-viseago| |docker_bioconductor-viseago|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.54.0,<1.55.0``
   :depends bioconductor-annotationforge: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biomart: ``>=2.48.0,<2.49.0``
   :depends bioconductor-fgsea: ``>=1.18.0,<1.19.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-gosemsim: ``>=2.18.0,<2.19.0``
   :depends bioconductor-topgo: ``>=2.44.0,<2.45.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dendextend: 
   :depends r-diagrammer: 
   :depends r-dt: 
   :depends r-dynamictreecut: 
   :depends r-ggplot2: 
   :depends r-heatmaply: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-plotly: 
   :depends r-processx: 
   :depends r-r.utils: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-viseago

   and update with::

      conda update bioconductor-viseago

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-viseago:<tag>

   (see `bioconductor-viseago/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-viseago| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-viseago.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-viseago
   :alt:   (downloads)
.. |docker_bioconductor-viseago| image:: https://quay.io/repository/biocontainers/bioconductor-viseago/status
   :target: https://quay.io/repository/biocontainers/bioconductor-viseago
.. _`bioconductor-viseago/tags`: https://quay.io/repository/biocontainers/bioconductor-viseago?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-viseago";
        var versions = ["1.6.0","1.4.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-viseago/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-viseago/README.html
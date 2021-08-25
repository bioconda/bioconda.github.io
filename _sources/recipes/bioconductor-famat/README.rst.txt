:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-famat'
.. highlight: bash

bioconductor-famat
==================

.. conda:recipe:: bioconductor-famat
   :replaces_section_title:
   :noindex:

   Functional analysis of metabolic and transcriptomic data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/famat.html
   :license: GPL-3
   :recipe: /`bioconductor-famat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-famat/meta.yaml>`_

   Famat is made to collect data about lists of genes and metabolites provided by user\, and to visualize it through a Shiny app. Information collected is\: \- Pathways containing some of the user\'s genes and metabolites \(obtained using a pathway enrichment analysis\). \- Direct interactions between user\'s elements inside pathways. \- Information about elements \(their identifiers and descriptions\). \- Go terms enrichment analysis performed on user\'s genes. The Shiny app is composed of\: \- information about genes\, metabolites\, and direct interactions between them inside pathways. \- an heatmap showing which elements from the list are in pathways \(pathways are structured in hierarchies\). \- hierarchies of enriched go terms using Molecular Function and Biological Process.


.. conda:package:: bioconductor-famat

   |downloads_bioconductor-famat| |docker_bioconductor-famat|

   :versions:
      
      

      ``1.1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.0.0,<4.1.0``
   :depends bioconductor-go.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-keggrest: ``>=1.32.0,<1.33.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-reactome.db: ``>=1.76.0,<1.77.0``
   :depends bioconductor-rwikipathways: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-gprofiler2: 
   :depends r-magrittr: 
   :depends r-mpinet: 
   :depends r-ontologyindex: 
   :depends r-plotly: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinydashboard: 
   :depends r-stringr: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-famat

   and update with::

      conda update bioconductor-famat

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-famat:<tag>

   (see `bioconductor-famat/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-famat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-famat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-famat
   :alt:   (downloads)
.. |docker_bioconductor-famat| image:: https://quay.io/repository/biocontainers/bioconductor-famat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-famat
.. _`bioconductor-famat/tags`: https://quay.io/repository/biocontainers/bioconductor-famat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-famat";
        var versions = ["1.1.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-famat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-famat/README.html
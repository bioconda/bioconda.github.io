:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiomeprofiler'
.. highlight: bash

bioconductor-microbiomeprofiler
===============================

.. conda:recipe:: bioconductor-microbiomeprofiler
   :replaces_section_title:
   :noindex:

   An R\/shiny package for microbiome functional enrichment analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MicrobiomeProfiler.html
   :license: GPL-2
   :recipe: /`bioconductor-microbiomeprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiomeprofiler/meta.yaml>`_

   This is an R\/shiny package to perform functional enrichment analysis for microbiome data. This package was based on clusterProfiler. Moreover\, MicrobiomeProfiler support KEGG enrichment analysis\, COG enrichment analysis\, Microbe\-Disease association enrichment analysis\, Metabo\-Pathway analysis.


.. conda:package:: bioconductor-microbiomeprofiler

   |downloads_bioconductor-microbiomeprofiler| |docker_bioconductor-microbiomeprofiler|

   :versions:
      
      

      ``1.6.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends bioconductor-enrichplot: ``>=1.20.0,<1.21.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-config: 
   :depends r-dt: 
   :depends r-ggplot2: 
   :depends r-golem: 
   :depends r-gson: 
   :depends r-htmltools: 
   :depends r-magrittr: 
   :depends r-shiny: ``>=1.6.0``
   :depends r-shinycustomloader: 
   :depends r-shinywidgets: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-microbiomeprofiler

   and update with::

      conda update bioconductor-microbiomeprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-microbiomeprofiler:<tag>

   (see `bioconductor-microbiomeprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-microbiomeprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiomeprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiomeprofiler
   :alt:   (downloads)
.. |docker_bioconductor-microbiomeprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler
.. _`bioconductor-microbiomeprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiomeprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiomeprofiler";
        var versions = ["1.6.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiomeprofiler/README.html
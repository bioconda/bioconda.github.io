:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbgnview'
.. highlight: bash

bioconductor-sbgnview
=====================

.. conda:recipe:: bioconductor-sbgnview
   :replaces_section_title:
   :noindex:

   \"SBGNview\: Data Analysis\, Integration and Visualization on SBGN Pathways\"

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SBGNview.html
   :license: AGPL-3
   :recipe: /`bioconductor-sbgnview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview/meta.yaml>`_

   SBGNview is a tool set for pathway based data visalization\, integration and analysis. SBGNview is similar and complementary to the widely used Pathview\, with the following key features\: 1. Pathway definition by the widely adopted Systems Biology Graphical Notation \(SBGN\)\; 2. Supports multiple major pathway databases beyond KEGG \(Reactome\, MetaCyc\, SMPDB\, PANTHER\, METACROP\) and user defined pathways\; 3. Covers 5\,200 reference pathways and over 3\,000 species by default\; 4. Extensive graphics controls\, including glyph and edge attributes\, graph layout and sub\-pathway highlight\; 5. SBGN pathway data manipulation\, processing\, extraction and analysis.


.. conda:package:: bioconductor-sbgnview

   |downloads_bioconductor-sbgnview| |docker_bioconductor-sbgnview|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-keggrest: ``>=1.38.0,<1.39.0``
   :depends bioconductor-pathview: ``>=1.38.0,<1.39.0``
   :depends bioconductor-sbgnview.data: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-bookdown: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-rdpack: 
   :depends r-rmarkdown: 
   :depends r-rsvg: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sbgnview

   and update with::

      conda update bioconductor-sbgnview

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sbgnview:<tag>

   (see `bioconductor-sbgnview/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sbgnview| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sbgnview.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sbgnview
   :alt:   (downloads)
.. |docker_bioconductor-sbgnview| image:: https://quay.io/repository/biocontainers/bioconductor-sbgnview/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sbgnview
.. _`bioconductor-sbgnview/tags`: https://quay.io/repository/biocontainers/bioconductor-sbgnview?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sbgnview";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sbgnview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sbgnview/README.html
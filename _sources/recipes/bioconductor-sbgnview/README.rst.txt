:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sbgnview'
.. highlight: bash

bioconductor-sbgnview
=====================

.. conda:recipe:: bioconductor-sbgnview
   :replaces_section_title:
   :noindex:

   \"SBGNview\: Data Analysis\, Integration and Visualization on SBGN Pathways\"

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SBGNview.html
   :license: AGPL-3
   :recipe: /`bioconductor-sbgnview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sbgnview/meta.yaml>`_

   SBGNview is a tool set for pathway based data visalization\, integration and analysis. SBGNview is similar and complementary to the widely used Pathview\, with the following key features\: 1. Pathway definition by the widely adopted Systems Biology Graphical Notation \(SBGN\)\; 2. Supports multiple major pathway databases beyond KEGG \(Reactome\, MetaCyc\, SMPDB\, PANTHER\, METACROP\) and user defined pathways\; 3. Covers 5\,200 reference pathways and over 3\,000 species by default\; 4. Extensive graphics controls\, including glyph and edge attributes\, graph layout and sub\-pathway highlight\; 5. SBGN pathway data manipulation\, processing\, extraction and analysis.


.. conda:package:: bioconductor-sbgnview

   |downloads_bioconductor-sbgnview| |docker_bioconductor-sbgnview|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-keggrest: ``>=1.40.0,<1.41.0``
   :depends bioconductor-pathview: ``>=1.40.0,<1.41.0``
   :depends bioconductor-sbgnview.data: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sbgnview

   and update with::

      mamba update bioconductor-sbgnview

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sbgnview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.1"];
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
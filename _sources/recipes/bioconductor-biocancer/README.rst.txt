:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocancer'
.. highlight: bash

bioconductor-biocancer
======================

.. conda:recipe:: bioconductor-biocancer
   :replaces_section_title:
   :noindex:

   Interactive Multi\-Omics Cancers Data Visualization and Analysis

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/bioCancer.html
   :license: AGPL-3 | file LICENSE
   :recipe: /`bioconductor-biocancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocancer/meta.yaml>`_

   bioCancer is a Shiny App to visualize and analyse interactively Multi\-Assays of Cancer Genomic Data.


.. conda:package:: bioconductor-biocancer

   |downloads_bioconductor-biocancer| |docker_bioconductor-biocancer|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-annotationfuncs: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-clusterprofiler: ``>=3.18.0,<3.19.0``
   :depends bioconductor-dose: ``>=3.16.0,<3.17.0``
   :depends bioconductor-genetclassifier: ``>=1.30.0,<1.31.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.12.0,<3.13.0``
   :depends bioconductor-reactome.db: ``>=1.74.0,<1.75.0``
   :depends bioconductor-reactomepa: ``>=1.34.0,<1.35.0``
   :depends r-algdesign: ``>=1.1.7.3``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-cgdsr: ``>=1.2.6``
   :depends r-diagrammer: ``>=1.0.5``
   :depends r-dplyr: ``>=0.8.5``
   :depends r-dt: ``>=0.12``
   :depends r-htmlwidgets: 
   :depends r-import: ``>=1.1.0``
   :depends r-plyr: 
   :depends r-radiant.data: ``>=1.0.6``
   :depends r-shiny: ``>=1.0.5``
   :depends r-shinythemes: 
   :depends r-tibble: 
   :depends r-visnetwork: 
   :depends r-xml: ``>=3.99``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocancer

   and update with::

      conda update bioconductor-biocancer

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocancer:<tag>

   (see `bioconductor-biocancer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocancer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocancer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocancer
   :alt:   (downloads)
.. |docker_bioconductor-biocancer| image:: https://quay.io/repository/biocontainers/bioconductor-biocancer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocancer
.. _`bioconductor-biocancer/tags`: https://quay.io/repository/biocontainers/bioconductor-biocancer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocancer";
        var versions = ["1.18.0","1.18.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocancer/README.html
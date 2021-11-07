:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellhts2'
.. highlight: bash

bioconductor-cellhts2
=====================

.. conda:recipe:: bioconductor-cellhts2
   :replaces_section_title:
   :noindex:

   Analysis of cell\-based screens \- revised version of cellHTS

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/cellHTS2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cellhts2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhts2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhts2/meta.yaml>`_

   This package provides tools for the analysis of high\-throughput assays that were performed in microtitre plate formats \(including but not limited to 384\-well plates\). The functionality includes data import and management\, normalisation\, quality assessment\, replicate summarisation and statistical scoring. A webpage that provides a detailed graphical overview over the data and analysis results is produced. In our work\, we have applied the package to RNAi screens on fly and human cells\, and for screens of yeast libraries. See \?cellHTS2 for a brief introduction.


.. conda:package:: bioconductor-cellhts2

   |downloads_bioconductor-cellhts2| |docker_bioconductor-cellhts2|

   :versions:
      
      

      ``2.58.0-0``,  ``2.56.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-1``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-category: ``>=2.60.0,<2.61.0``
   :depends bioconductor-genefilter: ``>=1.76.0,<1.77.0``
   :depends bioconductor-gseabase: ``>=1.56.0,<1.57.0``
   :depends bioconductor-splots: ``>=1.60.0,<1.61.0``
   :depends bioconductor-vsn: ``>=3.62.0,<3.63.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-hwriter: 
   :depends r-locfit: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cellhts2

   and update with::

      conda update bioconductor-cellhts2

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellhts2:<tag>

   (see `bioconductor-cellhts2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellhts2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellhts2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellhts2
   :alt:   (downloads)
.. |docker_bioconductor-cellhts2| image:: https://quay.io/repository/biocontainers/bioconductor-cellhts2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellhts2
.. _`bioconductor-cellhts2/tags`: https://quay.io/repository/biocontainers/bioconductor-cellhts2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellhts2";
        var versions = ["2.58.0","2.56.0","2.52.0","2.50.0","2.48.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellhts2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellhts2/README.html
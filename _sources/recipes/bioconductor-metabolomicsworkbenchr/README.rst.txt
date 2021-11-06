:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metabolomicsworkbenchr'
.. highlight: bash

bioconductor-metabolomicsworkbenchr
===================================

.. conda:recipe:: bioconductor-metabolomicsworkbenchr
   :replaces_section_title:
   :noindex:

   Metabolomics Workbench in R

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/metabolomicsWorkbenchR.html
   :license: GPL-3
   :recipe: /`bioconductor-metabolomicsworkbenchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metabolomicsworkbenchr/meta.yaml>`_

   This package provides functions for interfacing with the Metabolomics Workbench RESTful API. Study\, compound\, protein and gene information can be searched for using the API. Methods to obtain study data in common Bioconductor formats such as SummarizedExperiment and MultiAssayExperiment are also included.


.. conda:package:: bioconductor-metabolomicsworkbenchr

   |downloads_bioconductor-metabolomicsworkbenchr| |docker_bioconductor-metabolomicsworkbenchr|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-multiassayexperiment: ``>=1.20.0,<1.21.0``
   :depends bioconductor-struct: ``>=1.6.0,<1.7.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metabolomicsworkbenchr

   and update with::

      conda update bioconductor-metabolomicsworkbenchr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-metabolomicsworkbenchr:<tag>

   (see `bioconductor-metabolomicsworkbenchr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-metabolomicsworkbenchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metabolomicsworkbenchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metabolomicsworkbenchr
   :alt:   (downloads)
.. |docker_bioconductor-metabolomicsworkbenchr| image:: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr
.. _`bioconductor-metabolomicsworkbenchr/tags`: https://quay.io/repository/biocontainers/bioconductor-metabolomicsworkbenchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metabolomicsworkbenchr";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metabolomicsworkbenchr/README.html
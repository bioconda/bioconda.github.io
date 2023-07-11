:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbpmanager'
.. highlight: bash

bioconductor-cbpmanager
=======================

.. conda:recipe:: bioconductor-cbpmanager
   :replaces_section_title:
   :noindex:

   Generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/cbpManager.html
   :license: AGPL-3 + file LICENSE
   :recipe: /`bioconductor-cbpmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbpmanager/meta.yaml>`_

   This R package provides an R Shiny application that enables the user to generate\, manage\, and edit data and metadata files suitable for the import in cBioPortal for Cancer Genomics. Create cancer studies and edit its metadata. Upload mutation data of a patient that will be concatenated to the data\_mutation\_extended.txt file of the study. Create and edit clinical patient data\, sample data\, and timeline data. Create custom timeline tracks for patients.


.. conda:package:: bioconductor-cbpmanager

   |downloads_bioconductor-cbpmanager| |docker_bioconductor-cbpmanager|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-basilisk: ``>=1.12.0,<1.13.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-jsonlite: 
   :depends r-magrittr: 
   :depends r-markdown: 
   :depends r-plyr: 
   :depends r-rapportools: 
   :depends r-reticulate: 
   :depends r-rintrojs: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinycssloaders: 
   :depends r-shinydashboard: 
   :depends r-vroom: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cbpmanager

   and update with::

      conda update bioconductor-cbpmanager

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cbpmanager:<tag>

   (see `bioconductor-cbpmanager/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cbpmanager| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbpmanager.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbpmanager
   :alt:   (downloads)
.. |docker_bioconductor-cbpmanager| image:: https://quay.io/repository/biocontainers/bioconductor-cbpmanager/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbpmanager
.. _`bioconductor-cbpmanager/tags`: https://quay.io/repository/biocontainers/bioconductor-cbpmanager?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbpmanager";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbpmanager/README.html
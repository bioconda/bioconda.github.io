:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biocfhir'
.. highlight: bash

bioconductor-biocfhir
=====================

.. conda:recipe:: bioconductor-biocfhir
   :replaces_section_title:
   :noindex:

   Illustration of FHIR ingestion and transformation using R

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/BiocFHIR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biocfhir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfhir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biocfhir/meta.yaml>`_

   FHIR R4 bundles in JSON format are derived from https\:\/\/synthea.mitre.org\/downloads. Transformation inspired by a kaggle notebook published by Dr Alexander Scarlat\, https\:\/\/www.kaggle.com\/code\/drscarlat\/fhir\-starter\-parse\-healthcare\-bundles\-into\-tables. This is a very limited illustration of some basic parsing and reorganization processes.  Additional tooling will be required to move beyond the Synthea data illustrations.


.. conda:package:: bioconductor-biocfhir

   |downloads_bioconductor-biocfhir| |docker_bioconductor-biocfhir|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocbaseutils: ``>=1.2.0,<1.3.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-jsonlite: 
   :depends r-shiny: 
   :depends r-tidyr: 
   :depends r-visnetwork: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-biocfhir

   and update with::

      conda update bioconductor-biocfhir

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biocfhir:<tag>

   (see `bioconductor-biocfhir/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biocfhir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biocfhir.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biocfhir
   :alt:   (downloads)
.. |docker_bioconductor-biocfhir| image:: https://quay.io/repository/biocontainers/bioconductor-biocfhir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biocfhir
.. _`bioconductor-biocfhir/tags`: https://quay.io/repository/biocontainers/bioconductor-biocfhir?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biocfhir";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biocfhir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biocfhir/README.html
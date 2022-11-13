:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-macarron'
.. highlight: bash

bioconductor-macarron
=====================

.. conda:recipe:: bioconductor-macarron
   :replaces_section_title:
   :noindex:

   Prioritization of potentially bioactive metabolic features from epidemiological and environmental metabolomics datasets

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/Macarron.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-macarron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-macarron/meta.yaml>`_

   Macarron is a workflow for the prioritization of potentially bioactive metabolites from metabolomics experiments. Prioritization integrates strengths of evidences of bioactivity such as covariation with a known metabolite\, abundance relative to a known metabolite and association with an environmental or phenotypic indicator of bioactivity. Broadly\, the workflow consists of stratified clustering of metabolic spectral features which co\-vary in abundance in a condition\, transfer of functional annotations\, estimation of relative abundance and differential abundance analysis to identify associations between features and phenotype\/condition.


.. conda:package:: bioconductor-macarron

   |downloads_bioconductor-macarron| |docker_bioconductor-macarron|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-delayedarray: ``>=0.24.0,<0.25.0``
   :depends bioconductor-maaslin2: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :depends r-dynamictreecut: 
   :depends r-ff: 
   :depends r-logging: 
   :depends r-plyr: 
   :depends r-psych: 
   :depends r-rcurl: 
   :depends r-rjsonio: 
   :depends r-wgcna: 
   :depends r-xml2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-macarron

   and update with::

      conda update bioconductor-macarron

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-macarron:<tag>

   (see `bioconductor-macarron/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-macarron| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-macarron.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-macarron
   :alt:   (downloads)
.. |docker_bioconductor-macarron| image:: https://quay.io/repository/biocontainers/bioconductor-macarron/status
   :target: https://quay.io/repository/biocontainers/bioconductor-macarron
.. _`bioconductor-macarron/tags`: https://quay.io/repository/biocontainers/bioconductor-macarron?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-macarron";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-macarron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-macarron/README.html
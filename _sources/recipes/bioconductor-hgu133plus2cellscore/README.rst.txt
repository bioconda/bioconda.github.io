:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2cellscore'
.. highlight: bash

bioconductor-hgu133plus2cellscore
=================================

.. conda:recipe:: bioconductor-hgu133plus2cellscore
   :replaces_section_title:
   :noindex:

   CellScore Standard Cell Types Expression Dataset \[hgu133plus2\]

   :homepage: https://bioconductor.org/packages/3.14/data/experiment/html/hgu133plus2CellScore.html
   :license: GPL-3
   :recipe: /`bioconductor-hgu133plus2cellscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2cellscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2cellscore/meta.yaml>`_

   The CellScore Standard Dataset contains expression data from a wide variety of human cells and tissues\, which should be used as standard cell types in the calculation of the CellScore. All data was curated from public databases such as Gene Expression Omnibus \(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/\) or ArrayExpress \(https\:\/\/www.ebi.ac.uk\/arrayexpress\/\). This standard dataset only contains data from the Affymetrix GeneChip Human Genome U133 Plus 2.0 microarrays. Samples were manually annotated using the database information or consulting the publications in which the datasets originated. The sample annotations are stored in the phenoData slot of the expressionSet object. Raw data \(CEL files\) were processed with the affy package to generate present\/absent calls \(mas5calls\) and background\-subtracted values\, which were then normalized by the R\-package yugene to yield the final expression values for the standard expression matrix. The annotation table for the microarray was retrieved from the BioC annotation package hgu133plus2. All data are stored in an expressionSet object.


.. conda:package:: bioconductor-hgu133plus2cellscore

   |downloads_bioconductor-hgu133plus2cellscore| |docker_bioconductor-hgu133plus2cellscore|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133plus2cellscore

   and update with::

      conda update bioconductor-hgu133plus2cellscore

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133plus2cellscore:<tag>

   (see `bioconductor-hgu133plus2cellscore/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133plus2cellscore| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133plus2cellscore.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133plus2cellscore
   :alt:   (downloads)
.. |docker_bioconductor-hgu133plus2cellscore| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore
.. _`bioconductor-hgu133plus2cellscore/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133plus2cellscore?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hgu133plus2cellscore";
        var versions = ["1.14.0","1.12.0","1.10.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133plus2cellscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133plus2cellscore/README.html
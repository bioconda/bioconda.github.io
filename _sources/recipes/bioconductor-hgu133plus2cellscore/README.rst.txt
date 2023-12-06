:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133plus2cellscore'
.. highlight: bash

bioconductor-hgu133plus2cellscore
=================================

.. conda:recipe:: bioconductor-hgu133plus2cellscore
   :replaces_section_title:
   :noindex:

   CellScore Standard Cell Types Expression Dataset \[hgu133plus2\]

   :homepage: https://bioconductor.org/packages/3.17/data/experiment/html/hgu133plus2CellScore.html
   :license: GPL-3
   :recipe: /`bioconductor-hgu133plus2cellscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2cellscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133plus2cellscore/meta.yaml>`_

   The CellScore Standard Dataset contains expression data from a wide variety of human cells and tissues\, which should be used as standard cell types in the calculation of the CellScore. All data was curated from public databases such as Gene Expression Omnibus \(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/\) or ArrayExpress \(https\:\/\/www.ebi.ac.uk\/arrayexpress\/\). This standard dataset only contains data from the Affymetrix GeneChip Human Genome U133 Plus 2.0 microarrays. Samples were manually annotated using the database information or consulting the publications in which the datasets originated. The sample annotations are stored in the phenoData slot of the expressionSet object. Raw data \(CEL files\) were processed with the affy package to generate present\/absent calls \(mas5calls\) and background\-subtracted values\, which were then normalized by the R\-package yugene to yield the final expression values for the standard expression matrix. The annotation table for the microarray was retrieved from the BioC annotation package hgu133plus2. All data are stored in an expressionSet object.


.. conda:package:: bioconductor-hgu133plus2cellscore

   |downloads_bioconductor-hgu133plus2cellscore| |docker_bioconductor-hgu133plus2cellscore|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-data-packages: ``>=20231203``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install bioconductor-hgu133plus2cellscore

   and update with::

      mamba update bioconductor-hgu133plus2cellscore

  To create a new environment, run::

      mamba create --name myenvname bioconductor-hgu133plus2cellscore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.22.0","1.20.0","1.18.0","1.14.0","1.14.0"];
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
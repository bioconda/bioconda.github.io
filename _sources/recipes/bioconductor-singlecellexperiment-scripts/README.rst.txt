:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-singlecellexperiment-scripts'
.. highlight: bash

bioconductor-singlecellexperiment-scripts
=========================================

.. conda:recipe:: bioconductor-singlecellexperiment-scripts
   :replaces_section_title:

   A set of wrappers for operations associated with the SingleCellExperiment package. Functions in R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-singlecellexperiment-scripts
   :license: GPL / GPL-3
   :recipe: /`bioconductor-singlecellexperiment-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-singlecellexperiment-scripts/meta.yaml>`_

   


.. conda:package:: bioconductor-singlecellexperiment-scripts

   |downloads_bioconductor-singlecellexperiment-scripts| |docker_bioconductor-singlecellexperiment-scripts|

   :versions: 0.0.3-0, 0.0.2-0, 0.0.1-0
   
   :depends bioconductor-singlecellexperiment: 
   
   :depends r-base: 
   
   :depends r-optparse: 
   
   :depends r-workflowscriptscommon: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-singlecellexperiment-scripts

   and update with::

      conda update bioconductor-singlecellexperiment-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-singlecellexperiment-scripts:<tag>

   (see `bioconductor-singlecellexperiment-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-singlecellexperiment-scripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-singlecellexperiment-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-singlecellexperiment-scripts| image:: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts
.. _`bioconductor-singlecellexperiment-scripts/tags`: https://quay.io/repository/biocontainers/bioconductor-singlecellexperiment-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-singlecellexperiment-scripts/README.html
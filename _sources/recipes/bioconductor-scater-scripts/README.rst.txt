.. title:: Package Recipe 'bioconductor-scater-scripts'
.. highlight: bash


bioconductor-scater-scripts
===========================

.. conda:recipe:: bioconductor-scater-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the Scater package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-scater-scripts
   :license: GPL / GPL-3
   :recipe: /`bioconductor-scater-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scater-scripts/meta.yaml>`_

   


.. conda:package:: bioconductor-scater-scripts

   |downloads_bioconductor-scater-scripts| |docker_bioconductor-scater-scripts|

   :versions: 0.0.4, 0.0.3, 0.0.2

   :depends: :conda:package:`bioconductor-biobase`  :conda:package:`bioconductor-scater` 1.8.4.* :conda:package:`bioconductor-singlecellexperiment-scripts`  :conda:package:`r-base` 3.5.1.* :conda:package:`r-optparse`  :conda:package:`r-rtsne`  :conda:package:`r-workflowscriptscommon`  

   :required~by: |required_by_bioconductor-scater-scripts|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scater-scripts

   and update with::

      conda update bioconductor-scater-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scater-scripts


.. |required_by_bioconductor-scater-scripts| conda:required_by:: bioconductor-scater-scripts
.. |downloads_bioconductor-scater-scripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scater-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scater-scripts| image:: https://quay.io/repository/biocontainers/bioconductor-scater-scripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scater-scripts







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html


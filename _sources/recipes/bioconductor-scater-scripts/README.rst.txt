:orphan:  .. only available via index, not via toctree

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

   :versions: 0.0.4-0, 0.0.3-1, 0.0.3-0, 0.0.2-0
   
   :depends bioconductor-biobase: 
   
   :depends bioconductor-scater: 1.8.4.*
   
   :depends bioconductor-singlecellexperiment-scripts: 
   
   :depends r-base: 3.5.1.*
   
   :depends r-optparse: 
   
   :depends r-rtsne: 
   
   :depends r-workflowscriptscommon: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scater-scripts

   and update with::

      conda update bioconductor-scater-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scater-scripts:<tag>

   (see `bioconductor-scater-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scater-scripts| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scater-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scater-scripts| image:: https://quay.io/repository/biocontainers/bioconductor-scater-scripts/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scater-scripts
.. _`bioconductor-scater-scripts/tags`: https://quay.io/repository/biocontainers/bioconductor-scater-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scater-scripts/README.html
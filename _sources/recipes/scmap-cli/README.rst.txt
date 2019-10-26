:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scmap-cli'
.. highlight: bash

scmap-cli
=========

.. conda:recipe:: scmap-cli
   :replaces_section_title:

   CLI scripts for the scmap package

   :homepage: https://github.com/ebi-gene-expression-group/scmap-cli
   :license: GPL / Apache 2.0
   :recipe: /`scmap-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmap-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scmap-cli/meta.yaml>`_

   A set of wrappers for operations associated with the scmap package.
   Functions in R packages are hard to call when building workflows outside
   of R\, so this package adds a set of simple wrappers with robust argument
   parsing. Intermediate steps are currently mainly serialized R objects\,
   but the ultimate objective is to have language\-agnostic intermediate
   formats allowing composite workflows using a variety of software
   packages.



.. conda:package:: scmap-cli

   |downloads_scmap-cli| |docker_scmap-cli|

   :versions: 0.0.4-0, 0.0.3-0, 0.0.2-1, 0.0.2-0, 0.0.1-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-loomexperiment: 
   :depends bioconductor-scmap: >=1.6.0,<1.7
   :depends bioconductor-singlecellexperiment: 
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scmap-cli

   and update with::

      conda update scmap-cli

   or use the docker container::

      docker pull quay.io/biocontainers/scmap-cli:<tag>

   (see `scmap-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scmap-cli| image:: https://img.shields.io/conda/dn/bioconda/scmap-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scmap-cli
   :alt:   (downloads)
.. |docker_scmap-cli| image:: https://quay.io/repository/biocontainers/scmap-cli/status
   :target: https://quay.io/repository/biocontainers/scmap-cli
.. _`scmap-cli/tags`: https://quay.io/repository/biocontainers/scmap-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scmap-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scmap-cli/README.html
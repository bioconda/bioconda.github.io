:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scater-scripts'
.. highlight: bash

scater-scripts
==============

.. conda:recipe:: scater-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the Scater package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/bioconductor-scater-scripts
   :license: GPL / GPL-3
   :recipe: /`scater-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scater-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scater-scripts/meta.yaml>`_

   


.. conda:package:: scater-scripts

   |downloads_scater-scripts| |docker_scater-scripts|

   :versions: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scater-scripts

   and update with::

      conda update scater-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/scater-scripts:<tag>

   (see `scater-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_scater-scripts| image:: https://img.shields.io/conda/dn/bioconda/scater-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_scater-scripts| image:: https://quay.io/repository/biocontainers/scater-scripts/status
   :target: https://quay.io/repository/biocontainers/scater-scripts
.. _`scater-scripts/tags`: https://quay.io/repository/biocontainers/scater-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scater-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scater-scripts/README.html
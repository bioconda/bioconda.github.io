:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dropletutils-scripts'
.. highlight: bash

dropletutils-scripts
====================

.. conda:recipe:: dropletutils-scripts
   :replaces_section_title:

   CLI scripts for the DropletUtils package

   :homepage: https://github.com/ebi-gene-expression-group/dropletutils-scripts
   :license: GPL / Apache 2.0
   :recipe: /`dropletutils-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropletutils-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dropletutils-scripts/meta.yaml>`_

   A set of wrappers for operations associated with Aaron Lun\'s
   DropletUtils  package. Functions in R packages are hard to call when
   building workflows outside of R\, so this package adds a set of simple
   wrappers with robust argument parsing. Intermediate steps are currently
   mainly serialized R objects\, but the ultimate objective is to have
   language\-agnostic intermediate formats allowing composite workflows using a
   variety of software packages.



.. conda:package:: dropletutils-scripts

   |downloads_dropletutils-scripts| |docker_dropletutils-scripts|

   :versions: 0.0.3-0, 0.0.2-1, 0.0.1-1, 0.0.1-0
   
   :depends bioconductor-biobase: 
   :depends bioconductor-dropletutils: >=1.3,<1.5
   :depends bioconductor-singlecellexperiment: 
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dropletutils-scripts

   and update with::

      conda update dropletutils-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/dropletutils-scripts:<tag>

   (see `dropletutils-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_dropletutils-scripts| image:: https://img.shields.io/conda/dn/bioconda/dropletutils-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/dropletutils-scripts
   :alt:   (downloads)
.. |docker_dropletutils-scripts| image:: https://quay.io/repository/biocontainers/dropletutils-scripts/status
   :target: https://quay.io/repository/biocontainers/dropletutils-scripts
.. _`dropletutils-scripts/tags`: https://quay.io/repository/biocontainers/dropletutils-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dropletutils-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dropletutils-scripts/README.html
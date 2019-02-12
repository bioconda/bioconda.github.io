:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seurat-scripts'
.. highlight: bash

r-seurat-scripts
================

.. conda:recipe:: r-seurat-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the Seurat package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/r-seurat-scripts
   :license: GPL / GPL-3
   :recipe: /`r-seurat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seurat-scripts/meta.yaml>`_

   


.. conda:package:: r-seurat-scripts

   |downloads_r-seurat-scripts| |docker_r-seurat-scripts|

   :versions: 0.0.4-2, 0.0.4-1, 0.0.3-0, 0.0.2-0, 0.0.1-0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends r-optparse: 
   
   :depends r-seurat: 2.3.1.*
   
   :depends r-workflowscriptscommon: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-seurat-scripts

   and update with::

      conda update r-seurat-scripts

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-seurat-scripts:<tag>

   (see `r-seurat-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_r-seurat-scripts| image:: https://img.shields.io/conda/dn/bioconda/r-seurat-scripts.svg?style=flat
   :alt:   (downloads)
.. |docker_r-seurat-scripts| image:: https://quay.io/repository/biocontainers/r-seurat-scripts/status
   :target: https://quay.io/repository/biocontainers/r-seurat-scripts
.. _`r-seurat-scripts/tags`: https://quay.io/repository/biocontainers/r-seurat-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seurat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seurat-scripts/README.html
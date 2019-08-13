:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seurat-scripts'
.. highlight: bash

seurat-scripts
==============

.. conda:recipe:: seurat-scripts
   :replaces_section_title:

   A set of wrappers for individual components of the Seurat package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/r-seurat-scripts
   :license: GPL / GPL-3
   :recipe: /`seurat-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seurat-scripts/meta.yaml>`_

   


.. conda:package:: seurat-scripts

   |downloads_seurat-scripts| |docker_seurat-scripts|

   :versions: 0.0.5-1, 0.0.5-0
   
   :depends mscorefonts: 
   :depends r-base: >=3.4,<3.5.0a0
   :depends r-optparse: 
   :depends r-seurat: 2.3.1.*
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seurat-scripts

   and update with::

      conda update seurat-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/seurat-scripts:<tag>

   (see `seurat-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_seurat-scripts| image:: https://img.shields.io/conda/dn/bioconda/seurat-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/seurat-scripts
   :alt:   (downloads)
.. |docker_seurat-scripts| image:: https://quay.io/repository/biocontainers/seurat-scripts/status
   :target: https://quay.io/repository/biocontainers/seurat-scripts
.. _`seurat-scripts/tags`: https://quay.io/repository/biocontainers/seurat-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seurat-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seurat-scripts/README.html
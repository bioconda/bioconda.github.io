:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scran-cli'
.. highlight: bash

scran-cli
=========

.. conda:recipe:: scran-cli
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the scran R package. Scran implements functions for low\-level analyses of single\-cell RNA\-seq data.Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing.

   :homepage: https://github.com/ebi-gene-expression-group/scran-cli
   :license: Apache / Apache 2
   :recipe: /`scran-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scran-cli/meta.yaml>`_

   


.. conda:package:: scran-cli

   |downloads_scran-cli| |docker_scran-cli|

   :versions:
      
      

      ``v0.0.1-0``

      

   
   :depends bioconductor-scran: ``1.12.1.*``
   :depends dropletutils-scripts: 
   :depends r-igraph: 
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scran-cli

   and update with::

      conda update scran-cli

   or use the docker container::

      docker pull quay.io/biocontainers/scran-cli:<tag>

   (see `scran-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scran-cli| image:: https://img.shields.io/conda/dn/bioconda/scran-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scran-cli
   :alt:   (downloads)
.. |docker_scran-cli| image:: https://quay.io/repository/biocontainers/scran-cli/status
   :target: https://quay.io/repository/biocontainers/scran-cli
.. _`scran-cli/tags`: https://quay.io/repository/biocontainers/scran-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scran-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scran-cli/README.html
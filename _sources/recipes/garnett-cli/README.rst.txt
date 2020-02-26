:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'garnett-cli'
.. highlight: bash

garnett-cli
===========

.. conda:recipe:: garnett-cli
   :replaces_section_title:

   Collection of wrapper scripts for the Garnett scRNAseq cell type classification tool.

   :homepage: https://github.com/ebi-gene-expression-group/garnett-cli
   :license: Apache / Apache-2.0
   :recipe: /`garnett-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/garnett-cli/meta.yaml>`_

   


.. conda:package:: garnett-cli

   |downloads_garnett-cli| |docker_garnett-cli|

   :versions: 0.0.3-0, 0.0.2-0, 0.0.1-0, v0.0.1-0
   
   :depends bioconductor-org.hs.eg.db: 
   :depends bioconductor-org.mm.eg.db: 
   :depends bioconductor-singlecellexperiment: 1.6.0.*
   :depends monocle3-cli: 0.0.6.*
   :depends r-garnett: 0.2.8.*
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install garnett-cli

   and update with::

      conda update garnett-cli

   or use the docker container::

      docker pull quay.io/biocontainers/garnett-cli:<tag>

   (see `garnett-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_garnett-cli| image:: https://img.shields.io/conda/dn/bioconda/garnett-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/garnett-cli
   :alt:   (downloads)
.. |docker_garnett-cli| image:: https://quay.io/repository/biocontainers/garnett-cli/status
   :target: https://quay.io/repository/biocontainers/garnett-cli
.. _`garnett-cli/tags`: https://quay.io/repository/biocontainers/garnett-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/garnett-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/garnett-cli/README.html
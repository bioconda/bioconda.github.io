:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'singlecellnet-cli'
.. highlight: bash

singlecellnet-cli
=================

.. conda:recipe:: singlecellnet-cli
   :replaces_section_title:
   :noindex:

   A set of command\-line wrappers for the core functions in the SingleCellNet package.

   :homepage: https://github.com/ebi-gene-expression-group/singlecellnet-cli
   :license: Apache-2.0
   :recipe: /`singlecellnet-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecellnet-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/singlecellnet-cli/meta.yaml>`_

   


.. conda:package:: singlecellnet-cli

   |downloads_singlecellnet-cli| |docker_singlecellnet-cli|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends bats: 
   :depends bioconductor-singlecellexperiment: 
   :depends r-optparse: 
   :depends r-singlecellnet: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install singlecellnet-cli

   and update with::

      conda update singlecellnet-cli

   or use the docker container::

      docker pull quay.io/biocontainers/singlecellnet-cli:<tag>

   (see `singlecellnet-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_singlecellnet-cli| image:: https://img.shields.io/conda/dn/bioconda/singlecellnet-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/singlecellnet-cli
   :alt:   (downloads)
.. |docker_singlecellnet-cli| image:: https://quay.io/repository/biocontainers/singlecellnet-cli/status
   :target: https://quay.io/repository/biocontainers/singlecellnet-cli
.. _`singlecellnet-cli/tags`: https://quay.io/repository/biocontainers/singlecellnet-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/singlecellnet-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/singlecellnet-cli/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scpred-cli'
.. highlight: bash

scpred-cli
==========

.. conda:recipe:: scpred-cli
   :replaces_section_title:
   :noindex:

   A set of command\-line wrappers for the core functions in the scPred package.

   :homepage: https://github.com/ebi-gene-expression-group/scPred-cli
   :license: Apache-2.0
   :recipe: /`scpred-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scpred-cli/meta.yaml>`_

   


.. conda:package:: scpred-cli

   |downloads_scpred-cli| |docker_scpred-cli|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends r-optparse: 
   :depends r-scpred: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scpred-cli

   and update with::

      conda update scpred-cli

   or use the docker container::

      docker pull quay.io/biocontainers/scpred-cli:<tag>

   (see `scpred-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_scpred-cli| image:: https://img.shields.io/conda/dn/bioconda/scpred-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/scpred-cli
   :alt:   (downloads)
.. |docker_scpred-cli| image:: https://quay.io/repository/biocontainers/scpred-cli/status
   :target: https://quay.io/repository/biocontainers/scpred-cli
.. _`scpred-cli/tags`: https://quay.io/repository/biocontainers/scpred-cli?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scpred-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scpred-cli/README.html
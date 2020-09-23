:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-workflow-executor'
.. highlight: bash

galaxy-workflow-executor
========================

.. conda:recipe:: galaxy-workflow-executor
   :replaces_section_title:
   :noindex:

   Execute workflows on Galaxy through the CLI

   :homepage: https://github.com/ebi-gene-expression-group/galaxy-workflow-executor
   :license: Apache / Apache-2.0
   :recipe: /`galaxy-workflow-executor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-workflow-executor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-workflow-executor/meta.yaml>`_

   


.. conda:package:: galaxy-workflow-executor

   |downloads_galaxy-workflow-executor| |docker_galaxy-workflow-executor|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``

      

   
   :depends bioblend: ``0.13.0``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-workflow-executor

   and update with::

      conda update galaxy-workflow-executor

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-workflow-executor:<tag>

   (see `galaxy-workflow-executor/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-workflow-executor| image:: https://img.shields.io/conda/dn/bioconda/galaxy-workflow-executor.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-workflow-executor
   :alt:   (downloads)
.. |docker_galaxy-workflow-executor| image:: https://quay.io/repository/biocontainers/galaxy-workflow-executor/status
   :target: https://quay.io/repository/biocontainers/galaxy-workflow-executor
.. _`galaxy-workflow-executor/tags`: https://quay.io/repository/biocontainers/galaxy-workflow-executor?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-workflow-executor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-workflow-executor/README.html
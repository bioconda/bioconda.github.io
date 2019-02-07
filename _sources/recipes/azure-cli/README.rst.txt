.. title:: Package Recipe 'azure-cli'
.. highlight: bash


azure-cli
=========

.. conda:recipe:: azure-cli
   :replaces_section_title:

   Microsoft Azure Cross Platform Command Line

   :homepage: https://github.com/azure/azure-xplat-cli
   :license: Apache v2.0
   :recipe: /`azure-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/azure-cli/meta.yaml>`_

   


.. conda:package:: azure-cli

   |downloads_azure-cli| |docker_azure-cli|

   :versions: 0.10.3

   :depends: :conda:package:`nodejs`  

   :required~by: |required_by_azure-cli|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install azure-cli

   and update with::

      conda update azure-cli

   or use the docker container::

      docker pull quay.io/repository/biocontainers/azure-cli


.. |required_by_azure-cli| conda:required_by:: azure-cli
.. |downloads_azure-cli| image:: https://img.shields.io/conda/dn/bioconda/azure-cli.svg?style=flat
   :alt:   (downloads)
.. |docker_azure-cli| image:: https://quay.io/repository/biocontainers/azure-cli/status
   :target: https://quay.io/repository/biocontainers/azure-cli







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/azure-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/azure-cli/README.html


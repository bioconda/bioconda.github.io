:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'embl-api-validator'
.. highlight: bash

embl-api-validator
==================

.. conda:recipe:: embl-validator
   :replaces_section_title:

   ENA flat file validator for submission

   :homepage: http://www.ebi.ac.uk/ena/software/flat-file-validator
   :license: Apache-2-0
   :recipe: /`embl-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embl-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embl-validator/meta.yaml>`_

   


.. conda:package:: embl-api-validator

   |downloads_embl-api-validator| |docker_embl-api-validator|

   :versions: 1.1.180-1, 1.1.180-0, 1.1.173-0
   
   :depends openjdk: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install embl-api-validator

   and update with::

      conda update embl-api-validator

   or use the docker container::

      docker pull quay.io/biocontainers/embl-api-validator:<tag>

   (see `embl-api-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_embl-api-validator| image:: https://img.shields.io/conda/dn/bioconda/embl-api-validator.svg?style=flat
   :alt:   (downloads)
.. |docker_embl-api-validator| image:: https://quay.io/repository/biocontainers/embl-api-validator/status
   :target: https://quay.io/repository/biocontainers/embl-api-validator
.. _`embl-api-validator/tags`: https://quay.io/repository/biocontainers/embl-api-validator?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/embl-api-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/embl-api-validator/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wes-service-client'
.. highlight: bash

wes-service-client
==================

.. conda:recipe:: wes-service-client
   :replaces_section_title:

   Implementation of the GA4GH Workflow Execution Service\, a REST service for running workflows\; client support only

   :homepage: https://github.com/common-workflow-language/workflow-service
   :license: Apache License 2.0
   :recipe: /`wes-service-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wes-service-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wes-service-client/meta.yaml>`_

   


.. conda:package:: wes-service-client

   |downloads_wes-service-client| |docker_wes-service-client|

   :versions: 2.7-1, 2.5-1, 2.5-0
   
   :depends future: 
   :depends python: 
   :depends schema-salad: >=2.6.20170927145003,<3.0
   :depends setuptools: 
   :depends subprocess32: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wes-service-client

   and update with::

      conda update wes-service-client

   or use the docker container::

      docker pull quay.io/biocontainers/wes-service-client:<tag>

   (see `wes-service-client/tags`_ for valid values for ``<tag>``)


.. |downloads_wes-service-client| image:: https://img.shields.io/conda/dn/bioconda/wes-service-client.svg?style=flat
   :alt:   (downloads)
.. |docker_wes-service-client| image:: https://quay.io/repository/biocontainers/wes-service-client/status
   :target: https://quay.io/repository/biocontainers/wes-service-client
.. _`wes-service-client/tags`: https://quay.io/repository/biocontainers/wes-service-client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wes-service-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wes-service-client/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varda2-client'
.. highlight: bash

varda2-client
=============

.. conda:recipe:: varda2-client
   :replaces_section_title:

   A python CLI to Varda2 frequency database server.

   :homepage: https://github.com/varda/varda2-client
   :license: MIT / MIT
   :recipe: /`varda2-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varda2-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varda2-client/meta.yaml>`_

   


.. conda:package:: varda2-client

   |downloads_varda2-client| |docker_varda2-client|

   :versions: 0.6-0, 0.5-0, 0.3-0
   
   :depends python: >=3.6
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varda2-client

   and update with::

      conda update varda2-client

   or use the docker container::

      docker pull quay.io/biocontainers/varda2-client:<tag>

   (see `varda2-client/tags`_ for valid values for ``<tag>``)


.. |downloads_varda2-client| image:: https://img.shields.io/conda/dn/bioconda/varda2-client.svg?style=flat
   :target: https://anaconda.org/bioconda/varda2-client
   :alt:   (downloads)
.. |docker_varda2-client| image:: https://quay.io/repository/biocontainers/varda2-client/status
   :target: https://quay.io/repository/biocontainers/varda2-client
.. _`varda2-client/tags`: https://quay.io/repository/biocontainers/varda2-client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varda2-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varda2-client/README.html
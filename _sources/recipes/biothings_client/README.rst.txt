:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biothings_client'
.. highlight: bash

biothings_client
================

.. conda:recipe:: biothings_client
   :replaces_section_title:
   :noindex:

   Python Client for BioThings API services.

   :homepage: https://github.com/biothings/biothings_client.py
   :license: BSD / BSD
   :recipe: /`biothings_client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biothings_client/meta.yaml>`_

   


.. conda:package:: biothings_client

   |downloads_biothings_client| |docker_biothings_client|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends python: 
   :depends requests: ``>=2.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biothings_client

   and update with::

      conda update biothings_client

   or use the docker container::

      docker pull quay.io/biocontainers/biothings_client:<tag>

   (see `biothings_client/tags`_ for valid values for ``<tag>``)


.. |downloads_biothings_client| image:: https://img.shields.io/conda/dn/bioconda/biothings_client.svg?style=flat
   :target: https://anaconda.org/bioconda/biothings_client
   :alt:   (downloads)
.. |docker_biothings_client| image:: https://quay.io/repository/biocontainers/biothings_client/status
   :target: https://quay.io/repository/biocontainers/biothings_client
.. _`biothings_client/tags`: https://quay.io/repository/biocontainers/biothings_client?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biothings_client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biothings_client/README.html
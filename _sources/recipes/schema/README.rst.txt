:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'schema'
.. highlight: bash

schema
======

.. conda:recipe:: schema
   :replaces_section_title:

   Simple data validation library

   :homepage: https://github.com/keleshev/schema
   :license: MIT License
   :recipe: /`schema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/schema/meta.yaml>`_

   


.. conda:package:: schema

   |downloads_schema| |docker_schema|

   :versions: 0.6.8-0, 0.6.6-1, 0.6.6-0, 0.4.0-0
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install schema

   and update with::

      conda update schema

   or use the docker container::

      docker pull quay.io/biocontainers/schema:<tag>

   (see `schema/tags`_ for valid values for ``<tag>``)


.. |downloads_schema| image:: https://img.shields.io/conda/dn/bioconda/schema.svg?style=flat
   :alt:   (downloads)
.. |docker_schema| image:: https://quay.io/repository/biocontainers/schema/status
   :target: https://quay.io/repository/biocontainers/schema
.. _`schema/tags`: https://quay.io/repository/biocontainers/schema?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/schema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/schema/README.html
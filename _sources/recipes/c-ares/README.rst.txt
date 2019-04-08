:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'c-ares'
.. highlight: bash

c-ares
======

.. conda:recipe:: c-ares
   :replaces_section_title:

   c\-ares is a C library for asynchronous DNS requests \(including name resolves\)

   :homepage: http://c-ares.haxx.se/
   :license: MIT
   :recipe: /`c-ares <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c-ares>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/c-ares/meta.yaml>`_

   


.. conda:package:: c-ares

   |downloads_c-ares| |docker_c-ares|

   :versions: 1.11.0-1, 1.11.0-0
   
   :depends libgcc-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install c-ares

   and update with::

      conda update c-ares

   or use the docker container::

      docker pull quay.io/biocontainers/c-ares:<tag>

   (see `c-ares/tags`_ for valid values for ``<tag>``)


.. |downloads_c-ares| image:: https://img.shields.io/conda/dn/bioconda/c-ares.svg?style=flat
   :alt:   (downloads)
.. |docker_c-ares| image:: https://quay.io/repository/biocontainers/c-ares/status
   :target: https://quay.io/repository/biocontainers/c-ares
.. _`c-ares/tags`: https://quay.io/repository/biocontainers/c-ares?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/c-ares/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/c-ares/README.html
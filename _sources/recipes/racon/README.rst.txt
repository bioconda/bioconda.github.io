:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'racon'
.. highlight: bash

racon
=====

.. conda:recipe:: racon
   :replaces_section_title:

   Ultrafast consensus module for raw de novo genome assembly of long uncorrected reads.

   :homepage: https://github.com/isovic/racon
   :license: MIT
   :recipe: /`racon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon/meta.yaml>`_

   


.. conda:package:: racon

   |downloads_racon| |docker_racon|

   :versions: 1.3.2-0, 1.3.1-5, 1.3.1-4, 1.3.1-1, 1.3.1-0, 1.3.0-1, 1.2.1-1, 1.2.0-1, 1.2.0-0, 1.1.0-0, 1.0.1-0, 1.0.0-1, 1.0.0-0, 0.5.0-2, 0.5.0-1, 0.5.0-0
   
   :depends libstdcxx-ng: >=4.9
   
   :depends python: 
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install racon

   and update with::

      conda update racon

   or use the docker container::

      docker pull quay.io/biocontainers/racon:<tag>

   (see `racon/tags`_ for valid values for ``<tag>``)


.. |downloads_racon| image:: https://img.shields.io/conda/dn/bioconda/racon.svg?style=flat
   :alt:   (downloads)
.. |docker_racon| image:: https://quay.io/repository/biocontainers/racon/status
   :target: https://quay.io/repository/biocontainers/racon
.. _`racon/tags`: https://quay.io/repository/biocontainers/racon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/racon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/racon/README.html
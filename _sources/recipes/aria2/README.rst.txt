:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aria2'
.. highlight: bash

aria2
=====

.. conda:recipe:: aria2
   :replaces_section_title:

   aria2 is a lightweight multi\-protocol \& multi\-source\, cross platform download utility operated in command\-line. It supports HTTP\/HTTPS\, FTP\, SFTP\, BitTorrent and Metalink.

   :homepage: https://aria2.github.io/
   :developer docs: https://github.com/aria2/aria2/
   :license: GPL / GPL-2.0
   :recipe: /`aria2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aria2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aria2/meta.yaml>`_

   


.. conda:package:: aria2

   |downloads_aria2| |docker_aria2|

   :versions: 1.34.0-3, 1.34.0-0, 1.23.0-1, 1.23.0-0
   
   :depends c-ares: 
   
   :depends libgcc-ng: >=4.9
   
   :depends libssh2: >=1.8.0,<1.9.0a0
   
   :depends libxml2: >=2.9.8,<2.10.0a0
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends sqlite: >=3.24.0,<4.0a0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aria2

   and update with::

      conda update aria2

   or use the docker container::

      docker pull quay.io/biocontainers/aria2:<tag>

   (see `aria2/tags`_ for valid values for ``<tag>``)


.. |downloads_aria2| image:: https://img.shields.io/conda/dn/bioconda/aria2.svg?style=flat
   :alt:   (downloads)
.. |docker_aria2| image:: https://quay.io/repository/biocontainers/aria2/status
   :target: https://quay.io/repository/biocontainers/aria2
.. _`aria2/tags`: https://quay.io/repository/biocontainers/aria2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aria2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aria2/README.html
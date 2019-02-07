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

   :versions: 1.34.0, 1.23.0

   :depends: :conda:package:`c-ares`  :conda:package:`libgcc`  :conda:package:`libssh2`  :conda:package:`libxml2`  :conda:package:`openssl`  :conda:package:`sqlite`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_aria2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aria2

   and update with::

      conda update aria2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/aria2


.. |required_by_aria2| conda:required_by:: aria2
.. |downloads_aria2| image:: https://img.shields.io/conda/dn/bioconda/aria2.svg?style=flat
   :alt:   (downloads)
.. |docker_aria2| image:: https://quay.io/repository/biocontainers/aria2/status
   :target: https://quay.io/repository/biocontainers/aria2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aria2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aria2/README.html


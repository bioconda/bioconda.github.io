.. title:: Package Recipe 'lightassembler'
.. highlight: bash


lightassembler
==============

.. conda:recipe:: lightassembler
   :replaces_section_title:

   Lightweight assembly algorithm designed to be executed on a desktop machine. It uses a pair of cache oblivious Bloom filters\, one holding a uniform sample of g\-spaced sequenced k\-mers and the other holding k\-mers classified as likely correct\, using a simple statistical test.

   :homepage: https://github.com/SaraEl-Metwally/LightAssembler
   :license: GPL
   :recipe: /`lightassembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightassembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lightassembler/meta.yaml>`_
   :links: biotools: :biotools:`LightAssembler`, doi: :doi:`10.1093/bioinformatics/btw470`

   


.. conda:package:: lightassembler

   |downloads_lightassembler| |docker_lightassembler|

   :versions: 1.0

   :depends: :conda:package:`libtool`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_lightassembler|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install lightassembler

   and update with::

      conda update lightassembler

   or use the docker container::

      docker pull quay.io/repository/biocontainers/lightassembler


.. |required_by_lightassembler| conda:required_by:: lightassembler
.. |downloads_lightassembler| image:: https://img.shields.io/conda/dn/bioconda/lightassembler.svg?style=flat
   :alt:   (downloads)
.. |docker_lightassembler| image:: https://quay.io/repository/biocontainers/lightassembler/status
   :target: https://quay.io/repository/biocontainers/lightassembler







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lightassembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lightassembler/README.html


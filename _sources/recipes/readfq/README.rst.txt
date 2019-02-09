.. title:: Package Recipe 'readfq'
.. highlight: bash


readfq
======

.. conda:recipe:: readfq
   :replaces_section_title:

   A high\-speed tool to calculate reads number and total base count in FASTQ file\, forked from Li Heng\'s original version

   :homepage: https://github.com/billzt/readfq
   :license: MIT / MIT
   :recipe: /`readfq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/readfq/meta.yaml>`_

   


.. conda:package:: readfq

   |downloads_readfq| |docker_readfq|

   :versions: 2015.08.30

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_readfq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install readfq

   and update with::

      conda update readfq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/readfq


.. |required_by_readfq| conda:required_by:: readfq
.. |downloads_readfq| image:: https://img.shields.io/conda/dn/bioconda/readfq.svg?style=flat
   :alt:   (downloads)
.. |docker_readfq| image:: https://quay.io/repository/biocontainers/readfq/status
   :target: https://quay.io/repository/biocontainers/readfq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/readfq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/readfq/README.html


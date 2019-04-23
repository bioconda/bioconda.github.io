:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqpuri'
.. highlight: bash

fastqpuri
=========

.. conda:recipe:: fastqpuri
   :replaces_section_title:

   fastq quality assessment and filtering tool

   :homepage: https://github.com/jengelmann/FastqPuri
   :license: GPL3.0
   :recipe: /`fastqpuri <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpuri>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpuri/meta.yaml>`_

   


.. conda:package:: fastqpuri

   |downloads_fastqpuri| |docker_fastqpuri|

   :versions: 1.0.6-6, 1.0.6b-7, 1.0.5-5, 1.0.5-3
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends pandoc: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqpuri

   and update with::

      conda update fastqpuri

   or use the docker container::

      docker pull quay.io/biocontainers/fastqpuri:<tag>

   (see `fastqpuri/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqpuri| image:: https://img.shields.io/conda/dn/bioconda/fastqpuri.svg?style=flat
   :alt:   (downloads)
.. |docker_fastqpuri| image:: https://quay.io/repository/biocontainers/fastqpuri/status
   :target: https://quay.io/repository/biocontainers/fastqpuri
.. _`fastqpuri/tags`: https://quay.io/repository/biocontainers/fastqpuri?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqpuri/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqpuri/README.html
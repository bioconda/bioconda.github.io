:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastq-anonymous'
.. highlight: bash

fastq-anonymous
===============

.. conda:recipe:: fastq-anonymous
   :replaces_section_title:

   Change the sequence of a fastq file to enable sharing of confidential information\, for troubleshooting￼ of tools.

   :homepage: https://github.com/wdecoster/fastq-anonymous
   :license: MIT / MIT License
   :recipe: /`fastq-anonymous <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-anonymous/meta.yaml>`_

   


.. conda:package:: fastq-anonymous

   |downloads_fastq-anonymous| |docker_fastq-anonymous|

   :versions: 1.0.1-1, 1.0.1-0
   
   :depends biopython: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-anonymous

   and update with::

      conda update fastq-anonymous

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq-anonymous:<tag>

   (see `fastq-anonymous/tags`_ for valid values for ``<tag>``)


.. |downloads_fastq-anonymous| image:: https://img.shields.io/conda/dn/bioconda/fastq-anonymous.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq-anonymous| image:: https://quay.io/repository/biocontainers/fastq-anonymous/status
   :target: https://quay.io/repository/biocontainers/fastq-anonymous
.. _`fastq-anonymous/tags`: https://quay.io/repository/biocontainers/fastq-anonymous?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-anonymous/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-anonymous/README.html
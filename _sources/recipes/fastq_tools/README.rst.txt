.. title:: Package Recipe 'fastq-tools'
.. highlight: bash


fastq-tools
===========

.. conda:recipe:: fastq_tools
   :replaces_section_title:

   A collection of fastq manipulation scripts written in C for speed.

   :homepage: http://homes.cs.washington.edu/~dcjones/fastq-tools/
   :license: MIT
   :recipe: /`fastq_tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq_tools/meta.yaml>`_

   


.. conda:package:: fastq-tools

   |downloads_fastq-tools| |docker_fastq-tools|

   :versions: 0.8

   :depends: :conda:package:`pcre`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_fastq-tools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-tools

   and update with::

      conda update fastq-tools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq-tools


.. |required_by_fastq-tools| conda:required_by:: fastq-tools
.. |downloads_fastq-tools| image:: https://img.shields.io/conda/dn/bioconda/fastq-tools.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq-tools| image:: https://quay.io/repository/biocontainers/fastq-tools/status
   :target: https://quay.io/repository/biocontainers/fastq-tools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-tools/README.html


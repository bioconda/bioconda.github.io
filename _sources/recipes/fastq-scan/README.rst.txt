.. title:: Package Recipe 'fastq-scan'
.. highlight: bash


fastq-scan
==========

.. conda:recipe:: fastq-scan
   :replaces_section_title:

   FASTQ summary statistics in JSON format

   :homepage: https://github.com/rpetit3/fastq-scan
   :license: MIT
   :recipe: /`fastq-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-scan/meta.yaml>`_

   


.. conda:package:: fastq-scan

   |downloads_fastq-scan| |docker_fastq-scan|

   :versions: 0.3, 0.2

   :depends: :conda:package:`libstdcxx-ng` >=4.9 

   :required~by: |required_by_fastq-scan|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-scan

   and update with::

      conda update fastq-scan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq-scan


.. |required_by_fastq-scan| conda:required_by:: fastq-scan
.. |downloads_fastq-scan| image:: https://img.shields.io/conda/dn/bioconda/fastq-scan.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq-scan| image:: https://quay.io/repository/biocontainers/fastq-scan/status
   :target: https://quay.io/repository/biocontainers/fastq-scan







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-scan/README.html


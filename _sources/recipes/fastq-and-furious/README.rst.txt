.. title:: Package Recipe 'fastq-and-furious'
.. highlight: bash


fastq-and-furious
=================

.. conda:recipe:: fastq-and-furious
   :replaces_section_title:

   Fast handling of FASTQ files

   :homepage: https://github.com/lgautier/fastq-and-furious
   :license: MIT / MIT License
   :recipe: /`fastq-and-furious <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-and-furious>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastq-and-furious/meta.yaml>`_

   


.. conda:package:: fastq-and-furious

   |downloads_fastq-and-furious| |docker_fastq-and-furious|

   :versions: 0.2.0, 0.1.0

   :depends: :conda:package:`libgcc`  :conda:package:`python` 3.5* 

   :required~by: |required_by_fastq-and-furious|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastq-and-furious

   and update with::

      conda update fastq-and-furious

   or use the docker container::

      docker pull quay.io/repository/biocontainers/fastq-and-furious


.. |required_by_fastq-and-furious| conda:required_by:: fastq-and-furious
.. |downloads_fastq-and-furious| image:: https://img.shields.io/conda/dn/bioconda/fastq-and-furious.svg?style=flat
   :alt:   (downloads)
.. |docker_fastq-and-furious| image:: https://quay.io/repository/biocontainers/fastq-and-furious/status
   :target: https://quay.io/repository/biocontainers/fastq-and-furious







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastq-and-furious/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastq-and-furious/README.html


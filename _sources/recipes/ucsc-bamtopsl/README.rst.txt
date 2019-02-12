.. title:: Package Recipe 'ucsc-bamtopsl'
.. highlight: bash


ucsc-bamtopsl
=============

.. conda:recipe:: ucsc-bamtopsl
   :replaces_section_title:

   Convert a bam file to a psl and optionally also a fasta file that contains the reads.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bamtopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bamtopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bamtopsl/meta.yaml>`_

   


.. conda:package:: ucsc-bamtopsl

   |downloads_ucsc-bamtopsl| |docker_ucsc-bamtopsl|

   :versions: 366, 357

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-bamtopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bamtopsl

   and update with::

      conda update ucsc-bamtopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bamtopsl


.. |required_by_ucsc-bamtopsl| conda:required_by:: ucsc-bamtopsl
.. |downloads_ucsc-bamtopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bamtopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bamtopsl| image:: https://quay.io/repository/biocontainers/ucsc-bamtopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-bamtopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bamtopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bamtopsl/README.html


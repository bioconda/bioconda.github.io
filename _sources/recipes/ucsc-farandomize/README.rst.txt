.. title:: Package Recipe 'ucsc-farandomize'
.. highlight: bash


ucsc-farandomize
================

.. conda:recipe:: ucsc-farandomize
   :replaces_section_title:

   Program to create random fasta records

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-farandomize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farandomize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-farandomize/meta.yaml>`_

   


.. conda:package:: ucsc-farandomize

   |downloads_ucsc-farandomize| |docker_ucsc-farandomize|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-farandomize|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-farandomize

   and update with::

      conda update ucsc-farandomize

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-farandomize


.. |required_by_ucsc-farandomize| conda:required_by:: ucsc-farandomize
.. |downloads_ucsc-farandomize| image:: https://img.shields.io/conda/dn/bioconda/ucsc-farandomize.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-farandomize| image:: https://quay.io/repository/biocontainers/ucsc-farandomize/status
   :target: https://quay.io/repository/biocontainers/ucsc-farandomize







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-farandomize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-farandomize/README.html


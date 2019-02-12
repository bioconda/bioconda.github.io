.. title:: Package Recipe 'ucsc-fatofastq'
.. highlight: bash


ucsc-fatofastq
==============

.. conda:recipe:: ucsc-fatofastq
   :replaces_section_title:

   Convert fa to fastq format\, just faking quality values.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fatofastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatofastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fatofastq/meta.yaml>`_

   


.. conda:package:: ucsc-fatofastq

   |downloads_ucsc-fatofastq| |docker_ucsc-fatofastq|

   :versions: 366, 357, 332

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-fatofastq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fatofastq

   and update with::

      conda update ucsc-fatofastq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-fatofastq


.. |required_by_ucsc-fatofastq| conda:required_by:: ucsc-fatofastq
.. |downloads_ucsc-fatofastq| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fatofastq.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fatofastq| image:: https://quay.io/repository/biocontainers/ucsc-fatofastq/status
   :target: https://quay.io/repository/biocontainers/ucsc-fatofastq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fatofastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fatofastq/README.html


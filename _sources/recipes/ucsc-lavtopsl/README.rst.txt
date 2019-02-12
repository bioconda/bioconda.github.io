.. title:: Package Recipe 'ucsc-lavtopsl'
.. highlight: bash


ucsc-lavtopsl
=============

.. conda:recipe:: ucsc-lavtopsl
   :replaces_section_title:

   Convert blastz lav to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-lavtopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-lavtopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-lavtopsl/meta.yaml>`_

   


.. conda:package:: ucsc-lavtopsl

   |downloads_ucsc-lavtopsl| |docker_ucsc-lavtopsl|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-lavtopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-lavtopsl

   and update with::

      conda update ucsc-lavtopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-lavtopsl


.. |required_by_ucsc-lavtopsl| conda:required_by:: ucsc-lavtopsl
.. |downloads_ucsc-lavtopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-lavtopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-lavtopsl| image:: https://quay.io/repository/biocontainers/ucsc-lavtopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-lavtopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-lavtopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-lavtopsl/README.html


.. title:: Package Recipe 'ucsc-maftopsl'
.. highlight: bash


ucsc-maftopsl
=============

.. conda:recipe:: ucsc-maftopsl
   :replaces_section_title:

   Convert maf to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maftopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maftopsl/meta.yaml>`_

   


.. conda:package:: ucsc-maftopsl

   |downloads_ucsc-maftopsl| |docker_ucsc-maftopsl|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-maftopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-maftopsl

   and update with::

      conda update ucsc-maftopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maftopsl


.. |required_by_ucsc-maftopsl| conda:required_by:: ucsc-maftopsl
.. |downloads_ucsc-maftopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maftopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maftopsl| image:: https://quay.io/repository/biocontainers/ucsc-maftopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-maftopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maftopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maftopsl/README.html


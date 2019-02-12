.. title:: Package Recipe 'ucsc-axttopsl'
.. highlight: bash


ucsc-axttopsl
=============

.. conda:recipe:: ucsc-axttopsl
   :replaces_section_title:

   Convert axt to psl format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axttopsl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axttopsl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axttopsl/meta.yaml>`_

   


.. conda:package:: ucsc-axttopsl

   |downloads_ucsc-axttopsl| |docker_ucsc-axttopsl|

   :versions: 366, 357, 332, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-axttopsl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axttopsl

   and update with::

      conda update ucsc-axttopsl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-axttopsl


.. |required_by_ucsc-axttopsl| conda:required_by:: ucsc-axttopsl
.. |downloads_ucsc-axttopsl| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axttopsl.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-axttopsl| image:: https://quay.io/repository/biocontainers/ucsc-axttopsl/status
   :target: https://quay.io/repository/biocontainers/ucsc-axttopsl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axttopsl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axttopsl/README.html


.. title:: Package Recipe 'ucsc-liftup'
.. highlight: bash


ucsc-liftup
===========

.. conda:recipe:: ucsc-liftup
   :replaces_section_title:

   change coordinates of .psl\, .agp\, .gap\, .gl\, .out\, .align\, .gff\, .gtf

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-liftup <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftup>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-liftup/meta.yaml>`_

   


.. conda:package:: ucsc-liftup

   |downloads_ucsc-liftup| |docker_ucsc-liftup|

   :versions: 366, 357, 324

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libpng` >=1.6.34,<1.7.0a0 :conda:package:`libuuid`  :conda:package:`mysql-connector-c`  :conda:package:`openssl` >=1.0.2o,<1.0.3a :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-liftup|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-liftup

   and update with::

      conda update ucsc-liftup

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-liftup


.. |required_by_ucsc-liftup| conda:required_by:: ucsc-liftup
.. |downloads_ucsc-liftup| image:: https://img.shields.io/conda/dn/bioconda/ucsc-liftup.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-liftup| image:: https://quay.io/repository/biocontainers/ucsc-liftup/status
   :target: https://quay.io/repository/biocontainers/ucsc-liftup







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-liftup/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-liftup/README.html

